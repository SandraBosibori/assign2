import Image from "next/image"
import styles from './topmost.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import Link from "next/link"

const TopMost=()=>{
    return(
        <>
            <div className={styles.top}>
                <div>
                <Image
                    src='/assign.png'
                    alt='assign'
                    width={100}
                    height={20}
                />
                </div>
                <div className="account"><Link href='/authentication'> <FontAwesomeIcon icon={faUser} size="xl" /></Link></div>
            </div>
        </>
    )
}
export default TopMost