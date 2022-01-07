import React from 'react'

const PostAuthor = ({authorAvatar, authorName, authorRole}) => {
    return (
        <>
         <div className="flex items-center mt-6">
            <img src={authorAvatar} className='rounded-full w-14' />
            <div className="ml-4 items-center">
               <h3>{authorName}</h3>
               <div className="text-white/60 mt-1">{authorRole}</div>
            </div>
         </div>       
        </>
    )
}

export default PostAuthor
