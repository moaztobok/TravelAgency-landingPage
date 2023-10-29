"use client"
import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "@/constants"
import Button from "./Button"
import { useState } from "react"
const Navbar = () => {
    const [menu,setMenu]= useState<boolean>(false);
    const toggelMenu =():void =>{
        setMenu(!menu);
    }
  return (
    <>
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
    <Link href={'/'}>
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}></Image>
    </Link>
    <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link)=>(
        <Link className="regular-16 text-gray-50 flex-center transition-all pb-1.5 hover:font-bold cursor-pointer" href={link.href} key={link.key}>
            {link.label}
        </Link>))}
    </ul>
    <div className="lg:flexCenter hidden">
        <Button
        type='button'
        title='Log in'
        icon='/user.svg'
        variant='btn_dark_green'></Button>
    </div>

    <Image src='menu.svg' alt='menu' width={32} height={32} className="lg:hidden inline-block cursor-pointer"
    onClick={toggelMenu}/>
 
    </nav>
    <nav>
    {menu && <ul className={`lg:hidden h-full gap-8 flexCenter flex-col  w-full py-8  overflow-hidden duration-700 
    `}
    >
        {NAV_LINKS.map((link)=>(
        <Link className="regular-16 text-gray-50 flex-center transition-all hover:font-bold cursor-pointer lg:hidden" href={link.href} key={link.key}>
            {link.label}
        </Link>))}
    </ul>}
    </nav>
    </>
  )
}

export default Navbar