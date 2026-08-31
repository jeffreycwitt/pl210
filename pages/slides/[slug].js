import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import path from 'path'
import CustomLink from '../../components/CustomLink'
import Layout from '../../components/Layout'
import { slideFilePaths, SLIDES_PATH } from '../../utils/mdxUtils'
import Image from 'next/image';
import {DiscussionInstructions} from "../../components/DiscussionInstructions"

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Slide: dynamic(() => import('../../components/Slide')),
  Slides: dynamic(() => import('../../components/Slides')),
  Answer: dynamic(() => import('../../components/Answer')),
  HiddenBlock: dynamic(() => import('../../components/HiddenBlock')),
  QuestionBlock: dynamic(() => import('../../components/QuestionBlock')),
  // ssr to false is really important to successful deploy build on github pages; it was NOT working without this.
  // BabylonViewerWrapper: dynamic(() => import('../../components/BabylonViewerWrapper'), {ssr: false}),
  // BabylonViewerWrapper2: dynamic(() => import('../../components/BabylonViewerWrapper2'), {ssr: false}),
  Head,
  Image,
  
}

export default function SlidePage({ source, frontMatter }) {

  return (
    <>
        <MDXRemote {...source} components={components} date={frontMatter.date}/>
    
      <style jsx>{`
        body, html, main, .wrapper { margin: 0; height: 100%; overflow: hidden; font-family: Arial, sans-serif; }
      `}</style>
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const slideFilePath = path.join(SLIDES_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(slideFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = slideFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
