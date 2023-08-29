import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-7xl mx-auto flex justify-center'>
      {children}
    </div>
  )
}

export default Container
