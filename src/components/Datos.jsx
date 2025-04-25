import React from 'react'
import data from '../data/data.json'

function Datos() {
    return (
        <section className='bg-gray-300 w-full h-lvh flex justify-center items-center'>
        {data.map((item,index)=>{
            return(
            <div key={index}>
                <img src={item.image.desktop} alt="" />
                <h2>{item.name}</h2>
                <p>{item.category}</p>
                <p>${item.price}</p>
            </div>
            )
        })}
        </section>
    )
}

export default Datos