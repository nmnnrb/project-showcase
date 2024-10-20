import React from 'react'
import Stripe from './Stripe'

function Stripes() {

    let data =[
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b782a9d67c3b6d5e44_63b38482196e18287bb470b6_jungle.svg" , number: "48"},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db9_63aed9b4493ff77bba5e9939_spotify.svg" , number: "11"},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88fc_660191edcdb42d79ba8c23aa_Logo.svg" , number: "2"},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66979aadafcf09e77ccdf8b0_logo-white.svg" , number: "56"},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b7042241_65b2ca2282d921d99755eaf6_Logo%2520White%25201.svg" , number: "6"},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62de955b9aa4d2dd0_64868959b481181dd14c03a2_Silvr_logo_white.png" , number: "83"}
    ]
  return (
    <div className='flex flex-wrap justify-center md:justify-start md:flex-nowrap  items-center my-44 '  >
    {data.map((ele,idx) =>(
        <Stripe val={ele} />
    ) )}

    </div>
  )
}

export default Stripes