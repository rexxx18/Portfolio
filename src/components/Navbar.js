import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import {TwitterIcon,GithubIcon, LinkedInIcon, PinterestIcon, DribbbleIcon, SunIcon, MoonIcon} from './Icons'
import Logo from './Logo'
import {motion} from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher'


const CustomLink=({href,title,className=""})=>{
    const router=useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-1 inline-block w-0 bg-dark dark:bg-light absolute left-0 -bottom-0.5 
            group-hover:w-full transtion-[width] ease duration-300  ${router.asPath===href?'w-full':'w-0'}`}>&nbsp;</span>
        </Link>
    )
}


function Navbar() {

    const [mode,setMode]=useThemeSwitcher();



  return (
    <header className='w-full py-8 px-32 font-medium flex items-center justify-between dark:text-light'>
        <nav>
            <CustomLink href='/' title={"Home"} className='mr-4' />
            <CustomLink href='/about' title={"About"} className='mx-4'/>
            <CustomLink href='/projects' title={"Projects"} className='mx-4' />
            <CustomLink href='/articles' title={"Article"} className='mx-4' />
        </nav>
    
        <nav className='flex items-center justify-center flex-wrap'>
            <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} href="/" target={'_blank'}>
                <TwitterIcon className={'w-6 mr-4'}/></motion.a>
                <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} href="/" target={'_blank'}>
                <GithubIcon className={'w-6 mx-4'}/></motion.a>
                <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} href="/" target={'_blank'}>
                <LinkedInIcon className={'w-6 mx-4'}/></motion.a>
                <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} href="/" target={'_blank'}>
                <PinterestIcon className={'w-6 mx-4'}/></motion.a>
                <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} href="/" target={'_blank'}>
                <DribbbleIcon className={'w-6 ml-4'}/></motion.a>
                <button className={`ml-3 p-1 flex items-center justify-center rounded-full
                ${mode==="dark"?"bg-light text-dark":"bg-dark text-light"}`} onClick={()=>{setMode(mode==="light"?"dark":"light")}}>
                    {mode==="dark"?
                    <SunIcon className={"fill-dark"}/>:
                    <MoonIcon className="fill-dark" />}
                </button>
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
        </div>
    </header>
  )
}

export default Navbar