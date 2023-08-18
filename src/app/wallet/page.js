import TopMost from '../../components/topMost'
import Nav from '../../components/nav'
import Search from '../../components/search'
import SideNav from '../../components/sideNav'


import styles from '../page.module.css'

import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import '@fortawesome/fontawesome-svg-core/styles.css'


export default function Assignees() {
  return (
    <>
    <TopMost/>
    <Nav/>
    <Search/>
    <div className={styles.mainpage}>
      <SideNav/>
      
    </div>
    </>
  )
}
