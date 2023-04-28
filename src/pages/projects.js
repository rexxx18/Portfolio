import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import Image from 'next/image'





const FeaturedProject=({type,title,summary,img,link,githubLink})=>{
    return (
        <article className='w-full relative flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12'>
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
            <Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg' href={link} target='_blank'>
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl '>{type}</span>
                <Link className='hover:underline' href={link} target="_blank">
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark '>{summary}</p>
                <div className='mt-2 flex items-center '>
                    <Link className='w-10 ' href={githubLink} target="_blank">
                        <GithubIcon />
                    </Link>
                    <Link className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold' href={link} target="_blank">
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}


const Project=({title,link,type,githubLink,img})=>{
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative'>
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
            <Link className='w-full cursor-pointer overflow-hidden rounded-lg' href={link} target='_blank'>
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl '>{type}</span>
                <Link className='hover:underline' href={link} target="_blank">
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between '>
                <Link className='text-lg font-semibold underline' href={link} target="_blank">
                        Visit
                    </Link>
                    <Link className='w-10 ' href={githubLink} target="_blank">
                        {" "}
                        <GithubIcon />{" "}
                    </Link>
                    
                </div>
            </div>
        </article>
    )
}

const Projects = () => {



  return (
   <>
    <Head>
        <title>Projects</title>
        <meta name="description" content="any decsription" />
    </Head>
    <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
            <AnimatedText className='mb-16' text="Imagination Trumps Knowlegde!" />
            <div className='grid grid-cols-12 gap-24 gap-y-32'>
                <div className='col-span-12'>
                    <FeaturedProject 
                        title="Crypto Screener Application"
                       summary=" A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                        link="/"
                        type="Featured Project"
                        img={Project1}
                        githubLink="/"
                        
                    />
                </div>
                <div className='col-span-6'>
                <Project 
                        title="Crypto Screener Application"
                        link="/"
                        type="Featured Project"
                        img={Project1}
                        githubLink="/"
                        
                    />
                </div>
                <div className='col-span-6'>
                <Project 
                        title="Crypto Screener Application"
                        link="/"
                        type="Featured Project"
                        img={Project1}
                        githubLink="/"
                        
                    />
                </div>
                <div className='col-span-12'>
                <FeaturedProject 
                        title="Crypto Screener Application"
                       summary=" A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                        link="/"
                        type="Featured Project"
                        img={Project1}
                        githubLink="/"
                        
                    />
                </div>
                <div className='col-span-6'>
                <Project 
                        title="Crypto Screener Application"
                        link="/"
                        type="Featured Project"
                        img={Project1}
                        githubLink="/"
                        
                    />
                </div>
                <div className='col-span-6'>
                <Project 
                        title="Crypto Screener Application"
                        link="/"
                        type="Featured Project"
                        img={Project1}
                        githubLink="/"
                        
                    />
                </div>
            </div>
        </Layout>
    </main>
   </>
  )
}

export default Projects