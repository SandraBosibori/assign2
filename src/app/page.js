import TopMost from '../components/topMost'
import Nav from '../components/nav'
import Search from '../components/search'
import SideNav from '../components/sideNav'
import Front from '../components/front'

import styles from './page.module.css'

import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import '@fortawesome/fontawesome-svg-core/styles.css'
import Right from '../components/right'

//everyone should be able to see this page
export default function Home() {
  return (
    <>
    <TopMost/>
    <Nav/>
    <Search/>
    <div className={styles.mainpage}>
      <SideNav/>
      <Front/>
      <Right/>

    </div>
    </>
  )
}
