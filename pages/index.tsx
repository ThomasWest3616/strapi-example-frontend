import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GetServerSideProps } from 'next'
import Card from '../components/Card'

export const getServerSideProps: GetServerSideProps = async () => {
  const postRes = await fetch(
    `https://arcane-bastion-39091.herokuapp.com/api/posts`
  );


  const posts = await postRes.json();

  return {
    props: {
      posts,
    },
  };
}

const Home = ({ posts } : {posts:any}) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {posts.data.map((post: any) => {


        if (post.id < 2){
          return (
            <Card post={post} />
          )
        }

        })}
      </div>

      <div>test test</div>

      <p>TESTING</p>

      <p>NEW TEST</p>

    </>
  )
}

export default Home
