import React from 'react'

export default function MyButton({className, children, ...rest}: any) {
  return (
    <button className={`bg-primaryAlt hover:bg-primaryAltAccent rounded py-2 px-4 ${className ?? ''}`}
      {...rest}>
      {children}
    </button>
  )
}
