import React from 'react'
import ReactPlayer from 'react-player'

const Youtube = () => {
  return (
    <div>
        <ReactPlayer
          className='react-player'
          url='https://youtu.be/ZeSUiOuLEAs?si=UIpffzkCgC5hIcWw'
          width='500px'
          height='500px'
        />
    </div>
  )
}

export default Youtube