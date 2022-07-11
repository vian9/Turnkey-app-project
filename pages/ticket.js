import Head from 'next/head'
import Navbar from '../src/components/Navbar/navbar';
import styles from './ticket.module.css';
import Dashboard from '../src/components/Dashboard/dashboard';

export default function Ticket() {
  return (
    <div>
      <Head>
        <title>Ticket</title>
        <meta name="description" content="" />
      </Head>
      <Navbar  
       action1="Tickets"
       action2="Jones Ferdinand" 
          />
    <div className={styles.left}>
              <Dashboard/>
    </div>
    </div>
  )
}
