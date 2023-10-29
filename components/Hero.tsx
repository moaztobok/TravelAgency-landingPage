"use client"
import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col
    gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row '>
        <div className='hero-map'>

        </div>
        <div className='relative flex-1 flex flex-col xl:w-1/2'>
        <Image src='/camp.svg' alt='camp'width={50} height={50} className='absolute left-[-5px] top-[-30px] w-10 lg:w:[50px]'/>
        <h1 className='bold-52 lg:bold-88'>Putuk Truno Camp Area</h1>
        <p className='text-gray-30 xl:max-w-[520px]'>We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>
        <div className='my-10 flex flex-wrap gap-5'>
            <div className='flex items-center gap-2'>
                {Array(5).fill(1).map((_,index)=>(
                    <Image src='/star.svg' alt='star' width={24} height={24}/>
                ))}
                <p className='bold-16 lg:bold-20 text-blue-70'>198k</p>
                <span className='ml-1 regular-16 lg:regular-20'>Excellente Reviews</span>
            </div>
        </div>
        <div className='flex flex-col gap-3 sm:flex-row'>
            <Button
            type='button'
            title='Download App'
            variant='btn_green'
            />
            <Button
            type='button'
            title='How we Work!'
            icon='/play.svg'
            variant='btn_white_text'
            />
        </div>
        </div>
        <div className='relative flex flex-1 items-start'>
            <div className='relative z-20 w-[260px] flex flex-col gap-8 rounded-3xl bg-green-90 py-8 px-7'>
                <div className='flex flex-col'>
                    <div className='flexBetween'>
                        <p className='regular-16 text-gray-20'>Location</p>
                        <Image src='/close.svg' width={24} height={24} alt='close' />
                    </div>
                    <p className='bold-20 text-white '>Auguas Caliantes</p>
                </div>
                    <div className='flexBetween'>
                        <div className='flex flex-col'>
                        <p className='regular-16 block text-gray-20'>
                        Distance
                        </p>
                        <p className='bold-20 text-white'>178.28 mi</p>
                        <p className='bold-20 text-white'>Elevation : 2km</p>

                        </div>
                    </div>
                
            </div>
        </div>
    </section>
  )
}

export default Hero