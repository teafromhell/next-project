import Link from 'next/link'
import React, { useEffect } from 'react'
import {useRouter} from 'next/router'

const Error = () => {
  const router = useRouter()
  useEffect(()=>{
    setTimeout(()=>{
      router.push('/')
    }, 3000)
  },[])
  return (
    <div className='not-found'>
        <h1>Error</h1>
        <h2>Page not found</h2>
         <Link href='/'><a>Main Page</a></Link>
    </div>
  )
}

export default Error