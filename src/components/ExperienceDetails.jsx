import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { BsCheckCircleFill } from 'react-icons/bs';
import { MdDescription } from 'react-icons/md';
import { CgOrganisation,CgTimelapse } from 'react-icons/cg';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

function ExperienceDetails({completeExperienceDetails, setCompleteExperienceDetails,experienceDetails, setExperienceDetails}) {

  const handleData=(e)=>{
    const experienceDetailsCopy={...experienceDetails}
    experienceDetailsCopy[e.target.name]=e.target.value
    setExperienceDetails(experienceDetailsCopy)
  }

  const handleSubmit=()=>{
    const completeExperienceDetailsCopy=[...completeExperienceDetails]
    completeExperienceDetailsCopy[0]=experienceDetails
    setCompleteExperienceDetails(completeExperienceDetailsCopy)
  }

  return (
    <div> 
      <div class='container'>
        <h3 className='heading'>Experience Details</h3>

        <p className='extra-heading'><span><BsCheckCircleFill/></span>    Experience 1</p>

        <div class="row input-row">
            <div class="col-3"><input type="text" class="form-control" placeholder="Institute/Organisation" name='institute1' value={experienceDetails.institute1} onChange={(e)=>{handleData(e)}}/><span className='icon-3'><CgOrganisation/></span></div>
            <div class="col"><input type="text" class="form-control w-75" placeholder="Position" name='position1' value={experienceDetails.position1} onChange={(e)=>{handleData(e)}}/><span className='icon-3a'><CgOrganisation/></span></div>
            <div class="col"><input type="text" class="form-control" placeholder="Duration" name='duration1' value={experienceDetails.duration1} onChange={(e)=>{handleData(e)}}/><span className='icon-3b'><CgTimelapse/></span></div>
        </div>
        <div class="row input-row">
            <div class="col"><input type="text" class="form-control" placeholder="Description" name='description1' value={experienceDetails.description1} onChange={(e)=>{handleData(e)}}/><span className='icon-3c'><MdDescription/></span></div>
        </div>

        <p className='extra-heading'><span><BsCheckCircleFill/></span>    Experience 2</p>

        <div class="row input-row">
            <div class="col-3"><input type="text" class="form-control" placeholder="Institute/Organisation" name='institute2' value={experienceDetails.institute2} onChange={(e)=>{handleData(e)}}/><span className='icon-3'><CgOrganisation/></span></div>
            <div class="col"><input type="text" class="form-control w-75" placeholder="Position" name='position2' value={experienceDetails.position2} onChange={(e)=>{handleData(e)}}/><span className='icon-3a'><CgOrganisation/></span></div>
            <div class="col"><input type="text" class="form-control" placeholder="Duration" name='duration2' value={experienceDetails.duration2} onChange={(e)=>{handleData(e)}}/><span className='icon-3b'><CgTimelapse/></span></div>
        </div>
        <div class="row input-row">
            <div class="col"><input type="text" class="form-control" placeholder="Description" name='description2' value={experienceDetails.description2} onChange={(e)=>{handleData(e)}}/><span className='icon-3c'><MdDescription/></span></div>
        </div>

        <div className='buttons-2'>
        
        <Link to={'/educational-details'}  className='button-font'>
        <button type="button" class="btn btn-secondary prev-button-2"><span><AiOutlineLeft/></span>Back</button>
          </Link>
        
        

        <Link to={'/project-details'} className='button-font'>
        <button type="button" class="btn btn-danger next-button-2"> Next <span><AiOutlineRight/></span></button>
          </Link> 
        </div>
      </div>
    </div>
  )
}

export default ExperienceDetails