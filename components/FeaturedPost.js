import React from 'react'
import InfoPost from '../components/InfoPost'
import Link from 'next/link'


const FeaturedPost = () => {
    return (
      <article>
         <div className="flex -mx-4 mb-4 md:items-center flex-wrap">
            <div className="lg:w-8/12 md:7/12 px-4">
            <Link href='/detail'>
               <a><img src="/featured-thumbnail.svg" className='rounded-xl w-full' /></a>
            </Link>
            </div>
            <div className="lg:w-4/12 md:5/12 w-full px-4 items-center">
            <InfoPost
               category='UI Design'
               date='July 2, 2021'
               title='Understanding color theory: the color wheel and finding complementary colors'
               postDesc='Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'
               authorAvatar='/author-1.svg'
               authorName='Leslie Alexander'
               authorRole='UI Designer'
            />
            </div>
         </div>
      <hr className='border-white/10 md:hidden' />
      </article>
    )
}

export default FeaturedPost
