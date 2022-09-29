import { LandingLayout } from "@layouts";
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import client from '../../client';
import { blogProps } from "@types";
import styles from '../../styles/Slug.module.css'

 function urlFor (source: SanityImageSource) {
  return imageUrlBuilder(client).image(source)
}


type valueProps = {
  value: {
     asset?: {
      _ref: string | undefined
     };
     alt: string;
  }
}

const ptComponents = {
  types: {
    image: ({value} : valueProps) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <>
        <div style={{height: "20rem", textAlign: "left", display: "flex", alignItems: "flex-start", justifyContent: "flex-start", marginBottom: "2rem"}}>
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value.asset) .url()} style={{width: "100%", height: "100%", objectFit: "contain"}}/>
        </div>
        </>
      )
    }
  }
}



const BlogPost = ({blog} : blogProps) => {
  
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
         }
      }
    })
        
        return{
          paths,
          fallback: false,
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
    }
  }
}

BlogPost.Layout = LandingLayout;
export default BlogPost;