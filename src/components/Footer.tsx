import React from 'react'
import verticalLogo from '../assets/vertical-logo-inverse.png'
import {Image} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='bg-primary text-white'>
      <div className='flex justify-center gap-8 py-8'>
        <div className='mr-8'>
          <Image src={verticalLogo} className="w-32" alt="Vertical Little Lemon Logo"/>
        </div>
        {/* Navigation */}
        <div>
          <h2 className='text-2xl'>Navigation</h2>
          <ul  className='list-none'>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/">About</FooterLink>
            <FooterLink to="/">Menu</FooterLink>
            <FooterLink to="/booking">Reservations</FooterLink>
            <FooterLink to="/">Order Online</FooterLink>
            <FooterLink to="/">Login</FooterLink>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h2 className='text-2xl'>Contact</h2>
          <ul  className='list-none'>
            <li>Little 21 Lemon Street, 90031</li>
            <li>+65 90038001</li>
            <li>littlelemon@gmail.com</li>
          </ul>
        </div>
        {/* Social Media Links */}
        <div>
          <h2 className='text-2xl'>Social Media</h2>
          <ul  className='list-none flex gap-4 text-2xl'>
            <li>
              <FaFacebook/>
            </li>
            <li>
              <FaTwitter/>
            </li>
            <li>
              <FaInstagram/>              
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

const FooterLink = ({to, children}: {to: string, children: any}) => {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  )
}


