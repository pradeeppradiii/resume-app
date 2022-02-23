import { BrowserRouter as Router,Link,Route } from 'react-router-dom';
import React,{useEffect, useState} from 'react'
import './App.css';
import EducationDetails from './components/EducationDetails';
import ExperienceDetails from './components/ExperienceDetails';
import ExtraDetails from './components/ExtraDetails';
import PersonalDetails from './components/PersonalDetails';
import Projects from './components/Projects';
import Home from './components/Home';
import PdfGenerate from './components/PdfGenerate';

function App() {

  const [downloadPdf, setDownloadPdf] = useState(false)
  // All the data from the all components
  const [completePersonalData, setCompletePersonalData] = useState([])
  const [personalData, setPersonalData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    website:'',
    github:'',
    linkedIn:'',
    twitter:'',
    facebook:'',
    instagram:''
  })
  const [completeEducationalData,setCompleteEducationalData]=useState([])
  const [educationalData, setEducationalData] = useState({
    college:'',
    collegeStartDate:'',
    collegeEndDate:'',
    collegeQualification:'',
    collegeQualificationDescription:'',
    school:'',
    schoolStartDate:'',
    schoolEndDate:'',
    schoolQualification:'',
    schoolQualificationDescription:''
  })

  const [completeExperienceDetails, setCompleteExperienceDetails] = useState([])
  const [experienceDetails, setExperienceDetails] = useState({
      institute1:'',
      position1:'',
      duration1:'',
      description1:'',
      institute2:'',
      position2:'',
      duration2:'',
      description2:''
  })

  const [completeProjectDetails, setCompleteProjectDetails] = useState([])
  const [projectDetails, setProjectDetails] = useState({
    project1Title:'',
    project1Link:'',
    project1Description:'',
    project2Title:'',
    project2Link:'',
    project2Description:''
  })

  const [completeExtraDetails, setCompleteExtraDetails] = useState([])
  const [extraDetails, setExtraDetails] = useState({
    skill1:'',
    skill2:'',
    skill3:'',
    skill4:'',
    skill5:'',
    skill6:'',
    interest1:'',
    interest2:'',
    interest3:'',
    interest4:'',
    interest5:'',
    interest6:''
  })


//=========================================================================================================================
useEffect(()=>{
  if(completePersonalData.length>0 && completeEducationalData.length>0 && completeExperienceDetails.length>0 && completeProjectDetails.length>0 && completeExtraDetails.length>0){
    console.log('personal :',completePersonalData);
    console.log('education :',completeEducationalData);
    console.log('Experience :',completeExperienceDetails);
    console.log('Project :',completeProjectDetails);
    console.log('Extra :',completeExtraDetails);
  }
},[completePersonalData,completeEducationalData,completeExperienceDetails,completeProjectDetails,completeExtraDetails])
//=========================================================================================================================

  return (  
    <Router>
      
    <div className="App">
       <nav class="navbar navbar-expand-xlg navbar-light bg-primary">
            <div class="container-fluid nav-bar">
                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <span class="navbar-toggler-icon"></span>
                </button>
               
                <a class="navbar-brand" >Resume builder</a>
                <a class="navbar-brand">Login</a>
            </div>
        </nav>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Resume Builder</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body offcanvas-links">
    
  <Link to={'/personal-details'}    className='offcanvas-link'>  Personal Details    </Link>
  <Link to={'/educational-details'} className='offcanvas-link'>  Educational Details </Link>
  <Link to={'/experience-details'}  className='offcanvas-link'>  Experience Details  </Link>
  <Link to={'/project-details'}     className='offcanvas-link'>  Project Details     </Link>
  <Link to={'/extra-details'}       className='offcanvas-link'>  Extra Details       </Link>
  </div>
</div>
          <div>
          <Route exact path={'/'} component={Home} />
            <Route exact path={'/personal-details'} render={(e)=>{return <PersonalDetails 
                                                                      setPersonalData={setPersonalData}
                                                                      setCompletePersonalData={setCompletePersonalData}
                                                                      personalData={personalData}
                                                                      completePersonalData={completePersonalData} />}} />
            <Route path={'/educational-details'} render={()=>{return <EducationDetails 
                                                                      completeEducationalData={completeEducationalData}
                                                                      setCompleteEducationalData={setCompleteEducationalData}
                                                                      educationalData={educationalData}
                                                                      setEducationalData={setEducationalData} />}} />
            <Route path={'/experience-details'} render={()=>{return <ExperienceDetails 
                                                                      experienceDetails={experienceDetails}
                                                                      setExperienceDetails={setExperienceDetails}
                                                                      completeExperienceDetails={completeExperienceDetails}
                                                                      setCompleteExperienceDetails={setCompleteExperienceDetails} />}} />
            <Route path={'/project-details'} render={()=>{return <Projects 
                                                                    projectDetails={projectDetails}
                                                                    setProjectDetails={setProjectDetails}
                                                                    completeProjectDetails={completeProjectDetails}
                                                                    setCompleteProjectDetails={setCompleteProjectDetails} /> }} />
            <Route path={'/extra-details'} render={()=>{return <ExtraDetails 
                                                                  extraDetails={extraDetails}
                                                                  setExtraDetails={setExtraDetails}
                                                                  completeExtraDetails={completeExtraDetails}
                                                                  setCompleteExtraDetails={setCompleteExtraDetails}
                                                                  setDownloadPdf={setDownloadPdf} /> }} />
          { downloadPdf ? <PdfGenerate 
                    personalData={personalData} 
                    educationalData={educationalData} 
                    experienceDetails={experienceDetails}
                    projectDetails={projectDetails}
                    extraDetails={extraDetails}
                    setDownloadPdf={setDownloadPdf} />
                    : null
          }
          </div>
    
    </div>
    </Router>
  );
}

export default App;
