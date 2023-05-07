import React from 'react'
import HomeprojectItem from './HomeprojectItem'

export default function HomeProjects() {
  return (
   <section id='project'>
    <h1 className='text-2xl  '>Projects</h1>
    <section className='grid  grid-cols-1  gap-y-4 place-items-center '>
        <HomeprojectItem />
        <HomeprojectItem />
        <HomeprojectItem />
        <HomeprojectItem />
    </section>
   </section>
  )
}
