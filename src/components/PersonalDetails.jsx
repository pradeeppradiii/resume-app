import React, { useEffect, useState } from 'react'
import { AiOutlineRight,AiOutlineLeft,AiFillGithub,AiFillLinkedin,AiFillTwitterCircle,AiFillFacebook,AiOutlineInstagram } from 'react-icons/ai';
import { MdEmail,MdOutlineTravelExplore } from 'react-icons/md';
import { HiPhone } from 'react-icons/hi';
import { Link } from 'react-router-dom';


// props : 
//  {personalData,setPersonalData,setCompletePersonalData,completePersonalData}

  function PersonalDetails({personalData,setPersonalData,setCompletePersonalData,completePersonalData}){
  const handleData=(e)=>{
    const personalDataCopy={...personalData}
    personalDataCopy[e.target.name]=e.target.value
    setPersonalData(personalDataCopy)
  }

  const handleSubmit= async()=>{
    const completePersonalDataCopy=[...completePersonalData]
    completePersonalDataCopy[0]=personalData
    setCompletePersonalData(completePersonalDataCopy)
  }




  

  return (
    <div>
      
       <div class='container'>
         {/* <form onSubmit={handleSubmit(submitForm)}> */}
        <h3 className='heading'>Personal Details</h3>
        <div class="row input-row">
            <div class="col"><input type="text" class="form-control" placeholder="First name" name='firstName' value={personalData.firstName} required onChange={(e)=>{handleData(e)}}/></div>
            <div class="col"><input type="text" class="form-control" placeholder="Last name" name='lastName' value={personalData.lastName} required onChange={(e)=>{handleData(e)}}/></div>
        </div>
        <div class="row input-row">
            <div class="col"><input type="text" class="form-control" placeholder="Email" name='email' value={personalData.email} required onChange={(e)=>{handleData(e)}}/> <span className='icon-1'><MdEmail/></span></div>
            <div class="col"><input type="text" class="form-control" placeholder="Phone number" name='phone' value={personalData.phone} onChange={(e)=>{handleData(e)}}/><span className='icon-1'><HiPhone/></span></div>
        </div>
        <div class="row input-row">
            <div class="col"><input type="text" class="form-control" placeholder="Your website" name='website' value={personalData.website} onChange={(e)=>{handleData(e)}}/><span className='icon-1'><MdOutlineTravelExplore/></span></div>
            <div class="col"><input type="text" class="form-control" placeholder="GitHub" name='github' value={personalData.github} onChange={(e)=>{handleData(e)}}/><span className='icon-1'><AiFillGithub/></span></div>
        </div>
        <div class="row input-row">
            <div class="col"><input type="text" class="form-control" placeholder="Linked In" name='linkedIn' value={personalData.linkedIn} onChange={(e)=>{handleData(e)}}/><span className='icon-1'><AiFillLinkedin/></span></div>
            <div class="col"><input type="text" class="form-control" placeholder="Twitter" name='twitter' value={personalData.twitter} onChange={(e)=>{handleData(e)}}/><span className='icon-1'><AiFillTwitterCircle/></span></div>
        </div>
        <div class="row input-row">
            <div class="col"><input type="text" class="form-control" placeholder="Facebook" name='facebook' value={personalData.facebook} onChange={(e)=>{handleData(e)}}/><span className='icon-1'><AiFillFacebook/></span></div>
            <div class="col"><input type="text" class="form-control" placeholder="Instagram" name='instagram' value={personalData.instagram} onChange={(e)=>{handleData(e)}}/><span className='icon-1'><AiOutlineInstagram/></span></div>
        </div>

        <div className='buttons-1'>
        <button type="button" class="btn btn-secondary prev-button-1" disabled><span><AiOutlineLeft/></span>Back</button>
        
        
            <Link to={'/educational-details'} className='button-font'>
             <button type="button" class="btn btn-danger next-button-1"  > Next <span><AiOutlineRight/></span></button>
              </Link> 
        </div>
        {/* </form> */}
      </div>
    </div>
  )
  }

export default PersonalDetails;
