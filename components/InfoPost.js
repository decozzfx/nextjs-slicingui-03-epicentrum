import React from 'react'
import PostMetaTitle from './PostMetaTitle'
import PostAuthor from './PostAuthor'

const InfoPost = ({
   category,
   date,
   title,
   postDesc,
   authorAvatar,
   authorName,
   authorRole
}) => {
    return (
        <>
         <PostMetaTitle category={category} date={date} title={title}/>
         <p className='text-white/60 text-md mt-6 w-10/12'>{postDesc}</p>
         <PostAuthor authorAvatar={authorAvatar} authorName={authorName} authorRole={authorRole}/>     
        </>
    )
}

export default InfoPost
