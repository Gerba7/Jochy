import Image from 'next/image';
import styles from '../ui/components/Arquitecto/arquitecto.module.css';




const Arquitectos = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>ARQUITECTOS</h2>
        <p className={styles.texts}>
            <b>CLUSELLAS ADES</b> es un estudio de arquitectura reconocido por su enfoque innovador y su compromiso con 
            la excelencia en diseño y construcción. Fundado en 1990, el estudio ha desarrollado una amplia trayectoria 
            en proyectos de diversas escalas, abarcando desde residencias privadas hasta grandes desarrollos urbanos y 
            públicos. Con un equipo multidisciplinario, Clusellas Ades se destaca por integrar creatividad, funcionalidad 
            y sostenibilidad en cada una de sus obras, manteniendo un fuerte vínculo con el contexto local y el entorno natural.
        </p>
        <p className={styles.texts}>
            A lo largo de su historia, el estudio ha sido galardonado con numerosos premios y ha sido ampliamente publicado 
            en medios especializados. Además, sus integrantes han participado como profesores, críticos y conferencistas en 
            reconocidas universidades y eventos internacionales, consolidando su reputación como líderes en la arquitectura contemporánea.
        </p>
        <p className={styles.texts}>
            Son una visión que combina vanguardia y responsabilidad ambiental, Clusellas Ades sigue siendo un referente en el diseño 
            arquitectónico, abordando cada nuevo proyecto con un enfoque único y personalizado para superar las expectativas de sus 
            clientes <br/>y mejorar la calidad de vida en los espacios que crea.
        </p>
      </div>
      <div className={styles.parallaxContainer} />
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Arquitecto <b>Mariano CLUSELLAS</b></h2>
        <p className={styles.texts}>
            Graduado en la Universidad de Buenos Aires. Actualmente, es profesor y director del Área de Proyecto 
            en la Carrera de Arquitectura de la Escuela de Arquitectura y Estudios Urbanos de la Universidad Torcuato 
            Di Tella, donde también ha impartido clases de proyecto y construcción. A lo largo de su carrera, ha sido 
            profesor, crítico invitado y expositor en numerosas universidades de Argentina, América y Europa. Además, 
            ha actuado como jurado en concursos nacionales y asesor en la Dirección de Arquitectura del Gobierno de la 
            Ciudad de Buenos Aires, contribuyendo al desarrollo de importantes proyectos urbanos y públicos. Su práctica 
            abarca proyectos de variadas escalas en entornos urbanos, suburbanos y rurales tanto en Argentina como en 
            Uruguay.
        </p>
        <p className={styles.texts}>Su obra ha sido reconocida con premios, ha recibido elogios por parte de la crítica y <br/>ha sido 
            extensamente publicada en medios especializados.
        </p>
      </div>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Arquitecto <b>Juan ADES</b></h2>
        <p className={styles.texts}>
            Graduado en la Universidad de Buenos Aires. Actualmente, es profesor y director del Área de Proyecto 
            en la Carrera de Arquitectura de la Escuela de Arquitectura y Estudios Urbanos de la Universidad Torcuato 
            Di Tella, donde también ha impartido clases de proyecto y construcción. A lo largo de su carrera, ha sido 
            profesor, crítico invitado y expositor en numerosas universidades de Argentina, América y Europa. Además, 
            ha actuado como jurado en concursos nacionales y asesor en la Dirección de Arquitectura del Gobierno de la 
            Ciudad de Buenos Aires, contribuyendo al desarrollo de importantes proyectos urbanos y públicos. Su práctica 
            abarca proyectos de variadas escalas en entornos urbanos, suburbanos y rurales tanto en Argentina como en 
            Uruguay. 
        </p>
        <p className={styles.texts}>
            Su obra ha sido reconocida con premios, ha recibido elogios por parte de la crítica y <br/>ha sido extensamente 
            publicada en medios especializados.
        </p>
      </div>
    </div>
  )
}

export default Arquitectos