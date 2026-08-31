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
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'
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
  Question: dynamic(() => import('../../components/Question')),
  Answer: dynamic(() => import('../../components/Answer')),
  QuestionBlock: dynamic(() => import('../../components/QuestionBlock')),
  // ssr to false is really important to successful deploy build on github pages; it was NOT working without this.
  BabylonViewerWrapper: dynamic(() => import('../../components/BabylonViewerWrapper'), {ssr: false}),
  BabylonViewerWrapper2: dynamic(() => import('../../components/BabylonViewerWrapper2'), {ssr: false}),
  Head,
  Image,
  
}

export default function PostPage({ source, frontMatter }) {
  return (
    <Layout>
      {/* <header>
        <nav>
          <Link href="/">
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header> */}
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {/* {frontMatter.description && (<p className="description">{frontMatter.description}</p>)} */}
        {/* <DiscussionInstructions/> */}
      </div>
      
      <main className="main">
        {frontMatter.published ?
          <MDXRemote {...source} components={components} date={frontMatter.date}/>
        : <span>Questions Not Yet Released</span> 
        }
      </main>

      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }

        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
          margin-bottom: 5px;
        }
        .main {
          max-width: 800px;
          font-size: 18px;
        }
      `}</style>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

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
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
