import React from 'react'

const FeaturedPost = () => {
    return (
      <article>
         <div className="flex -mx-4 items-center">
            <div className="w-8/12 px-4">
               <img src="/featured-thumbnail.svg" className='rounded-xl w-full' />
            </div>
            <div className="w-4/12 px-4">
               <div className="flex items-center text-white/60 space-x-4">
                  <div className="uppercase">UI Design</div>
                  <span>&bull;</span>
                  <div className="">July 2, 2022</div>
               </div>
               <h2 className='text-2xl mt-6'>Understanding color theory: the color wheel and finding complementary colors</h2>
               <p className='text-white/60 text-lg mt-6 w-10/12'>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
               <div className="flex items-center mt-6">
                  <img src="/author-1.svg" className='rounded-full w-14' />
                  <div className="ml-4 items-center">
                     <h3>Leslie Alexander</h3>
                     <div className="text-white/60">
                     UI Designer
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </article>
    )
}

export default FeaturedPost
