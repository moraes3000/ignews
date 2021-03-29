import React from 'react'
import Head from 'next/head'
import styles from './styles.module.scss'
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