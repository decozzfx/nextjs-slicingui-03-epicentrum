import Navbar from '../components/Navbar'
import FeaturedPost from '../components/FeaturedPost'
import CardPost from '../components/CardPost'
import { useState } from 'react'
import Footer from '../components/Footer'
import Container from '../components/Container'

export default function Home() {
  const [posts, setPosts] = useState([
    {
      id : '2',
      thumbnail : '/thumbnail-2.svg',
      category : 'INTERNET',
      date : 'June 28, 2021',
      title : 'How to design a product that can grow itself 10x in year',
      postDesc : 'Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.',
      authorAvatar : '/author-2.svg',
      authorName : 'Jenny Wilson',
      authorRole : 'Product Designer'
    },
    {
      id : '3',
      thumbnail : '/thumbnail-3.svg',
      category : '9 TO 5',
      date : 'June 22, 2021',
      title : 'The More Important the Work, the More Important the Rest',
      postDesc : 'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
      authorAvatar : '/author-3.svg',
      authorName : 'Esther Howard',
      authorRole : 'Entrepreneur'
    },
    {
      id : '4',
      thumbnail : '/thumbnail-4.svg',
      category : 'INSPIRATIONS',
      date : 'June 18, 2021',
      title : 'Email Love - Email Inspiration, Templates and Discovery',
      postDesc : 'Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.',
      authorAvatar : '/author-4.svg',
      authorName : 'Robert Fox',
      authorRole : 'Front-end Engineer'
    },
    {
      id : '5',
      thumbnail : '/thumbnail-4.svg',
      category : '9 TO 5',
      date : 'June 22, 2021',
      title : 'The More Important the Work, the More Important the Rest',
      postDesc : 'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
      authorAvatar : '/author-3.svg',
      authorName : 'Esther Howard',
      authorRole : 'Entrepreneur'
    },
    {
      id : '6',
      thumbnail : '/thumbnail-6.svg',
      category : 'INSPIRATIONS',
      date : 'June 18, 2021',
      title : 'Email Love - Email Inspiration, Templates and Discovery',
      postDesc : 'Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.',
      authorAvatar : '/author-4.svg',
      authorName : 'Robert Fox',
      authorRole : 'Front-end Engineer'
    },
    {
      id : '7',
      thumbnail : '/thumbnail-7.svg',
      category : 'INTERNET',
      date : 'June 28, 2021',
      title : 'How to design a product that can grow itself 10x in year',
      postDesc : 'Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.',
      authorAvatar : '/author-2.svg',
      authorName : 'Jenny Wilson',
      authorRole : 'Product Designer'
    }
  ])
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-600 to-gray-900 text-white">
     <Navbar />
     <Container>
      <FeaturedPost />
        <div className="flex -mx-3 flex-wrap">
        {posts.map(post => (
          <div className="md:w-4/12 w-full p-3 mt-8" key={post.id}>
          <CardPost {...post}/>
          </div>
        ))}
        </div>
     </Container>
     <Footer/>
    </div>
  )
}
