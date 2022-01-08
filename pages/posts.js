import { useState } from 'react'
import Container from '../components/Container'
import Layout from '../components/Layout'
import CardPost from '../components/CardPost'
import mockPosts from '../utils/posts.json'
import SectionHeader from '../components/SectionHeader'
import Head from 'next/head'


const posts = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [posts, setPosts] = useState(mockPosts)

    return (
      <Layout>
      <Head>
      <title>Posts &mdash; Epicentrum</title>
      </Head>
        <Container>
          <SectionHeader>UI Design</SectionHeader>
          {posts.length ? (
            <div className="flex -mx-3 flex-wrap">
                {posts.map(post => (
                  <div className="md:w-4/12 w-full p-3 mt-8" key={post.id}>
                      <CardPost {...post}/>
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className='text-6xl'>No result 😥</h2>
              <p className='mt-10 text-xl text-white/60 md:w-6/12 w-full mx-auto'>We couldn’t find any posts with the keyword `yahahahayuk`. Please try another keyword.</p>
            </div>
          )}
        </Container>
      </Layout>  
    )
}

export default posts
