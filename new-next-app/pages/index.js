import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <h1>
        Next JS pre rendering
      </h1>
      <Link href='/users'>
        <a>Users Page</a>
      </Link>
      <Link href='/posts'>
        <a>Posts Page</a>
      </Link>
    </>
  )
}
