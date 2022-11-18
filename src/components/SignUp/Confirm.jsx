import React from 'react'
import './../../assets/Confirim.css'

export default function Confirm({ yes, no }) {
  return (
      <div className='text-black shadow bg-white flex justify-center fixed center-confirm rounded-lg p-5'>
          <div className='text-center w-1/2'>
              <h2>
                  Are you sure ?
              </h2>
              <div className='flex justify-around items-center mt-10'>
                  <button style={{ backgroundColor: '#007AFD' }}  className='text-white px-4 py-1 rounded-lg text-center border font-bold' onClick={yes}>
                      Yes
                  </button>
                  <button onClick={no} className='text-black bg-white border px-4 py-1 rounded-lg'>
                    No
                  </button>
              </div>
          </div>
    </div>
  )
}
