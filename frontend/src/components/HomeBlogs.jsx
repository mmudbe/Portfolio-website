import React from 'react'
import HomeBlogItem from './HomeBlogItem'

export default function HomeBlogs() {
  return (
<section id='article'>
    <h1 className='text-2xl mt-16 mb-4 '>Articles</h1>
    <section className='grid lg:grid-cols-2 place-items-center w-5/12 gap-y-8 gap-x-6 m-auto group'>
        <HomeBlogItem />
        <HomeBlogItem />
        <HomeBlogItem />
        <HomeBlogItem />
    </section>
   </section>
    )
}
