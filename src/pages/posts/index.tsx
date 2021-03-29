import React from 'react'
import Head from 'next/head'
import styles from './styles.module.scss'

import { GetStaticProps } from 'next'
import { getPrismicClient } from '../../services/prismic'
import Prismic from '@prismicio/client'

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | IgNews </title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a>
                        <time>29 de marco 2020</time>
                        <strong>Titulo do post</strong>
                        <p>lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet</p>
                    </a>

                    <a>
                        <time>29 de marco 2020</time>
                        <strong>Titulo do post</strong>
                        <p>lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet</p>
                    </a>

                    <a>
                        <time>29 de marco 2020</time>
                        <strong>Titulo do post</strong>
                        <p>lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet</p>
                    </a>

                    <a>
                        <time>29 de marco 2020</time>
                        <strong>Titulo do post</strong>
                        <p>lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet</p>
                    </a>
                </div>
            </main>
        </>
    )
}


export const getStaticProps: GetStaticProps = async() =>{
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'post')
    ],{
        fetch: ['post.title', 'post.content'],
        pageSize:3,
    })

    // console.log(response)
    console.log(JSON.stringify(response, null, 2))
    return{
        props:{}
    }
}