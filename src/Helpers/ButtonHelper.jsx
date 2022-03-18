import React, { Fragment } from 'react'

export const ButtonHelper = (message) => {
  return (
    <Fragment>
        <button className='yel-color '>{ Object.values(message) }</button>
    </Fragment>
  )
}

export const BlueBtnHelper = (message) => {
  return (
    <Fragment>
        <button className='bl-btn'>{ Object.values(message) }</button>
    </Fragment>
  )
}
