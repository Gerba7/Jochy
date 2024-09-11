import Image from 'next/image';
import styles from '../ui/components/Proyecto/proyecto.module.css';
import Proyecto2 from '../../public/images/proyectos2.jpeg';
import Proyecto3 from '../../public/images/proyecto3.jpg';
import Proyecto4 from '../../public/images/proyecto4.jpg';
import Proyecto5 from '../../public/images/proyecto5.jpg';
import MiniSlider from '../ui/components/Proyecto/MiniSlider/MiniSlider';




const Proyecto = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>EL PROYECTO</h2>
        <p className={styles.texts}>
            El proyecto <b>JOCHY</b> Puertos del reconocido Estudio de Arquitectura <b>CLUSELLAS ADES</b> es 
            una iniciativa ambiciosa que integra diferentes funciones en tres edificios 
            con destinos variados, brindando una experiencia multifacética a la comunidad 
            de Puertos.
        </p>
      </div>
      <div className={styles.parallaxContainer} />
      <div className={styles.wrapper}>
        <h2 className={styles.title}>MÓDULOS</h2>
        <p className={styles.texts}>
            El <b>MÓDULO A</b>, compuesto por planta baja y tres pisos, incluirá importantes locales comerciales 
            con acceso directo desde el Bosque en su planta baja. Los primeros dos pisos estarán dedicados 
            a oficinas y departamentos de vivienda para alquiler temporal, mientras que el tercer piso estará 
            destinado a los Amenities del complejo, entre los que destacan dos salones de usos múltiples, un 
            gimnasio equipado con vestuarios, una piscina y una terraza con solárium que ofrecerá una hermosa 
            vista al Bosque.
        </p>
        <p className={styles.texts}>
            El <b>MÓDULO B</b> constará de planta baja más cinco pisos, con un retiro en el último piso. La planta baja 
            albergará locales comerciales, mientras que los pisos superiores estarán dedicados exclusivamente a 
            departamentos residenciales de tres, cuatro y cinco ambientes, todos con vista a la Laguna sobre el Malba.
        </p>
        <p className={styles.texts}>
            El <b>MÓDULO C</b> será un edificio de planta baja y seis pisos, con un retiro en el último piso. Este módulo 
            incluirá locales comerciales en la planta baja, y el resto del edificio estará sectorizado en dos alas: 
            una destinada a uso residencial y la otra con un enfoque mixto, combinando vivienda y espacios profesionales.
        </p>
      </div>
      {/* <Image className={styles.img} src={Modulos1} alt='modulos' /> */}
      <div className={styles.img}>
        <MiniSlider />
      </div>
      <div className={styles.wrapper}>
        <p className={styles.texts}>
            Se construirán aproximadamente doscientas Cocheras en el subsuelo y una cantidad adicional sobre el predio, 
            en armonía con el espíritu y la filosofía de Puertos, para el uso exclusivo de las unidades del complejo edilicio.
        </p>
        <p className={styles.texts}>
            Finalmente, entre los módulos, se construirá un Paseo Peatonal con exuberante vegetación, de libre acceso para la 
            comunidad, que integrará los diferentes espacios del proyecto.
        </p>
        <p className={styles.texts}>
            JOCHY Puertos establece las bases para un desarrollo innovador que combina diferentes usos, desde viviendas y 
            oficinas hasta comercio y amenidades, todo en un entorno diseñado para brindar calidad de vida y comodidad. 
        </p>
        <p className={styles.texts}>
            ¡Un proyecto emocionante y transformador para la comunidad de Puertos!
        </p>
      </div>
      <div className={styles.imgWrapper}>
        <div className={styles.imgContainer}>
            <Image className={styles.smallImg} src={Proyecto2} alt='' />
        </div>
        <div className={styles.imgContainer}>
            <Image className={styles.smallImg} src={Proyecto3} alt='' />
        </div>
      </div>
      <div className={styles.imgWrapper}>
        <div className={styles.imgContainer}>
            <Image className={styles.smallImg} src={Proyecto4} alt='' />
        </div>
        <div className={styles.imgContainer}>
            <Image className={styles.smallImg} src={Proyecto5} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Proyecto
