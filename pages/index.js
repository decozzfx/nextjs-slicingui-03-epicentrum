import FeaturedPost from '../components/FeaturedPost'
import CardPost from '../components/CardPost'
import { useState } from 'react'
import Container from '../components/Container'
import Layout from '../components/Layout'
import mockPosts from '../utils/posts.json'

export default function Home() {
  const [posts, setPosts] = useState(mockPosts)
  return (
    <Layout>      
     <Container>
      <FeaturedPost />
        <div className="flex -mx-3 flex-wrap">
        {posts.map(post => (
          <div className="md:w-4/12 w-full p-3 md:mt-8 mt-6" key={post.id}>
          <CardPost {...post}/>
          </div>
        ))}
        </div>
     </Container>
    </Layout>
  )
}
