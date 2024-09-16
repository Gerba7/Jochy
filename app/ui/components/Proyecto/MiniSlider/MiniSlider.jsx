'use client'

import React, { useEffect, useState } from 'react';
import styles from './miniSlider.module.css';
import Image from 'next/image';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Proyectos6 from '../../../../../public/images/proyecto6.jpg';
import Proyectos7 from '../../../../../public/images/proyectos7.jpg';
import Proyectos8 from '../../../../../public/images/proyectos8.jpg';
import Proyectos9 from '../../../../../public/images/proyectos9.jpg';
import Proyectos10 from '../../../../../public/images/proyectos10.jpg';
import Proyectos11 from '../../../../../public/images/proyectos11.jpg';



const MiniSlider = () => {

    const items = [
        {
            id: 0,
            img: Proyectos6
        },
        {
            id: 1,
            img: Proyectos7
        },
        {
            id: 2,
            img: Proyectos8
        },
        {
            id: 3,
            img: Proyectos9
        },
        {
            id: 4,
            img: Proyectos10
        },
        {
            id: 5,
            img: Proyectos11
        },
    ]

    const [slideIndex, setSlideIndex] = useState(0);
    
    const handleClick = (direction) => {

        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : items?.length - 1)
        } else {
            setSlideIndex(slideIndex < items?.length - 1 ? slideIndex + 1 : 0)
        }

    }

    const carouselScroll = () => {

        if (slideIndex === items?.length - 1) {
            return setSlideIndex(0)
        }
        
        return setSlideIndex(slideIndex + 1)
    }


    useEffect(() => {
        
        const interval = setInterval(() => {carouselScroll()}, 5000)

        return () => clearInterval(interval)

    }, [slideIndex])




  return (
    <div className={styles.container}>
        <div className={`${styles.arrow} ${styles.arrowLeft}`} onClick={() => handleClick("left")}>
            <KeyboardArrowLeftIcon style={{color: '#f5f5f5'}} fontSize='inherit' />
        </div>
        <div className={styles.wrapper}>
            {items?.map((item, idx) => (
                <div className={styles.slide} key={item?.id} style={{ transform: `translate(-${slideIndex * 100}%)`}}>
                    <div className={styles.background}>
                        <Image src={item?.img} className={styles.backgroundImg} alt='Casas' />
                    </div>
                </div>
            ))}
        </div>
        <div className={`${styles.arrow} ${styles.arrowRight}`} onClick={() => handleClick("right")}>
            <KeyboardArrowRightIcon style={{color: '#f5f5f5'}} fontSize='inherit' />
        </div>
        <div className={styles.dotsContainer}>
            {items?.map((_, idx) => (
                <div key={idx} className={`${styles.dot} ${slideIndex === idx && styles.dotActive}`} onClick={() => setSlideIndex(idx)} />
            ))}
        </div>
        <div className={styles.miniImages}>
            {items?.map((item, idx) => (
                <Image key={item.id} className={`${styles.miniImg} ${slideIndex === idx && styles.miniImgActive}`} src={item.img} alt="miniImg"  onClick={() => setSlideIndex(idx)} />
            ))}
        </div>
        <div className={styles.linesContainer}>
            {items?.map((_, idx) => (
                <div key={idx} className={`${styles.line} ${slideIndex === idx && styles.lineActive}`} onClick={() => setSlideIndex(idx)} />
            ))}
        </div>
    </div>
  )
}

export default MiniSlider
