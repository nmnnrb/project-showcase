import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
        <div className="max-w-screen-xl mx-auto p-20 flex gap-2">

            <Card width={"basis-1/3"} start={false} para={true} contact={false}  />
            <Card width={"basis-2/3"} start={true} para={false} hover={true} contact={true} />
        </div>

    </div>
  )
}

export default Cards