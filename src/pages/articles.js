import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const Articles = () => {
  return (
    <>
    <Head>
        <title>Codebucks | Articles Page</title>
        <meta neme="description" content="any description" />
    </Head>
    <Layout className='pt-16'>
        <AnimatedText text="Words Can Change The World!" className='mb-16' />
        <ul>
            <li>Featured Articles 1</li>
            <li>Featured Articles 2</li>
        </ul>
    </Layout>
    </>
  )
}

export default Articles