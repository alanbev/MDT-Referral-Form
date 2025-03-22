const referalContents=[
    {
    label:"Name",
    controlType:"text",
    options:[]
    },

    {
    label:"NHS number",
    controlType:"number",
    options:[]
    },

    {
    label:"Date of Birth",
    controlType:"date",
    options:[""]   
    },
   
    {
    label:"WHO Performance status",
    controlType:"dropdown",
    options:["0","1","2","3","4","5"]   
    },

    {
    label:"MDT to refer to",
    controlType:"dropdown",
    options:["Colorectal","Anal","ERC"]
    // , "CUP", "Gynaecology", "Haematology", "Lung", "Neuro", "Sarcoma","Skin", "Upper GI", "Urology"],
    },   
    
    
    {
    label:"MDT Consultant",
    controlType:"dropdown",
    options:["Unspecifed","Barrow","Beveridge", "Bhowmick", "Davies","Hany", "Jadav", "Kearsey", "Mitchell", "Parkin", "Peristerakis", "Beaumont", "Lau", "Williamson", "Zekri"]   
    },

    {
    label:"Consultant referring (if not MDT cons)",
    controlType:"text",
    options:[]   
    },

    {
    label:"Specialty of Consultant referring (if not MDT cons)",
    controlType:"text",
    options:[]   
    },
    {
    label:"Contact e-mail for referrer",
    controlType:"text",
    options:[]   
    },

    {
    label:"Urgent addition (inpatient or treatment planned in next 10 days)",
    controlType:"radio button",
    options:["Yes", "No"] ,
    default: "No"  
    },

    {
    label:"Screening service patient",
    controlType:"radio button",
    options:["Yes", "No"] ,
    default: "No"  
    },

    {
    label:"LTH patient",
    controlType:"radio button",
    options:["Yes", "No"] ,
    default: "Yes"  
    },

 

 {
    label:"Trust referring",
    controlType:"dropdown",
    options:["Blackpool", "East Lancs", "Morecambe Bay", "Fulwood Hall", "Euxton Hall", "Buckshaw", "Other"],
    Conditional:["LTH_patient", "No"] 
    },

  {
    label:"Other referring trust",
    controlType:"text",
    Conditional:["LTH_patient", "No"] 
    },



    {
    label:"Inpatient",
    controlType:"radio button",
    options:["Yes", "No"] ,
    default: "No"  
    },


  
    
    {
    label:"Previously discussed at this MDT",
    controlType:"radio button",
    options:["Yes", "No"] ,
    default: "No"  
    },
    
    {
    label:"Has this episode been discussed at another MDT",
    controlType:"radio button",
    options:["Yes", "No"] ,
    default: "No"  
    },

  {
    label:"Which other MDT has discussed this episode",
    controlType:"dropdown",
    options:["Anal", "Colorectal","ERC","CUP" , "Gynaecology", "Haematology", "Lung", "Neuro", "Sarcoma","Skin", "Upper GI", "Urology"],
    Conditional:["Has_this_episode_been_discussed_at_another_MDT", "Yes" ] 
    }, 

    {
    label:"Confirmed cancer diagnosis?", 
    controlType:"radio button",
    options:["Yes", "No"] ,
    default: "No"  
    },

    {
    label:"Brief Clinical History",
    controlType:"textarea",
    options:[]
    },

  
    {
    label:"Investigations to discuss",
    controlType:"checkbox group",
    options:["Histology", "CT", "MR", "PET", "Nuclear Medicine", "Ultrasound","Other radiology- detail in question for MDT box", "Endoscopic Ix"],
    },
        


    {
      label:"Were all of these investigations performed at LTH", 
      controlType:"radio button",
      options:["Yes", "No"] ,
      default: "Yes"  
      },

    
  {
    label:"Please list external investigations with date and hospital",
    controlType:"textarea",
    options:[],
    Conditional:["Were_all_of_these_investigations_performed_at_LTH", "No" ] 
    },

    {
    label:"Post Op discussion", 
    controlType:"radio button",
    options:["Yes", "No"] ,
    default: "No"  
    },

    {
    label:"Operation",
    controlType:"text",
    options:[],
    Conditional:["Post_Op_discussion", "Yes" ] 
    },

    {
    label:"Post neoadjuvant therapy discussion",
    controlType:"radio button",
    options:["Yes", "No"] ,
    default: "No"  
    },

{
label:"Question(s) for MDT",
controlType:"textarea",
options:[]
},
]


export default referalContents

    




