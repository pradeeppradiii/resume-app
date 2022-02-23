import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { IoMdDownload } from 'react-icons/io';
import { BsCheckCircleFill } from 'react-icons/bs';
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import PdfGenerate from './PdfGenerate';

function ExtraDetails({extraDetails, setExtraDetails,completeExtraDetails, setCompleteExtraDetails,setDownloadPdf}) {

  const handleData=(e)=>{
    const extraDetailsCopy={...extraDetails}
    extraDetailsCopy[e.target.name]=e.target.value
    setExtraDetails(extraDetailsCopy)
  }

  const handleSubmit=()=>{
    const completeExtraDetailsCopy=[...completeExtraDetails]
    completeExtraDetailsCopy[0]=extraDetails
    setCompleteExtraDetails(completeExtraDetailsCopy)
  }

  return (
    <div>
          <div class='container'>
            <h3 className='heading'>Extra Details</h3>

            <p className='extra-heading'><span><BsCheckCircleFill/></span> Skills/Languages</p>
    
            <div class="row input-row">
                <div class="col"><input type="text" class="form-control" placeholder="Skill 1" name='skill1' value={extraDetails.skill1} onChange={(e)=>{handleData(e)}}/></div>
                <div class="col"><input type="text" class="form-control" placeholder="Skill 2" name='skill2' value={extraDetails.skill2} onChange={(e)=>{handleData(e)}}/></div>
                <div class="col"><input type="text" class="form-control" placeholder="Skill 3" name='skill3' value={extraDetails.skill3} onChange={(e)=>{handleData(e)}}/></div>
            </div>
            <div class="row input-row">
                <div class="col"><input type="text" class="form-control" placeholder="Skill 4" name='skill4' value={extraDetails.skill4} onChange={(e)=>{handleData(e)}}/></div>
                <div class="col"><input type="text" class="form-control" placeholder="Skill 5" name='skill5' value={extraDetails.skill5} onChange={(e)=>{handleData(e)}}/></div>
                <div class="col"><input type="text" class="form-control" placeholder="Skill 6" name='skill6' value={extraDetails.skill6} onChange={(e)=>{handleData(e)}}/></div>
            </div>
    
            <p className='extra-heading'><span><BsCheckCircleFill/></span> Interest</p>
    
            <div class="row input-row">
                <div class="col"><input type="text" class="form-control" placeholder="Interest 1" name='interest1' value={extraDetails.interest1} onChange={(e)=>{handleData(e)}}/></div>
                <div class="col"><input type="text" class="form-control" placeholder="Interest 2" name='interest2' value={extraDetails.interest2} onChange={(e)=>{handleData(e)}}/></div>
                <div class="col"><input type="text" class="form-control" placeholder="Interest 3" name='interest3' value={extraDetails.interest3} onChange={(e)=>{handleData(e)}}/></div>
            </div>
            <div class="row input-row">
                <div class="col"><input type="text" class="form-control" placeholder="Interest 4" name='interest4' value={extraDetails.interest4} onChange={(e)=>{handleData(e)}}/></div>
                <div class="col"><input type="text" class="form-control" placeholder="Interest 5" name='interest5' value={extraDetails.interest5} onChange={(e)=>{handleData(e)}}/></div>
                <div class="col"><input type="text" class="form-control" placeholder="Interest 6" name='interest6' value={extraDetails.interest6} onChange={(e)=>{handleData(e)}}/></div>
            </div>

            <div className='buttons-2'>
               
                  <Link to={'/experience-details'}  className='button-font'>
                  <button type="button" class="btn btn-secondary prev-button-2"><span><AiOutlineLeft/></span>Back</button>
                  </Link>
                
           

                <button type="button" class="btn btn-danger next-button-2" disabled>Next <span><AiOutlineRight/></span></button>
            </div>

            <div class="row input-row">
                <div class="col download-button">
                  <button type="button" class="btn btn-primary" onClick={()=>{setDownloadPdf(true)}}>Download Resume <span><IoMdDownload/></span></button>
                </div>
            </div>
           
          </div>
        </div>
  )
}

export default ExtraDetails