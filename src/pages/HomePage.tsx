import { AspectRatio, Avatar, Box, Button, Card, CardBody, CardHeader, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import brushetta from '../assets/brushetta.jpeg'
import salad from '../assets/greek-salad.jpeg'
import fish from '../assets/grilled-fish.jpeg'
import man1  from '../assets/man1.jpeg'
import man2  from '../assets/man2.jpeg'
import man3  from '../assets/man3.jpeg'
import man4  from '../assets/man4.jpeg'

import MyButton from '../components/MyButton'

export default function HomePage() {
  return (
    <VStack>
      {/* Landing Section */}
      <LandingPageSection/>
      <MenuSection/>
      <TestimonialsSection/>
      <CallToActionSection/>
    </VStack>
  )
}

const CallToActionSection = () => {
  return (
    <section className='p-16 '>
      <div className='flex w-full'>
        <div>
          <div className='mb-4'>
            <h1 className='text-3xl'>Little Lemon</h1>
            <h4 className='text-xl'>Chicago</h4>
          </div>
          <div className='mb-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </div>

        <Link to="/booking">
          <MyButton>Make a reservation</MyButton>
        </Link>
        </div>
        <Image className='h-full object-cover' src={brushetta} alt="owners"/>
      </div>
    </section>
  )
}

const TestimonialsSection = () => {
  return (
    <section className='bg-primary p-16 color-white'>
      <h1 className='text-center font-bold text-3xl text-primaryAlt mb-4'>Testimonials</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <TestimonialCard name="John" rating={5} src={man1} />
        <TestimonialCard name="Eddie" rating={4.2} src={man2}/>
        <TestimonialCard name="Franz" rating={3.9} src={man3}/> 
        <TestimonialCard name="Polnisch" rating={4.5} src={man4}/>
      </div>
    </section>
  )
}

const TestimonialCard = ({src, name, rating}: any) => {
  return (
    <Card >
      <CardBody className='bg-white'>
        <div className='flex gap-4'>
          <Avatar src={src}/>
          <div>
            <h1 className='text-2xl font-bold'>{name}</h1>
            <p className='text-orange-600 font-bold'>{rating}/5</p>
          </div>
        </div>
        <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare finibus augue ac blandit.
        </div>
      </CardBody>
    </Card>
  )
}

const MenuSection = () => {
  return (
    <section className='py-16 px-16'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl'>Specials</h1>
        <MyButton>Order Menu</MyButton>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3  gap-4'>
        <MenuCard 
          price={12.99}
          title="Brushetta"
          src={brushetta}>
            Brushetta
        </MenuCard>
        <MenuCard 
          price={19.99}
          title="Grilled Fish"
          src={fish}>
            Grilled Fish
        </MenuCard>
        <MenuCard 
          price={9.99}
          title="Greek Salad"
          src={salad}>
            Greek Salad
        </MenuCard>
      </div>
    </section>
  )
}

const MenuCard = ({src, price, title, alt, children}: {src: any, price: number, title?: string, alt?: string, children: any}) => {
  return (
    <Card>
      <AspectRatio ratio={4/3}>
        <Image src={src} alt={alt}/>
      </AspectRatio>
      <CardHeader className='font-bold flex justify-between items-center'>
        <span className='text-2xl'>{title}</span>
        <span className='text-2xl'>${price}</span>
      </CardHeader>
      <CardBody className='bg-white'>
        {/* {children} */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare finibus augue ac blandit. Morbi dui lacus, gravida in erat at, luctus consequat diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at massa sit amet dolor fringilla pharetra. </p>
        <MyButton className="mt-4">Order</MyButton>
      </CardBody>
    </Card>
  )
}

const LandingPageSection = () => {
  return (

    <section className='grid gap-4 md:grid-cols-2 bg-primary px-16 py-8'>
    <Box className='grow flex flex-col ustify-between'>
      <div>
        <h1 className="text-4xl text-primaryAlt">Little Lemon</h1>
        <h3 className='text-xl text-white'>Chicago</h3>
      </div>
      <Text className='text-white my-4'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare finibus augue ac blandit. Morbi dui lacus, gravida in erat at, luctus consequat diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </Text>
      <Link to="/booking">
        <MyButton>
          Reserve Table
        </MyButton>
        {/* <button type="button"
          className='p-2 rounded bg-primaryAlt font-bold text-primary'>
          Reserve Table
        </button> */}
      </Link>
    </Box>
    <Image src={brushetta} className="w-full h-full object-cover" alt="food"/>
  </section>
  )
}