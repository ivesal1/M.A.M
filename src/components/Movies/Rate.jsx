import React, { useState } from 'react'

export default function Rate({ close }) {
    const [rate, setRate] = useState('')
    

  return (
      <div>
          <div className='bg-white rounded-lg sign-co shadow-xl p-5'>
            <div>
                <button onClick={close} className='text-black'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" fill='#cccccc'>
                    <path
                    d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
                        />
                    </svg>
                </button>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <form onSubmit={e => {
                    e.preventDefault();
                }} className='flex justify-center flex-col items-center'>
                      <div className='text-black text-4xl font-bold mb-5 mt-5'>
                          Rate Movie
                    </div>
                    <div>
                        <input onChange={(e) => setRate(e.target.value)} type="text" className='border rounded-lg text-black p-2 input-sign' />
                    </div>
                    <div className='flex justify-center'>
                        <button style={{ backgroundColor: '#007AFD' }} type="submit" className='text-white px-4 py-1 rounded-lg text-center mt-2 border font-bold'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
