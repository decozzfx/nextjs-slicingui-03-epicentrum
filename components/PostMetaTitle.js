import React from 'react'

const PostMetaTitle = ({category, date, title, center}) => {
    return (
        <>
         <div className="flex items-center text-white/60 space-x-4 mt-4">
            <div className="uppercase">{category}</div>
            <span>&bull;</span>
            <div>{date}</div>
         </div>
         <h2 className={`text-xl mt-4 ${center ? 'text-center' : ''}`}>{title}</h2>   
        </>
    )
}

export default PostMetaTitle
