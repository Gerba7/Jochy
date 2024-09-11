import React from 'react';
import styles from './mapRow2.module.css';



const MapRow2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mapContainer}>
        <iframe 
          title="Inline Frame Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18634.462374489944!2d-58.74626344683029!3d-34.3469485372945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb5ffddf2fcf41%3A0x44251fa3790e7811!2sPuertos!5e0!3m2!1ses!2sar!4v1726065337029!5m2!1ses!2sar" 
          width="100%" 
          height="100%" 
          loading="lazy" 
          style={{ border: 'none'}}
        />
      </div>
    </div>
  )
}

export default MapRow2
