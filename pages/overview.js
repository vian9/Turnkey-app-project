import Head from 'next/head'
import Navbar from '../src/components/Navbar/navbar';
import styles from './ticket.module.css';
import Dashboard from '../src/components/Dashboard/dashboard';

export default function Overview() {
  return (
    <div>
      <Head>
        <title>Overview</title>
        <meta name="description" content="" />
      </Head>
      <Navbar  
       action1="Overview"
       action2="Jones Ferdinand" 
          />
    <div className={styles.left}>
              <Dashboard/>
    </div>
    </div>
  )
}
