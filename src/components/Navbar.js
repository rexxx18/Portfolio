import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  DribbbleIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import Logo from "./Logo";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-1 inline-block w-0 bg-dark dark:bg-light absolute left-0 -bottom-0.5 
            group-hover:w-full transtion-[width] ease duration-300  ${
              router.asPath === href ? "w-full" : "w-0"
            }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "",toggle }) => {
    const router = useRouter();
    const handleClick=()=>{
        toggle();
        router.push(href);
    }
    return (
      <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick} >
        {title}
        <span
          className={`h-[1px] inline-block w-0 dark:bg-dark bg-light absolute left-0 -bottom-0.5 
              group-hover:w-full transtion-[width] ease duration-300  ${
                router.asPath === href ? "w-full" : "w-0"
              } `}
        >
          &nbsp;
        </span>
      </button>
    );
  };

function Navbar() {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative w-full py-8 px-32 font-medium flex items-center justify-between dark:text-light">
      <button
        className="hidden flex-col justify-center items-center lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all ease-out duration-300 h-0.5  w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all ease-out duration-300 h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all ease-out duration-300 h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="flex w-full lg:hidden justify-between items-center">
        <nav>
          <CustomLink href="/" title={"Home"} className="mr-4" />
          <CustomLink href="/about" title={"About"} className="mx-4" />
          <CustomLink href="/projects" title={"Projects"} className="mx-4" />
          <CustomLink href="/articles" title={"Article"} className="mx-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="/"
            target={"_blank"}
          >
            <TwitterIcon className={"w-6 mr-4"} />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="/"
            target={"_blank"}
          >
            <GithubIcon className={"w-6 mx-4"} />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="/"
            target={"_blank"}
          >
            <LinkedInIcon className={"w-6 mx-4"} />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="/"
            target={"_blank"}
          >
            <PinterestIcon className={"w-6 mx-4 bg-light rounded-full"} />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="/"
            target={"_blank"}
          >
            <DribbbleIcon className={"w-6 ml-4"} />
          </motion.a>
          <button
            className={`ml-3 p-1 flex items-center justify-center rounded-full
                ${
                  mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"
                }`}
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light");
            }}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>


      {
        isOpen?(
            <motion.div 
            initial={{scale:0,opacity:0,x:"-50%",y:"-50%"}}
            animate={{scale:1,opacity:1}}
      className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
       py-32 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md">
        <nav className="flex items-center flex-col justify-center">
          <CustomMobileLink toggle={handleClick}  href="/" title={"Home"} className=""  />
          <CustomMobileLink toggle={handleClick} href="/about" title={"About"} className="" />
          <CustomMobileLink toggle={handleClick} href="/projects" title={"Projects"} className="" />
          <CustomMobileLink toggle={handleClick} href="/articles" title={"Article"} className="" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap mt-2">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="/"
            target={"_blank"}
          >
            <TwitterIcon className={"w-6 mr-4 sm:mx-1"} />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="/"
            target={"_blank"}
          >
            <GithubIcon className={"w-6 mx-4 sm:mx-1 dark:bg-dark bg-light rounded-full"} />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="/"
            target={"_blank"}
          >
            <LinkedInIcon className={"w-6 mx-4 sm:mx-1"} />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="/"
            target={"_blank"}
          >
            <PinterestIcon className={"w-6 mx-4 sm:mx-1 bg-light rounded-full"} />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="/"
            target={"_blank"}
          >
            <DribbbleIcon className={"w-6 ml-4 sm:mx-1"} />
          </motion.a>
          <button
            className={`ml-3 p-1 flex items-center justify-center rounded-full
                ${
                  mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"
                }`}
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light");
            }}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </motion.div>
        ):null
      }
    
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}

export default Navbar;
