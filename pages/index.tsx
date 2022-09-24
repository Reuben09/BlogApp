import client from '../client'
import Link from 'next/link'
import { LandingLayout } from "@layouts";
import imageUrlBuilder from '@sanity/image-url'
import { Paragraph, H1, Row } from '@components'
import Image from 'next/image'

import {
  HomeContainer,
  BlogGrid,
  Grid,
  GridImage 
} from "@page-components";

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Home: React.FC<{
  post: {
    title: string;
    slug: string;
    mainImage: React.FC;
    estimatedReadingTime: number;
    description: string;
    publishedAt: string;
  }[];
}> =({post}) => {

  return (
    <>
    <div>
    <HomeContainer align="center" justify="center" height="30rem">
        <H1 size="xl" align="center">Reuben09's Technical Blog</H1>
        <Paragraph align="center">Providing you solutions to Technical problems in tech</Paragraph>
    </HomeContainer>
      <BlogGrid>
        {post.map((item)=> {
          const {title, slug, mainImage, estimatedReadingTime, description, publishedAt} = item
          return(
            <>
            <Link href={`blogPost/${slug}`} passHref>
            <Grid>
              <GridImage height="12rem" margin="0 0 0.3rem 0">
              {mainImage && (
                 <Image
                  src={urlFor(mainImage) .url() } 
                  width={400}
                  height={210}/>
              )}
            </GridImage>
            <Row margin="0 0 0.2rem 0">
                <H1 size="lg" align="left">{title}</H1>
              </Row>
              <Row align="center" justify="flex-start" margin="0 0 0.2rem 0">
                <Paragraph>{new Date(publishedAt).toDateString()}</Paragraph>
                <Paragraph margin="0 1rem">--{estimatedReadingTime}mins</Paragraph>
              </Row>
              <Row>
                <Paragraph>{description}</Paragraph>
              </Row>
            </Grid>
            </Link>
           </>
          )
        })}
      </BlogGrid>
    </div>
    </>
  )
}

export async function getStaticProps() {
   const post = await client.fetch(`*[_type == "post"]{title, 
    "mainImage": mainImage, 
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ), 
    "description": excerpt,
    "publishedAt": publishedAt,
    "slug":slug.current}`)
   return {
    props:{
      post: post
    } 
   }
}

Home.Layout = LandingLayout;
export default Home;