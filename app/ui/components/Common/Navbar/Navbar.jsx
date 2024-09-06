'use client';

import { useEffect, useState, useCallback } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { usePathname } from 'next/navigation';
import JOCHY_LOGO from '../../../../../public/images/jochyLogo.png';
import JOCHY_LOGO_WHITE from '../../../../../public/images/jochyLogoWhite.png';

const Navbar = () => {
  const pathname = usePathname();
  const [navHeight, setNavHeight] = useState(pathname !== '/'); 
  const [displayMenu, setDisplayMenu] = useState(true);

  const handleScroll = useCallback(() => {
    if (pathname === '/') {
      setNavHeight(window.scrollY >= 80);
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname !== '/') {
      setNavHeight(true); 
    } else {
      setNavHeight(window.scrollY >= 80);
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, handleScroll]);

  useEffect(() => {
    setDisplayMenu(true);
  }, [pathname]);

  const toggleMenu = (e) => {
    e.preventDefault();
    setDisplayMenu(!displayMenu);
  };

  return (
    <div className={`${styles.container} ${navHeight ? styles.containerHeight : ''}`}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.burger} onClick={toggleMenu}>
            <div className={styles.menuItem} style={{ color: navHeight && '#788586' }}>
              {displayMenu ? (
                <MenuIcon color='inherit' style={{ fontSize: 'inherit' }} />
              ) : (
                <CloseIcon color='inherit' style={{ fontSize: 'inherit' }} />
              )}
            </div>
          </div>
          <Link className={styles.logoLink} href='/'>
            <h1 className={styles.title}>Jochy</h1>
            <Image
              className={`${styles.logoNavbar} ${navHeight ? styles.visible : ''}`}
              src={navHeight ? JOCHY_LOGO : JOCHY_LOGO_WHITE}
              alt='JOCHY_LOGO'
              width={'auto'}
              height={navHeight ? 30 : 38}
              priority
            />
          </Link>
        </div>
        <div className={`${styles.right} ${displayMenu ? styles.rightDisplay : ''}`}>
          <Link href='/el-proyecto' className={`${styles.link} ${navHeight ? styles.linkColor : ''}`}>PROYECTO</Link>
          <Link href='#unidades' className={`${styles.link} ${navHeight ? styles.linkColor : ''}`}>UNIDADES</Link>
          <Link href='#arquitecto' className={`${styles.link} ${navHeight ? styles.linkColor : ''}`}>ARQUITECTO</Link>
          <Link href='#constructor' className={`${styles.link} ${navHeight ? styles.linkColor : ''}`}>CONSTRUCTOR</Link>
          <Link href='#desarrollador' className={`${styles.link} ${navHeight ? styles.linkColor : ''}`}>DESARROLLADOR</Link>
          <Link href='#puertos' className={`${styles.link} ${navHeight ? styles.linkColor : ''}`}>PUERTOS</Link>
          <Link href='#comercializador' className={`${styles.link} ${navHeight ? styles.linkColor : ''}`}>COMERCIALIZADOR</Link>
          <Link href='#contacto' className={`${styles.link} ${styles.blankRight}`}>CONTACTO</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;