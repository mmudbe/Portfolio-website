import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'


export default function HomeprojectItem() {
  return (
   <section className=' w-2/4  box  hover:border-2  my-4 rounded-md'>
   <section className='flex'>
   <section className='solid'>
   <img className='border-4 rounded-lg' src={require('../images/web.jpg')} alt='website-img' />

   </section>
     <section>
      <h1 className='text-lg'>Website Name</h1>
      <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
      <button className='px-12 py-2 hover:bg-slate-50 mx-4'>live <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
      <button className='px-12 py-2 hover:border-2'>Github <FontAwesomeIcon icon={faGithub} /></button>
     </section>
     </section>
   </section>
  )
}
