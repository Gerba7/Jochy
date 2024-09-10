import Image from 'next/image';
import styles from '../ui/components/Desarrollador/desarrollador.module.css';




const Desarrollador = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>DESARROLLADOR</h2>
        <p className={styles.texts}>
            La <b>Alianza Laurens-Carfí-Pujol</b> es un grupo destacado de desarrolladores inmobiliarios que 
            comparten un mismo objetivo: crear proyectos que no solo aporten valor a la comunidad, sino 
            que también se distingan por su diseño funcional, alta calidad constructiva y uso de tecnología 
            avanzada, todo ello con un enfoque de respeto al medio ambiente y buscando la sustentabilidad 
            en cada uno de sus desarrollos.
        </p>
        <p className={styles.texts}>
            Este grupo está conformado por Fausto CARFÍ (Corredor Público) y Facundo CARFÍ (Contador Público), 
            miembros de una familia con una tradición de más de 90 años en el desarrollo inmobiliario. Su abuelo, 
            Vicente Carfí, fundó las primeras oficinas familiares en 1931, y desde entonces han sido responsables 
            de algunos de los desarrollos inmobiliarios más importantes de Castelar e Ituzaingó, en la Zona Oeste 
            del Gran Buenos Aires. Participaron de los destacados proyectos JOCHY, SN, VINCENZO, GIUSEPPINA, MONINA, 
            VIVRE, etc. consolidando su presencia en el sector.
        </p>
        <p className={styles.texts}>
            En el año 2015, los Carfí formaron una alianza comercial con el desarrollador inmobiliario Federico LAURENS 
            (Abogado), con amplia experiencia en proyectos en Cardales, Zona Norte del Gran Buenos Aires. Junto a 
            Julián PUJOL (Contador Público) y Paula RODRÍGUEZ REDONDO (Contador Público), ambos con experiencia en 
            desarrollos de viviendas multifamiliares en la Zona Oeste del Gran Buenos Aires, unieron fuerzas para 
            potenciar su alcance en el mercado inmobiliario.
        </p>
      </div>
      <div className={styles.parallaxContainer} />
      <div className={styles.wrapper}>
        <p className={styles.texts}>
            La experiencia y trayectoria de este grupo les ha permitido gestionar exitosamente negocios e inversiones 
            inmobiliarias, con el respaldo de una sólida cartera de clientes, inversores y socios que los acompañan en 
            cada nuevo proyecto. Además, cuentan con un importante capital de trabajo, lo que brinda confianza a quienes 
            buscan invertir desde las primeras fases de las obras.
        </p>
        <p className={styles.texts}>
            Se construirán aproximadamente doscientas Cocheras en el subsuelo y una cantidad adicional sobre el predio, 
            en armonía con el espíritu y la filosofía de Puertos, <br/>para el uso exclusivo de las unidades del complejo edilicio.
        </p>
        <p className={styles.texts}>
            Finalmente, entre los módulos, se construirá un Paseo Peatonal con exuberante vegetación, de libre acceso para la 
            comunidad, que integrará los diferentes espacios del proyecto.
        </p>
        <p className={styles.texts}>
            JOCHY Puertos establece las bases para un desarrollo innovador que combina diferentes usos, desde viviendas y 
            oficinas hasta comercio y amenidades, todo en un entorno diseñado para brindar calidad de vida y comodidad. 
            ¡Un proyecto emocionante y transformador para la comunidad de Puertos!
        </p>
        <p className={styles.texts}>
            Actualmente, la Alianza Laurens-Carfí-Pujol ha aceptado el desafío de construir en Puertos, un desarrollo 
            inmobiliario liderado por Consultatio, donde buscan crear productos innovadores y de calidad, en plena armonía 
            con el entorno natural, reafirmando su compromiso con la sustentabilidad y la excelencia en cada proyecto.
        </p>
      </div>
    </div>
  )
}

export default Desarrollador