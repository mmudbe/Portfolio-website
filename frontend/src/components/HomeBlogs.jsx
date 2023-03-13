import React from 'react'
import HomeBlogItem from './HomeBlogItem'

export default function HomeBlogs() {
  return (
<section>
    <h1 className='text-2xl'>Projects</h1>
    <section className='grid grid-cols-2'>
        <HomeBlogItem />
        <HomeBlogItem />
        <HomeBlogItem />
        <HomeBlogItem />
    </section>
   </section>
    )
}
