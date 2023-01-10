import React from 'react'
import logo from '../assets/logo.png'
import {Image} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='top-0 left-0 h-16 px-2 flex justify-center items-center'>
      <Image  objectFit="contain" className="h-full mr-8 py-2" src={logo} alt="logo"/>
      <ul className='flex h-full'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Order Online</NavLink>
        <NavLink to="/">Menu</NavLink>
        <NavLink to="/booking">Reservations</NavLink>
        <NavLink to="/">Login</NavLink>
      </ul>
    </nav>
  )
}

const NavLink = ({to, children}: {to: string, children: any}) => {
  return (
    <li className=''>
      <Link to={to} className="flex px-4 items-center hover:bg-primary hover:text-white h-full ">
        {children}
      </Link>
    </li>
  )
}
