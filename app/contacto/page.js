import Image from 'next/image';
import styles from '../ui/components/Contacto/contacto.module.css';
import Logo from '../../public/images/jochyLogo.png';
import Form from '../ui/components/Contacto/Form/Form';




const Comercializador = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>CONTACTO</h2>
        <Form />
        <Image src={Logo} alt='jochy puertos logo' width={150} height={40} className={styles.logo} />
        <h3 className={styles.title2}>puertos@jochy.com.ar</h3>
        <h3 className={styles.title2}>+54 9 11 5996-6552</h3>
      </div>
    </div>
  )
}

export default Comercializador