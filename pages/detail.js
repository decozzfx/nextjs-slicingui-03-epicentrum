import React from 'react'
import Container from '../components/Container'
import Layout from '../components/Layout'
import PostAuthor from '../components/PostAuthor'
import PostMetaTitle from '../components/PostMetaTitle'

const detail = () => {
    return (
        <Layout>
         <Container>
            <div className="flex md:w-6/12 w-full mx-auto items-center flex-col">
               <PostMetaTitle category='UI Design' date='July 2, 2021' title='Understanding color theory: the color wheel and finding complementary colors' center />
               <PostAuthor authorAvatar='/author-1.svg' authorName='Leslie Alexander' authorRole='UI Designer' />

            </div>
            <div className="md:w-10/12 w-full mx-auto">
               <img src="/featured-thumbnail.svg" className='rounded-lg w-full my-10' />
            </div>
            <div className="w-full md:w-8/12 mx-auto leading-relaxed">
               <p className='text-xl mb-4'>Male sixth sea it a. Brought was signs female darkness signs form cattle land grass whose from subdue also they`&apos;`re their brought seas isn`&apos;`t, to day from bearing grass third midst after beginning man which you`&apos;`re. Dry, gathering beginning given made them evening.</p>
               
               <p className='mb-4 '>Lights dry. Thing, likeness, forth shall replenish upon abundantly our green. Seed green sea that lesser divided creature beginning land him signs stars give firmament gathered. Wherein there their morning a he grass. Don`&apos;`t made moving for them bring creature us you`&apos;`ll tree second deep good unto good may. Us yielding.</p>

               <p>Have. Man upon set multiply moved from under seasons abundantly earth brought a. They`&apos;`re open moved years saw isn`&apos;`t morning darkness. Over, waters, every let wherein great were fifth saw was lights very our place won`&apos;`t and him Third fourth moving him whales behold. Beast second stars lights great was don`&apos;`t green give subdue his. Third given made created, they`&apos;`re forth god replenish have whales first can`&apos;`t light was. Herb you`&apos;`ll them beast kind divided. Were beginning fly air multiply god Yielding sea don`&apos;`t were forth.</p>
            </div>
         </Container>
        </Layout>
    )
}

export default detail
