import React from 'react'
import InfoPost from './InfoPost'

const CardPost = ({thumbnail, ...infoPost}) => {
    return (
        <article>
            <img src={thumbnail} className='w-full rounded' />
            <InfoPost 
                {...infoPost}
            />
        </article>
    )
}

export default CardPost
