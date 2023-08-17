import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import styles from './right.module.css'

const Right=()=>{
    return(
        <div className={styles.right}>
            <FontAwesomeIcon icon={faLocationDot} size="xl" />
        </div>
    )
}
export default Right