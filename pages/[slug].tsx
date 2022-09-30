import { LandingLayout } from "@layouts";
import { PortableText } from '@portabletext/react';
import {useRouter} from 'next/router';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import client from '../client';
import { blogProps, valueProps } from "@types";
import styles from '../styles/Slug.module.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

 function urlFor (source: SanityImageSource) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({value} : valueProps) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <>
        <div className={styles.imageContainer}>
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value.asset) .url()} style={{width: "100%", height: "100%", objectFit: "contain"}}/>
        </div>
        </>
      )
      },
      code: (props: { value: { code: string | string[]; language: any; }; })=> {
        if(!props.value.code){
          return null
        }
        return <SyntaxHighlighter language={props.value.language || 'text'}>{props.value.code}</SyntaxHighlighter>
      }
    }

  }


const BlogPost = ({blog} : blogProps) => {

    const router = useRouter();
    
    if(router.isFallback){
      return <div>loading...</div>
    }
    
  return(
  <>
  <div className="w-full flex items-center justify-center h-full lg:px-16 px-4 mt-12">
  <div className='flex items-center justify-center text-left' style={{width: "40rem"}}>
    {blog.map((item)=> {
      const { id, title, mainImage, body = []} = item;
      return(
        <div className="flex flex-col" key={id}>
        <h1 className='font-bold lg:text-left text-center text-2xl mb-4'>{title}</h1>
        <div className="flex"> {mainImage && (
                <img
                 src={urlFor(mainImage) .url()} 
                 alt="main"
                 className="w-full"/>
              )}</div>
          <div className= {styles.color}>
        <PortableText
        value={body}
        components={ptComponents}
      />
      </div>
        </div>
      )
    })}
  </div>
  </div>
  </>
  )
 }

export async function getStaticPaths(){
  const data = await client.fetch(`*[_type == "post"]{
    "slug":slug.current}`)
    
    const paths = data.map((post: { slug: any; }) => {
      return {
         params: {
          slug: `${post.slug}` 
         },
      }
    })
        
        return{
          paths,
          fallback: true,
      }
}

export async function getStaticProps(context: { params: any; }){
  const { params } = context
  const post = await client.fetch(`
    *[_type == "post" && slug.current == "${params.slug}"]
    {title,
     "id":_id,
     "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
     body,
     title,
     slug,
     description,
     publishedAt,
     "mainImage": mainImage
      }
  `)
  
  return {
    props: {
      blog: post
    },
    revalidate: 10,
  }
}

BlogPost.Layout = LandingLayout;
export default BlogPost;