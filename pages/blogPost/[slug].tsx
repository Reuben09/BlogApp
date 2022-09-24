 import client from '../../client'
 import imageUrlBuilder from '@sanity/image-url'
 import {PortableText} from '@portabletext/react'
 import { LandingLayout } from "@layouts";
 import {
  BlogContainer,
  GridOne
} from "@page-components";
import { Paragraph, H1, Row, Column } from '@components'


 function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}

const BlogPost = ({ blog }) => {
  
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
          <img src={urlFor(mainImage) .url()} />
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
    const paths = await client.fetch(`*[_type == "post" && defined(slug.current)][].slug.current`)
    
    return {
        paths: paths.map((slug) => ({params: {slug}})),
        fallback: true,
      }
}

export async function getStaticProps(context){
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