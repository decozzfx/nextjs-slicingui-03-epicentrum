import React from 'react'

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
         <div className="flex items-center text-white/60 space-x-4 mt-4">
           <div className="uppercase">{category}</div>
           <span>&bull;</span>
           <div>{date}</div>
         </div>
         <h2 className='text-2xl mt-4'>{title}</h2>
         <p className='text-white/60 text-lg mt-6 w-10/12'>{postDesc}</p>
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

export default InfoPost
