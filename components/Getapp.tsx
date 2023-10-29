import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Getapp = () => {
  return (
    <section
    className='flexCenter flex-col pb-[100px] w-full'>
      <div className='get-app'>
        <div className='z-20 flex w-full flex-1 items-start justify-center gap-12 
         flex-col'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[320px]'>Get App for Free now!</h2>
          <p>Avaialable on IOS and Android!</p>
          <div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row'>
            <Button 
            type='button'
            title='App store'
            icon='/apple.svg'
            variant='btn_white'
            full/>
            <Button 
            type='button'
            title='Play store'
            icon='/android.svg'
            variant='btn_dark_green_outline'
            full/>
          </div>
        </div>
        <div className='flex items-center justify-end flex-1'>
        <Image 
        src='/phones.png' alt="phones" width={550} height={870}/>
        </div>
      </div>
    </section>
  )
}

export default Getapp