import styles from './cover.module.css';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import Jochy_Logo from '../../../../../public/images/jochyLogoWhite.png';
import Arrow from '../../../../../public/images/arrow-down.png';


const Cover = () => {
  return (
    <div className={styles.container}>
      <div className={styles.back} />
        <div className={styles.coverLogo}>
          <Image className={styles.logoImg} src={Jochy_Logo} alt='Sabbia logo' priority />
        </div>
      <Link className={styles.link} href="#banner" aria-label='linkArrow'>
        <Image className={styles.arrow} src={Arrow} alt='arrow' />
      </Link>
    </div>
  )
}

export default Cover
