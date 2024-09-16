import Image from 'next/image';
import styles from '../ui/components/Arquitecto/arquitecto.module.css';




const Arquitectos = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>ARQUITECTOS</h2>
        <p className={styles.texts}>
            <b>CLUSELLAS ADES</b>, dirigido por <b>Mariano CLUSELLAS</b> y <b>Juan ADES</b>, es un estudio de arquitectura y urbanismo especializado 
            en la conceptualización de proyectos de alta calidad técnica, sostenibilidad y diseño contemporáneo, tanto en ámbitos urbanos 
            como rurales, orientados a programas residenciales, laborales, culturales y recreativos. 
        </p>
        <p className={styles.texts}>
            Las propuestas arquitectónicas del estudio se distinguen por su calidad e innovación, diseñadas a medida para cada situación y usuario, 
            garantizando el máximo confort y un atractivo distintivo.
        </p>
        <p className={styles.texts}>
            Los proyectos desarrollados crean paisajes únicos que establecen nuevas conexiones con espacios específicos o áreas en desarrollo, 
            aportando perspectivas y escalas que revelan su potencial y carácter. Cada trabajo, además de ofrecer respuestas funcionales, invita 
            a descubrir nuevas dimensiones del espacio y sus cualidades. 
        </p>
        <p className={styles.texts}>
            Las obras establecen un vínculo profundo entre la construcción y el paso del tiempo, no solo por su pertinencia inmediata, sino 
            también por su capacidad para trascender. 
        </p>
        <p className={styles.texts}>
            Por ello, el estudio orienta su práctica arquitectónica hacia nuevos paradigmas que respetan y enriquecen el entorno cultural y natural. 
        </p>
        <p className={styles.texts}>
            A lo largo de su trayectoria, el estudio ha colaborado con una cuidadosa selección de empresas constructoras y proveedores de confianza, 
            cuyos resultados han sido probados a lo largo del tiempo. Los colaboradores son elegidos por su habilidad para integrar alta tecnología 
            con destreza artesanal, logrando soluciones arquitectónicas excepcionales. 
        </p>
      </div>
      <div className={styles.parallaxContainer} />
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Arquitecto <b>Mariano CLUSELLAS</b></h2>
        <p className={styles.texts}>
            MARIANO CLUSELLAS (Buenos Aires, 1963) es arquitecto por la Universidad de Buenos Aires. Ha sido profesor, crítico invitado y 
            expositor en diversas universidades de Argentina, América y Europa, además de jurado en múltiples concursos nacionales. Desde 
            1990, ha trabajado en proyectos de diferentes escalas en entornos urbanos, suburbanos y rurales de Argentina y Uruguay. Su 
            trabajo ha sido premiado, comentado y publicado tanto a nivel nacional como internacional. Entre 2015 y 2023, se desempeñó 
            como asesor en la Dirección General de Proyectos de Arquitectura de la Secretaría de Desarrollo Urbano del Gobierno de la 
            Ciudad de Buenos Aires, participando en el desarrollo de proyectos públicos de diversas dimensiones y alcances. Desde 2016, 
            trabaja en asociación con Juan Ades. Actualmente, es profesor y director del Área de Proyecto de la Carrera de Arquitectura 
            de la Escuela de Arquitectura y Estudios Urbanos de la Universidad Torcuato Di Tella, y desde 2023 es miembro de número de 
            la Academia Nacional de Bellas Artes. 
        </p>
      </div>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Arquitecto <b>Juan ADES</b></h2>
        <p className={styles.texts}>
            JUAN ADES (Buenos Aires, 1981) es arquitecto por la Universidad de Buenos Aires. Comenzó su trayectoria en 2003 como colaborador 
            en distintos estudios de arquitectura, participando en proyectos de diversas escalas. En 2008, inició su práctica independiente 
            en asociación con otros arquitectos. Entre 2012 y 2015, fue Director de Proyectos en AS Architecture-Studio en París, Francia, 
            donde lideró el desarrollo de proyectos y concursos de arquitectura y urbanismo en Francia, Oriente Medio y Chile. Desde 2016, 
            trabaja asociado a Mariano Clusellas. Entre 2016 y 2023, asesoró en proyectos urbanos y de movilidad para la Secretaría de 
            Transporte del Gobierno de la Ciudad de Buenos Aires.
        </p>
      </div>
    </div>
  )
}

export default Arquitectos