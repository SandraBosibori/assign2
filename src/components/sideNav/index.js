'use client'
import styles from './sideNav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Link from 'next/link'


const SideNav=()=>{
    const[collapsed, setCollapsed]= useState(false);

    const handleSideNav=()=>{
        setCollapsed(collapsed===true? false: true)
    }
    return(
        <>
            <div className={collapsed ? styles.sideNav: styles.hidden}>
                <div className={styles.services}><Link href='/services'>Services</Link></div>
                <div className={styles.assignees}><Link href='/assignees'>Assignees</Link></div>
                <div className={styles.wallet}><Link href='/wallet'>Wallet</Link></div>
                <div className={styles.history}><Link href='/history'>History</Link></div>
                <div className={styles.todo}><Link href='/todo'>To do List</Link></div>
            </div>
            <div className={styles.arrow}><button onClick={handleSideNav}><FontAwesomeIcon icon={faArrowRight} flip /></button></div>
        </>
    )
}
export default SideNav