import React from 'react'


export default function HomeprojectItem() {
  return (
   <section className=' h-64 w-2/4 box  border-4 p-4'>
   <section className='flex'>
   <section className='p-2'>
   <img src={require('../images/web.jpg')} alt='website-img' />

   </section>
     <section>
      <h1>Website Name</h1>
      <p>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
      <button>live</button>
      <button>Github</button>
     </section>
     </section>
   </section>
  )
}
