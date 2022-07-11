import Head from 'next/head'
import Login from '../src/components/LoginPage/loginPage';

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
