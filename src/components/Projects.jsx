import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { MdTitle,MdInsertLink,MdDescription } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

function Projects({projectDetails, setProjectDetails,completeProjectDetails, setCompleteProjectDetails}) {

    const handleData=(e)=>{
        const projectDetailsCopy={...projectDetails}
        projectDetailsCopy[e.target.name]=e.target.value
        setProjectDetails(projectDetailsCopy)
      }
    
      const handleSubmit=()=>{
        const completeProjectDetailsCopy=[...completeProjectDetails]
        completeProjectDetailsCopy[0]=projectDetails
        setCompleteProjectDetails(completeProjectDetailsCopy)
      }

  return (
    <div>
          <div class='container'>
            <h3 className='heading'>Project Details</h3>

            <p className='project-heading'>Project 1</p>
    
            <div class="row input-row">
                <div class="col"><input type="text" class="form-control" placeholder="Title" name='project1Title' value={projectDetails.project1Title} onChange={(e)=>{handleData(e)}}/></div><span className='icon-4'><MdTitle/></span>
            </div>
            <div class="row input-row">
                <div class="col"><input type="text" class="form-control" placeholder="Link" name='project1Link' value={projectDetails.project1Link} onChange={(e)=>{handleData(e)}}/></div><span className='icon-4a'><MdInsertLink/></span>
            </div>
            <div class="row input-row">
                <div class="col"><input type="text" class="form-control" placeholder="Description" name='project1Description' value={projectDetails.project1Description} onChange={(e)=>{handleData(e)}}/></div><span className='icon-4b'><MdDescription/></span>
            </div>
    
            <p className='project-heading'>Project 2</p>
    
            <div class="row input-row">
                <div class="col"><input type="text" class="form-control" placeholder="Title" name='project2Title' value={projectDetails.project2Title} onChange={(e)=>{handleData(e)}}/></div><span className='icon-4c'><MdTitle/></span>
            </div>
            <div class="row input-row">
                <div class="col"><input type="text" class="form-control" placeholder="Link" name='project2Link' value={projectDetails.project2Link} onChange={(e)=>{handleData(e)}}/></div><span className='icon-4d'><MdInsertLink/></span>
            </div>
            <div class="row input-row">
                <div class="col"><input type="text" class="form-control" placeholder="Description" name='project2Description' value={projectDetails.project2Description} onChange={(e)=>{handleData(e)}}/></div><span className='icon-4e'><MdDescription/></span>
            </div>

            <div className='buttons-2'>
            
                <Link to={'/project-details'}  className='button-font'>
                <button type="button" class="btn btn-secondary prev-button-2"><span><AiOutlineLeft/></span>Back</button>
                </Link>
            
    

            
                <Link to={'/extra-details'} className='button-font'>
                <button type="button" class="btn btn-danger next-button-2"> Next <span><AiOutlineRight/></span></button>
                </Link> 
            
            </div>
          </div>
        </div>
  )
}

export default Projects