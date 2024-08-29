'use client'

import Link from 'next/link';
import styles from './cover2.module.css';
import { useEffect, useRef, useState } from 'react';





const Cover2 = () => {


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
    { threshold: 0 }
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
      <div className={styles.back} />
      <div className={styles.scrollOffset} id='cover2'></div>
    </div>
  )
}

export default Cover2
