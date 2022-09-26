 import { Column, H1, Row } from '@components';
import { LandingLayout } from "@layouts";
import {
  BlogContainer,
  GridOne
} from "@page-components";
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import client from '../../client';
import { blogProps } from "@types";

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
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value.asset).width(320).height(240).fit('max').auto('format') .url()}
        />
      )
    }
  }
}



const BlogPost = ({blog} : blogProps) => {
  
  return(
  <>
  <BlogContainer>
  <GridOne>
    {blog.map((item)=> {
      const { id, title, mainImage, body = []} = item;
      return(
        <Column key={id}>
        <H1>{title}</H1>
        <Row> {mainImage && (
                <img
                 src={urlFor(mainImage) .url()} 
                 alt="main"/>
              )}</Row>
        <PortableText
        value={body}
        components={ptComponents}
      />
        </Column>
      )
    })}
  </GridOne>
  </BlogContainer>
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