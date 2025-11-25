import React from 'react'
import './Project.css'
import mywork_data from '../../assets/mywork_data'

const Project = () => {
  return (
    <section id='project' className='container project'>
        <h1>Project</h1>
        <div className="project-container">
        {
            mywork_data.map((data, i) =>{
                return(
                    <a key={i} href={data.w_link} ><img src={data.w_img} alt="" /></a>
                )
            })
        }
        </div>

    </section>
  )
}

export default Project