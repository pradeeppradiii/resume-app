import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import { FaGraduationCap } from 'react-icons/fa';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

function EducationDetails({completeEducationalData,setCompleteEducationalData,educationalData, setEducationalData}) {

  const handleData=(e)=>{
    const educationalDataCopy={...educationalData}
    educationalDataCopy[e.target.name]=e.target.value
    setEducationalData(educationalDataCopy)
  }

  const handleSubmit= async()=>{
    const completeEducationalDataCopy=[...completeEducationalData]
    completeEducationalDataCopy[0]=educationalData
    setCompleteEducationalData(completeEducationalDataCopy)
  }
  return (
    <div>
      <div class='container'>
        <h3 className='heading'>Educational Details</h3>
        <div class="row input-row">
            <div class="col-3"><input type="text" class="form-control" placeholder="College/University" name='college' value={educationalData.college} onChange={(e)=>{handleData(e)}}/><span className='icon-2'><FaGraduationCap/></span></div>
            <div class="col"><input type="date" class="form-control w-75" name='collegeStartDate' value={educationalData.collegeStartDate} onChange={(e)=>{handleData(e)}}/></div>
            <div class="col"><input type="date" class="form-control" name='collegeEndDate' value={educationalData.collegeEndDate} onChange={(e)=>{handleData(e)}}/></div>
        </div>
        <div class="row input-row">
            <div class="col-3"><input type="text" class="form-control" placeholder="Qualification" name='collegeQualification' value={educationalData.collegeQualification} onChange={(e)=>{handleData(e)}}/></div>
            <div class="col"><input type="text" class="form-control" placeholder="Description" name='collegeQualificationDescription' value={educationalData.collegeQualificationDescription} onChange={(e)=>{handleData(e)}}/></div>
        </div>
        <div class="row input-row">
            <div class="col-3"><input type="text" class="form-control" placeholder="School" name='school' value={educationalData.school} onChange={(e)=>{handleData(e)}}/><span className='icon-2'><FaGraduationCap/></span></div>
            <div class="col"><input type="date" class="form-control w-75" name='schoolStartDate' value={educationalData.schoolStartDate} onChange={(e)=>{handleData(e)}}/></div>
            <div class="col"><input type="date" class="form-control" name='schoolEndDate' value={educationalData.schoolEndDate} onChange={(e)=>{handleData(e)}}/></div>
        </div>
        <div class="row input-row">
            <div class="col-3"><input type="text" class="form-control" placeholder="Qualification" name='schoolQualification' value={educationalData.schoolQualification} onChange={(e)=>{handleData(e)}}/></div>
            <div class="col"><input type="text" class="form-control" placeholder="Description" name='schoolQualificationDescription' value={educationalData.schoolQualificationDescription} onChange={(e)=>{handleData(e)}}/></div>
        </div>

        <div className='buttons-2'>
        
          <Link to={'/personal-details'}  className='button-font'>
          <button type="button" class="btn btn-secondary prev-button-2"> <span><AiOutlineLeft/></span>Back</button>
          </Link>
        
        

        
        <Link to={'/experience-details'} className='button-font'>
        <button type="button" class="btn btn-danger next-button-2"> Next <span><AiOutlineRight/></span></button>
        </Link> 
        </div>
      </div>
    </div>
  )
}

export default EducationDetails