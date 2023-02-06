import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
      <div style={{color:'#7D7D7D'}} className='container mx-auto text-xs mb-8 mt-8'>
          Copyright 2022 Ves movies , All rights reserved .
          <div style={{color:'#1F1F1F'}} className='mt-2 flex font-bold'>
              <NavLink to={`/profile`}>
                  <div className='border-r px-2'>Profile</div>
              </NavLink>
              <NavLink to={`/`}>
                  <div className='border-r px-2'>Home</div>
              </NavLink>
              <NavLink to={`/Movies`}>
                  <div className='px-2'>Movies</div>
              </NavLink>
          </div>
    </div>
  )
}
