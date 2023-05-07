import React from 'react'

export default function HomeIntroduction() {
    
  return (
   <section className='text-center my-16 mx-64'>
    <h1 className='text-2xl my-8'>My self</h1>
    <p className='my-4'>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
   <img className='rounded-md w-64 m-auto my-4' src={require('../images/christopher-gower-m_HRfLhgABo-unsplash.jpg')} alt='laptop-img' />
   </section>
  )
}
