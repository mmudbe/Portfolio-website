import React from 'react'

export default function Navbar() {
  return (
    <section className='sticky top-0'>
      <nav className=' py-3 bg-slate-50  font-medium'>
        <a className='px-6' href='#home'>Home</a>
        <a className='px-6' href='#project'>project</a>
        <a className='px-6' href='#article'>article</a>
      </nav>
    </section>
  )
}
