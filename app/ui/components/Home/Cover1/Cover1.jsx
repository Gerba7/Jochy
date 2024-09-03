'use client'

import Image from 'next/image';
import styles from './cover1.module.css';
import Cover from '../../../../../public/images/jochyCover1.jpg';
import { useEffect } from 'react';

const Cover1 = () => {

    useEffect(() => {
        window.addEventListener('scroll', () => {
          document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
        });
    
        return () => {
          window.removeEventListener('scroll',   
     () => {});
        };
      }, []);

  return (
    <div className={styles.parallaxContainer}>
      <div className={styles.parallaxContent}>
      </div>
      <Image src={Cover} alt="Parallax Image" className={styles.parallaxImage} style={{ transform: `translateZ(-10px) scale(2) translateY(-${scrollYRef.current / 2}px)` }}/>
    </div>
  );
};

export default Cover1;
