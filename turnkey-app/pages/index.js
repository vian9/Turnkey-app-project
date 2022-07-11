import Head from 'next/head'
import Login from '../src/components/LoginPage/loginPage';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Log In</title>
        <meta name="description" content="" />
      </Head>
      <Login />
    </div>
  )
}
