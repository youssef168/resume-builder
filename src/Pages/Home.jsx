import React, { Fragment } from 'react'
import Nav from '../Components/Nav/Nav'
import { BlueBtnHelper, ButtonHelper } from '../Helpers/ButtonHelper'

const Home = () => {
  return (
    <Fragment>
        <Nav />
        <div className="hero">
            <div className="container">
                <div className="head">
                  <h3>Professional Resume Builder</h3>  
                  <h5>Powered by <span>Yara-Builder-Tools</span></h5>
                  <h4>Let's Build a Professional Resumes and get jobs faster and faster in a few minutes, use professional ready resume according you job category</h4>
                </div>  
                <div className="choices">
                    <div className="discover">
                        <BlueBtnHelper message="Discover Features"/>  
                    </div>  
                    <div className="craete">
                        <ButtonHelper message="Get Started"/>
                    </div>  
                </div>
            </div>  
        </div>
    </Fragment>
  )
}

export default Home