import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] mt-10 px-10 py-6 border-t-[1px] flex justify-between items-center  border-b-[1px] border-r-[1px] border-zinc-600 ' >
        <img className='w-14 ' src={val.url} alt={val.number} />
        <h1>{val.number}</h1>
    </div>
  )
}
  
export default Stripe