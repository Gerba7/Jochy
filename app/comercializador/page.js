import Image from 'next/image';
import styles from '../ui/components/Comercializador/comercializador.module.css';
import Achaval from '../../public/images/achaval.png';
import LJ from '../../public/images/logo_ljr.png';
import Castex from '../../public/images/logo-castex.png';
import Tizado from '../../public/images/tizado.png';
import Lagonorte from '../../public/images/lagonorte.jpg';
import Carfi from '../../public/images/carfiLogo.png';
import MapRow from '../ui/components/Comercializador/MapRow/MapRow';





const Comercializador = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>COMERCIALIZADOR</h2>
        <h2 className={styles.title2}><b>Centro de Ventas de Puertos</b></h2>
        <p className={styles.texts}>
            Se encuentra ubicado frente a la rotonda principal, en el primer piso.
            Su horario de atención es de lunes a viernes de 10 a 18 hs. y los sábados, domingos y feriados de 11 a 18 hs.
        </p>
        <div className={styles.sponsors} style={{marginBottom: '5vh'}}>
            <div className={styles.sponsor}>
                <div className={styles.logoContainer}>
                    <Image className={styles.logo} src={Lagonorte} alt='Lagonorte' />
                </div>
                <div className={styles.phone}>
                    +54 9 11 5035-1685
                </div>
            </div>
            <div className={styles.sponsor}>
                <div className={styles.logoContainer}>
                    <Image className={styles.logo} style={{height: '15vh'}} src={Carfi} alt='Carfi' />
                </div>
                <div className={styles.phone}>
                    +54 9 11 2268-0000
                </div>
            </div>
            <div className={styles.sponsor}>
                <div className={styles.logoContainer}>
                    <Image className={styles.logo} style={{height: '5vh'}} src={Achaval} alt='Achaval' />
                </div>
                <div className={styles.phone}>
                    +54 9 11 2268-0000
                </div>
            </div>
        </div>
        <div className={styles.sponsors}>
            <div className={styles.sponsor}>
                <div className={styles.logoContainer}>
                    <Image className={styles.logo} src={Castex} alt='Castex' />
                </div>
                <div className={styles.phone}>
                    +54 9 11 5712-4245
                </div>
            </div>
            <div className={styles.sponsor}>
                <div className={styles.logoContainer}>
                    <Image className={styles.logo} src={Tizado} alt='Tizado' />
                </div>
                <div className={styles.phone}>
                    +54 9 11 4871-0200
                </div>
            </div>
            <div className={styles.sponsor}>
                <div className={styles.logoContainer}>
                    <Image className={styles.logo} src={LJ} alt='LJRamos' />
                </div>
                <div className={styles.phone}>
                    +54 9 11 3079-0476
                </div>
            </div>
        </div>
      </div>
      <MapRow />
    </div>
  )
}

export default Comercializador