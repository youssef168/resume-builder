import React, { Fragment } from 'react'
import Editor from '../Components/Editor/Editor'
import ResumePreviewer from '../Components/ResumePreviewer/ResumePreviewer'

const Builder = () => {
  return (
    <Fragment>
      <div className='cut_page'>
        <Editor />
        <ResumePreviewer />
      </div>
    </Fragment>
  )
}

export default Builder