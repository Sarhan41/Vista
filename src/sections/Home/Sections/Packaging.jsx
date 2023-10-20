import React from 'react'
import Card from './Card'
import {  PackagingData } from '../../../constants'


const Packaging = () => {
  return (
    <section className='grid justify-between grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  mr-6'>
        {PackagingData.map((item)=>(
            <Card key={item.title} {...item} />
        ))}
        
        
        </section>
  )
}

export default Packaging