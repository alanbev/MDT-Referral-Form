import React, {  useRef, useContext, useState ,useEffect} from 'react';
import {  Button, Box, Grid } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import symptomHandler from '../../utilities/symptomHandler.js';
import RadioButton from './radiobutton';
import CheckboxGroup from './checkboxgroup'
import InputField from './inputfield';
import TextArea from './textarea';
import DropDown from './dropdown'
import ReferralContents from '../../Contents/referalcontents.js'




function FormMaker(props){


 const initialValues= symptomHandler.initialValuesBuilder(ReferralContents)
 const [newValues,setNewValues]=useState(initialValues)


const formValues=useRef()

 const validationSchema={}
 
 const onSubmit=(values)=>
   {
    console.log(values)
    
   }

const onClick=()=>{
const setVals=()=>(setNewValues(formValues.current.values))// allows time for react to update state (tried a useEffect but didn't work)
const delay=()=> setTimeout(setVals,400)
delay()
}




 let formQuestions=ReferralContents.map((symptom, index)=>
    { symptom["show"]=true
     
      symptom["name"]=symptom.label.replaceAll(" ","_")
    
      if (symptom.hasOwnProperty("Conditional"))
        {
         let conditional=symptom.Conditional
        if (newValues[conditional[0]]!==conditional[1])
        {
          symptom["show"]=false
        }
        else {symptom["show"]=true}
      }

 switch(symptom["controlType"])
    {
      case "radio button":
        symptom["optionObject"]=symptomHandler.ListOptions(symptom.options, "checkbox")
       return (<Grid item xs={12} sm={6} key={index}> <RadioButton  symptom={symptom}   onClick={onClick} key={0} /> </Grid>)

      case "number":
      return (<Grid item xs={12} sm={6} key={index}> <InputField type={"number"} symptom ={symptom} min={"0"} key={0} /> </Grid>)

      case "text":
       return (<Grid item xs={12} sm={6} key={index}> <InputField type={"text"} symptom ={symptom}  key={0} /> </Grid>)

      
      case "textarea":
    return (<Grid item xs={12} sm={6} key={index}> <TextArea  symptom ={symptom}  key={0} /> </Grid>)
      
      case "dropdown": 
      symptom["optionObject"]=symptomHandler.ListOptions(symptom.options, "dropdown")
      return(<Grid item xs={12} sm={6} key={index}> <DropDown  symptom ={symptom}  key={0} /> </Grid>)

      case "checkbox group":
        let gridSize = 6
        if (symptom.options.length >6)
          {gridSize = 12} 
        symptom["optionObject"]=symptomHandler.ListOptions(symptom.options, "checkbox")
        return (<Grid item  xs={12} sm={gridSize} key={index}> <CheckboxGroup symptom={symptom}  key={0} /> </Grid>)

      case "date": 
      return (<Grid item xs={12} sm={6} key={index}> <InputField type={"date"} symptom ={symptom}  key={0} /> </Grid>)

      default:{return(<></>)}
 }

})

 
return(

        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        //validationSchema={validationSchema}
        innerRef={formValues}
      
        >



       <Form>
           
        <Box>
        <Grid container >
        {formQuestions}
       </Grid> 
       </Box>
        <Button sx={{ m: 1 }} variant='contained' size="small" type='submit'>Submit</Button>
        
        </Form>
      </Formik>

)



}
export default FormMaker