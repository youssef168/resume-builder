import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { ButtonHelper } from '../../Helpers/ButtonHelper'

const Nav = () => {
  return (
    <Fragment>
        <div className='nav-container'>
            <div className="logo d-flex">
                <FontAwesomeIcon icon={faScrewdriverWrench} fontSize="41px" className='mr-1'/>
                <h2 className='t-black'>Yara-Builder</h2>
            </div>
            <div className="center">
                <ul>
                    <li>About us</li>
                    <li>Fetures</li>
                    <li>Resume</li>
                    <li>Tools</li>
                </ul> 
            </div>
            <div className="end">
                <ButtonHelper message="Get Started"/>
            </div>
        </div>
    </Fragment>
  )
}

export default Nav