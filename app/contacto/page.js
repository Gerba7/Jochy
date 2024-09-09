import Image from 'next/image';
import styles from '../ui/components/Contacto/contacto.module.css';
import Logo from '../../public/images/jochyLogo.png';




const Comercializador = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>CONTACTO</h2>
        <form className={styles.form} id='form'>
          <div className={styles.formItem}>
              <label className={styles.label}>Nombre y Apellido</label>
              <input className={styles.input} type="text" name='name' required />
          </div>
          <div className={styles.formItem}>
              <label className={styles.label}>E-Mail</label>
              <input className={styles.input} type="email" name='email' required />
          </div>
          <div className={styles.formItem}>
              <label className={styles.label}>Teléfono</label>
              <input className={styles.input} type="number" name='phone' min={0} required  />
          </div>
          <div className={styles.formItem}>
              <label className={styles.label}>Mensaje</label>
              <textarea className={styles.textarea} type="text" name='message' required />
          </div>
          <button className={styles.button} type='submit' form='form' >ENVIAR</button>
        </form>
        <Image src={Logo} alt='jochy puertos logo' width={150} height={40} className={styles.logo} />
        <h3 className={styles.title2}>puertos@jochy.com.ar</h3>
        <h3 className={styles.title2}>+54 9 11 5996-6552</h3>
      </div>
    </div>
  )
}

export default Comercializador