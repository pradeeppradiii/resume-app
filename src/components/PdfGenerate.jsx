import jsPDF from 'jspdf';
import React, { useEffect } from 'react';

function PdfGenerate({personalData,educationalData,experienceDetails,projectDetails,extraDetails,setDownloadPdf}) {

  useEffect(()=>{
    generatePdf()
  },[])

    const generatePdf=()=>{
        console.log('>>>  downloading....');
        var doc=new jsPDF('landscape','px','a4','false');
        // doc.addPage()

        //PERSONAL DATA 
        doc.setFontSize(22)
        doc.text(200,30,'PERSONAL DETAILS')

        doc.setFontSize(15)
        doc.setFont('Helvertica','bold')
        doc.text(60,60,'First Name :')
        doc.text(60,80,'Last Name :')
        doc.text(60,100,'Email :')
        doc.text(60,120,'Phone :')
        doc.text(60,140,'Website :')
        doc.setFont('Helvertica','Normal')
        doc.text(130,60,personalData.firstName)
        doc.text(130,80,personalData.lastName)
        doc.text(130,100,personalData.email)
        doc.text(130,120,personalData.phone)
        doc.text(130,140,personalData.website)

        doc.setFont('Helvertica','bold')
        doc.text(350,60,'GitHub :')
        doc.text(350,80,'LinkedIn :')
        doc.text(350,100,'Twitter :')
        doc.text(350,120,'Facebook :')
        doc.text(350,140,'Instagram :')
        doc.setFont('Helvertica','Normal')
        doc.text(420,60,personalData.github)
        doc.text(420,80,personalData.linkedIn)
        doc.text(420,100,personalData.twitter)
        doc.text(420,120,personalData.facebook)
        doc.text(420,140,personalData.instagram)

        //EDUCATIONAL DATA

        doc.setFontSize(22)
        doc.text(200,180,'EDUCATIONAL DETAILS')

        doc.setFontSize(15)
        doc.setFont('Helvertica','bold')
        doc.text(60,210,'College :')
        doc.text(60,230,'Start date :')
        doc.text(60,250,'End date :')
        doc.text(60,270,'Qualification :')
        doc.text(60,290,'Description :')
        doc.setFont('Helvertica','Normal')
        doc.text(130,210,educationalData.college)
        doc.text(130,230,educationalData.collegeStartDate)
        doc.text(130,250,educationalData.collegeEndDate)
        doc.text(130,270,educationalData.collegeQualification)
        doc.text(130,290,educationalData.collegeQualificationDescription)

        doc.setFontSize(15)
        doc.setFont('Helvertica','bold')
        doc.text(350,210,'School :')
        doc.text(350,230,'Start date :')
        doc.text(350,250,'End date :')
        doc.text(350,270,'Qualification :')
        doc.text(350,290,'Description :')
        doc.setFont('Helvertica','Normal')
        doc.text(420,210,educationalData.school)
        doc.text(420,230,educationalData.schoolStartDate)
        doc.text(420,250,educationalData.schoolEndDate)
        doc.text(420,270,educationalData.schoolQualification)
        doc.text(420,290,educationalData.schoolQualificationDescription)


        // EXPERIENCE DATA

        doc.setFontSize(22)
        doc.text(200,330,'EXPERIENCE DETAILS')

        doc.setFontSize(15)
        doc.setFont('Helvertica','bold')
        doc.text(60,360,'Organization 1:')
        doc.text(60,380,'Position :')
        doc.text(60,400,'Duration :')
        doc.text(60,420,'Description :')
        doc.setFont('Helvertica','Normal')
        doc.text(135,360,experienceDetails.institute1)
        doc.text(130,380,experienceDetails.position1)
        doc.text(130,400,experienceDetails.duration1)
        doc.text(130,420,experienceDetails.description1)

        doc.setFontSize(15)
        doc.setFont('Helvertica','bold')
        doc.text(350,360,'Organization 2:')
        doc.text(350,380,'Position :')
        doc.text(350,400,'Duration :')
        doc.text(350,420,'Description :')
        doc.setFont('Helvertica','Normal')
        doc.text(425,360,experienceDetails.institute2)
        doc.text(420,380,experienceDetails.position2)
        doc.text(420,400,experienceDetails.duration2)
        doc.text(420,420,experienceDetails.description2)


        //PROJECT DETAILS
        doc.addPage()

        doc.setFontSize(22)
        doc.text(200,30,'PROJECT DETAILS')

        doc.setFontSize(15)
        doc.setFont('Helvertica','bold')
        doc.text(60,60,'PROJECT 1 :')

        doc.setFontSize(15)
        doc.setFont('Helvertica','bold')
        doc.text(60,80,'Title :')
        doc.text(60,100,'Link :')
        doc.text(60,120,'Desciption :')

        doc.setFont('Helvertica','Normal')
        doc.text(130,80,projectDetails.project1Title)
        doc.text(130,100,projectDetails.project1Link)
        doc.text(130,120,projectDetails.project1Description)

        doc.setFontSize(15)
        doc.setFont('Helvertica','bold')
        doc.text(60,160,'PROJECT 2 :')

        doc.setFontSize(15)
        doc.setFont('Helvertica','bold')
        doc.text(60,180,'Title :')
        doc.text(60,200,'Link :')
        doc.text(60,220,'Desciption :')

        doc.setFont('Helvertica','Normal')
        doc.text(130,180,projectDetails.project2Title)
        doc.text(130,200,projectDetails.project2Link)
        doc.text(130,220,projectDetails.project2Description)

        // SKILLS-LANGUAGES

        doc.setFontSize(22)
        doc.text(200,260,'EXTRA DETAILS')

        doc.setFontSize(15)
        doc.setFont('Helvertica','bold')
        doc.text(60,290,'SKILLS ')

        doc.setFontSize(15)
        doc.setFont('Helvertica','bold')
        doc.text(60,310,'Skill 1 :')
        doc.text(60,330,'Skill 2 :')
        doc.text(60,350,'Skill 3 :')

        doc.text(350,310,'Skill 4 :')
        doc.text(350,330,'Skill 5 :')
        doc.text(350,350,'Skill 6 :')

        doc.setFont('Helvertica','Normal')
        doc.text(130,310,extraDetails.skill1)
        doc.text(130,330,extraDetails.skill2)
        doc.text(130,350,extraDetails.skill3)

        doc.text(420,310,extraDetails.skill4)
        doc.text(420,330,extraDetails.skill5)
        doc.text(420,350,extraDetails.skill6)

        // INTEREST
        doc.setFontSize(15)
        doc.setFont('Helvertica','bold')
        doc.text(60,380,'INTERESTS ')

        doc.setFontSize(15)
        doc.setFont('Helvertica','bold')
        doc.text(60,400,'Interest 1 :')
        doc.text(60,420,'Interest 2 :')
        doc.text(60,440,'Interest 3 :')

        doc.text(350,400,'Interest 4 :')
        doc.text(350,420,'Interest 5 :')
        doc.text(350,440,'Interest 6 :')

        doc.setFont('Helvertica','Normal')
        doc.text(130,400,extraDetails.interest1)
        doc.text(130,420,extraDetails.interest2)
        doc.text(130,440,extraDetails.interest3)

        doc.text(420,400,extraDetails.interest4)
        doc.text(420,420,extraDetails.interest5)
        doc.text(420,440,extraDetails.interest6)

        doc.text(0,480,'                                        ')



        doc.save('My_resume.pdf')
        setDownloadPdf(false)
    }

  return (
    <div>
        {/* <button onClick={generatePdf}>Download Resume</button> */}
    </div>
  )
}

export default PdfGenerate