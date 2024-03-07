import React from 'react'

const LoginButton = ({ children }) => {
  return (
    <div>
      <button className='font-medium  w-full px-5 py-3 rounded-3xl bg-one hover:bg-three hover:text-black text-four  transition-all duration-500'>{children}</button>
    </div>
  )
}

export default LoginButton