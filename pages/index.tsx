import { useState } from 'react';
import client from '../client'
import Link from 'next/link'
import { LandingLayout } from "@layouts";
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { FC } from 'react';
import { postProps } from "@types"
import styles from '../styles/Home.module.css'

function urlFor (source: SanityImageSource | FC<{}>) {
  return imageUrlBuilder(client).image(source)
}


const Home = ({post}: postProps) => {
  
  return (
    <>
    <div className={styles.hero_container}>
        <h1 className='text-4xl font-bold text-center m-1'>Reuben09's Technical Blog</h1>
        <p className='font-normal text-base m-1 text-center'>Providing you solutions to Technical problems in tech</p>
    </div>
      <div className={styles.grid_container}>
        {post.map((item)=> {
          const {title, slug, mainImage, estimatedReadingTime, description, publishedAt} = item
          return(
            <>
            <Link key={slug} href={`/${slug}`} passHref>
            <div className='lg:mb-4 flex flex-col p-4 rounded-lg cursor-pointer' style={{border: "1px solid #1D3153"}}>
              <div className="flex h-48 mb-1">
              {mainImage && (
                 <img
                 className='object-cover rounded-lg w-full h-full'
                 alt="main"
                  src={urlFor(mainImage) .url() }/>
              )}
            </div>
            <div className='flex'>
                <h1 className='font-bold text-left text-2xl'>{title}</h1>
              </div>
              <div className="flex text-center justify-start items-center">
                <p className="text-base font-normal text-left">{new Date(publishedAt).toDateString()}</p>
                <p className="text-base font-normal mx-4 text-left">--{estimatedReadingTime}mins</p>
              </div>
              <div className="flex">
                <p className="text-base font-normal text-left">{description}</p>
              </div>
            </div>
            </Link>
           </>
          )
        })}
      </div>
    </>
  )
}

export async function getStaticProps() {
   const post = await client.fetch(`*[_type == "post"  && publishedAt < now()] | order(publishedAt desc){title, 
    "mainImage": mainImage, 
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ), 
    "description": excerpt,
    "publishedAt": publishedAt,
    "slug":slug.current}`)
   return {
    props:{
      post: post
    },
    revalidate: 10,
   }
}

Home.Layout = LandingLayout;
export default Home;