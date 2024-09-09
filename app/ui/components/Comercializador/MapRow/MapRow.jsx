import React from 'react';
import styles from './mapRow.module.css';



const MapRow = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mapContainer}>
        <iframe 
          title="Inline Frame Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1164.6929218160706!2d-58.72682167208321!3d-34.34413909513491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb61ad1ddf8915%3A0xc2abb8578324e55d!2sM74F%2B59%2C%20Bel%C3%A9n%20de%20Escobar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1725903451658!5m2!1ses!2sar" 
          width="100%" 
          height="100%" 
          loading="lazy" 
          style={{ border: 'none'}}
        />
      </div>
    </div>
  )
}

export default MapRow
