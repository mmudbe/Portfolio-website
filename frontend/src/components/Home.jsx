import React from 'react'
import HomeBlogs from './HomeBlogs'
import HomeIntroduction from './HomeIntroduction'
import HomeProjects from './HomeProjects'

export default function Home() {
  return (
    <>
        <section>
            <HomeIntroduction />
            <HomeProjects />
            <HomeBlogs />
        </section>
    </>
  )
}
