'use client'

import { useEffect, useRef, useState } from 'react';
import styles from './banner.module.css';



const Banner = () => {

  const [animate, setAnimate] = useState(false);

  const animationRef = useRef();


  useEffect(() => {

    const animationObserver = new IntersectionObserver(
    (entries) => {
        if (entries[0].isIntersecting) {
        setAnimate(true);
        } else {
        setAnimate(false);
        }
    },
    { threshold: 0.5 }
    );

    if (animationRef.current) {
    animationObserver.observe(animationRef.current);
    }

    return () => {

    if (animationRef.current) {
        animationObserver.unobserve(animationRef.current);
    }

    };

  }, [])


  return (
    <div className={styles.container} ref={animationRef}>
        <div className={styles.scrollOffset} id='objetivos'></div>
        <div className={styles.wrapper}>
            <h1 className={`${styles.title} ${animate ? styles.visible : ''}`}>DONDE EL ARTE Y LA NATURALEZA CONVERGEN</h1>
        </div>
    </div>
  )
}

export default Banner
