import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTwitter , faGithub , faLinkedin } from "@fortawesome/free-brands-svg-icons";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
   <section className='text-center p-20 mt-10 bg-slate-200'>
    <FontAwesomeIcon className='m-2 hover:scale-105 w-8 h-8' icon={faTwitter} />
    <FontAwesomeIcon className='m-2 hover:scale-105 w-8 h-8' icon={faGithub} />
    <FontAwesomeIcon className='m-2 hover:scale-105 w-8 h-8' icon={faLinkedin} />
    <FontAwesomeIcon className='m-2 hover:scale-105 w-8 h-8' icon={faTwitter} />
   </section>
  )
}
