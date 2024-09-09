import Image from 'next/image';
import styles from '../ui/components/Unidades/unidades.module.css';
import Unidades1 from '../../public/images/unidades1.jpg';
import Unidades2 from '../../public/images/unidades2.jpg';
import Unidades3 from '../../public/images/unidades3.jpg';
import Unidades4 from '../../public/images/unidades4.jpg';
import Unidades5 from '../../public/images/unidades5.jpg';
import Unidades6 from '../../public/images/unidades6.jpg';
import Unidades7 from '../../public/images/unidades7.jpg';





const Unidades = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>UNIDADES</h2>
      </div>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Módulo “A”</h2>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
            <h2 className={styles.title2}>Planta Baja – Locales Comerciales</h2>
            <div className={styles.imgContainer}>
                <Image className={styles.smallImg} src={Unidades1} alt='' />
            </div>
        </div>
        <div className={styles.content}>
            <h2 className={styles.title2}>Pisos 1° y 2° – Oficinas y Viviendas destinadas a la Renta Temporal.</h2>
            <div className={styles.imgContainer}>
                <Image className={styles.smallImg} src={Unidades2} alt='' />
            </div>
        </div>
        <div className={styles.content}>
            <h2 className={styles.title2}>Pisos 3° – Salones de Usos Múltiples, Gimnasio, Piscina y Solárium.</h2>
            <div className={styles.imgContainer}>
                <Image className={styles.smallImg} src={Unidades3} alt='' />
            </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Módulo “B”</h2>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
            <h2 className={styles.title2}>Planta Baja – Locales Comerciales.</h2>
            <div className={styles.imgContainer}>
                <Image className={styles.smallImg} src={Unidades4} alt='' />
            </div>
        </div>
        <div className={styles.content}>
            <h2 className={styles.title2}>Pisos 1° al 5° – Departamentos con destino Residencial, y Terrazas de Uso Privado.</h2>
            <div className={styles.imgContainer}>
                <Image className={styles.smallImg} src={Unidades5} alt='' />
            </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Módulo “C”</h2>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
            <h2 className={styles.title2}>Planta Baja – Locales Comerciales.</h2>
            <div className={styles.imgContainer}>
                <Image className={styles.smallImg} src={Unidades6} alt='' />
            </div>
        </div>
        <div className={styles.content}>
            <h2 className={styles.title2}>Pisos 1° al 6° – Sector A: Departamentos con destino Residencial y Terrazas de Uso Privado. <br/>Sector B: Departamentos con destino de Usos Mixtos (Residencial y Profesional) y Terrazas de Uso Privado.</h2>
            <div className={styles.imgContainer}>
                <Image className={styles.smallImg} src={Unidades7} alt='' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Unidades
