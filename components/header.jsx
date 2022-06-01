import React from 'react'
import {SiBurgerking} from 'react-icons/si'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
        <div>
            <SiBurgerking/>
        </div>
        <nav>
            <Link href="/">
            <a >Home</a>
            </Link>
            
            <Link href="about">
            <a >About Us</a>
            </Link>
            
            <Link href="/reviews">
            <a >Reviews</a>
            </Link>
            
            <Link href="/burgers">
            <a >Burgers</a>
            </Link>
            
        </nav>
    </header>
  )
}

export default Header