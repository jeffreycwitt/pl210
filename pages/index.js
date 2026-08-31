import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import Layout from '../components/Layout'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'

export default function Index({ posts }) {
  //get all unique class numbers from posts
  const allclasses = []
  posts.forEach((post) => {
    if (post.data.classno !== undefined){
      allclasses.push(post.data.classno)
    }
  })
  // get unique values in classes
  const uniqueClasses = new Set(allclasses)
  // convert back to array
  const classes = Array.from(uniqueClasses).sort((a,b) => a - b)
  //console.log("Classes found: ", Array.from(classes).sort((a,b) => a - b))

  const renderClassPosts = (classNum) => {
      const classposts = posts.filter((post) => post.data.classno === classNum)
      
      return classposts.sort((a, b) => {
        const orderA = a.data.order !== undefined ? a.data.order : Number.MAX_SAFE_INTEGER;
        const orderB = b.data.order !== undefined ? b.data.order : Number.MAX_SAFE_INTEGER;
        if (orderA < orderB) {
          return -1;
        }
        else if (orderA > orderB) {
          return 1
        }
        else {
          return 0
        }
      }).map((post) => {
        if (post.data.published){
          return (
            <li key={post.filePath}>
              <span>Reading {post.data.order}: </span>
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a>{post.data.title}</a>
              </Link>
            </li>
            )
          }
          else{
            return null
          }
      })
    }


  return (
    <Layout>
      <h1>PL 210 (Politics and Society) Guided Reading Questions</h1>
      <ul>
        {
        classes.map((classNum) => {
          return (
            <li key={classNum}>
              <h2>Class {classNum}</h2>
              <ul>
                {renderClassPosts(classNum)}
              </ul>
            </li>
          )
        })
        }
      </ul>
    </Layout>
  )
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { posts } }
}
