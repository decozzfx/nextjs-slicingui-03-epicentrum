import React from 'react'
import InfoPost from './InfoPost'
import Link from 'next/link'

const CardPost = ({thumbnail, ...infoPost}) => {
    return (
        <article>
            <Link href='/detail'>
            <a><img src={thumbnail} className='w-full rounded' /></a>
            </Link>
            <InfoPost 
                {...infoPost}
            />
        </article>
    )
}

export default CardPost
