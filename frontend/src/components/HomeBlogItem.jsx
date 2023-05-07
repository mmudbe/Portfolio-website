import React from 'react'

export default function HomeBlogItem() {
  return (
    <section className=' h-[25] w-76 box  border-2 p-4 group-hover:blur-sm hover:!blur-none group-hover:scale-95 hover:!scale-105 '>
    <img src={require("../images/christopher-gower-m_HRfLhgABo-unsplash.jpg")} alt="blog-img"></img>
    <section>
      <h1 className='text-2xl m-4'>
        heading
      </h1>
      <p className='m-4'>description fdkfjf vdkvfkvndv vnhcknkcvdk ckkkkkkkk dcnnnnnnnnn nvvvvv</p>
      <button className='px-12 py-2 mb-12 bg-black text-white rounded-lg'>Read More</button>
    </section>
   </section>
  )
}
