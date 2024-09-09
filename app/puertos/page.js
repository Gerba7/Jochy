import Image from 'next/image';
import styles from '../ui/components/Puertos/puertos.module.css';
import Counter from '../ui/components/Puertos/Counter/Counter';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';




const Puertos = () => {

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h2 className={styles.title}>PUERTOS</h2>
            <p className={styles.texts}>
                Una ciudad que crece y suma propuestas y servicios pensando en el bienestar <br/>y las necesidades de las personas que la habitan.
            </p>
        </div>
        <div className={styles.wrapper2}>
            <div className={styles.serviceContainer}>
                <h3 className={styles.number}><Counter target={1400} /></h3>
                <h5 className={styles.serviceTitle}>Hectáreas<br/>Totales</h5>
            </div>
            <div className={styles.serviceContainer}>
                <h3 className={styles.number}><Counter target={6} /></h3>
                <h5 className={styles.serviceTitle}>Kilómetros<br/>de Reserva</h5>
            </div>
            <div className={styles.serviceContainer}>
                <h3 className={styles.number}><Counter target={400} /></h3>
                <h5 className={styles.serviceTitle}>Hectáreas<br/>de Lagos</h5>
            </div>
            <div className={styles.serviceContainer}>
                <h3 className={styles.number}><Counter target={11} /></h3>
                <h5 className={styles.serviceTitle}>Barrios<br/>Lanzados</h5>
            </div>
            <div className={styles.serviceContainer}>
                <h3 className={styles.number}><Counter target={3} /></h3>
                <h5 className={styles.serviceTitle}>Instituciones<br/>Educativas</h5>
            </div>
        </div>
        <div className={styles.parallaxContainer} />
        <div className={styles.wrapper}>
            <h2 className={styles.title}>CIUDAD ORGÁNICA, DEPORTIVA y CULTURAL</h2>
            <p className={styles.texts}>
                La filosofía del emprendimiento se centra en promover una cultura ecológica y un estilo de vida 
                saludable y natural para todos sus habitantes. El diseño de la ciudad se concibe como un paseo por 
                calles curvas, donde las visuales cambian constantemente, ofreciendo una experiencia única en cada 
                recorrido. Su trazado orgánico no solo embellece el paisaje, sino que también facilita la movilidad 
                a través de bicisendas que conectan cada rincón de la ciudad, mientras que las áreas de servicios se 
                encuentran estratégicamente ubicadas cerca de los distintos barrios.
            </p>
            <p className={styles.texts}>
                La ciudad, en su totalidad, contará con veinte barrios. Además, se ha inaugurado el Centro de Destino, 
                un espacio perfecto para el encuentro social, que incluye un centro comercial, una variada oferta 
                gastronómica, oficinas y una plaza pública. El diseño paisajístico estuvo a cargo del Estudio Bulla, 
                mientras que Torrado Arquitectos desarrolló el concepto general del proyecto. Como toque distintivo, 
                se erige La Aguja, una imponente escultura visible desde la distancia, creada por el artista brasileño 
                Artur Lescher.
            </p>
            <p className={styles.texts}>
                Dos pilares adicionales de la propuesta de Puertos son el arte y el deporte. Actualmente, se encuentra 
                en desarrollo un programa de arte a cielo abierto, con instalaciones y obras de artistas reconocidos, 
                ubicadas en los paisajes y espacios comunes, con el propósito de integrar el arte en la vida cotidiana 
                de los habitantes.
            </p>
            <p className={styles.texts}>
                En cuanto al deporte, el Lago de Puertos es ideal para la práctica de una amplia variedad de deportes 
                acuáticos, mientras que el Centro Deportivo ofrece instalaciones para disfrutar de diversas actividades 
                físicas, consolidando a Puertos como un lugar donde el arte, el deporte y la naturaleza se fusionan para 
                ofrecer una calidad de vida excepcional.
            </p>
        </div>
        <div className={styles.wrapper}>
            <h2 className={styles.title}>LA RESERVA</h2>
            <p className={styles.texts}>
                Un corredor biológico a lo largo de la ribera, donde se preservan las especies autóctonas. Con 60 hectáreas 
                de superficie libre bordeando el Río Luján, permite la circulación de fauna entre diferentes hábitats y 
                pequeñas islas sobre el Lago Escobar, convirtiendo el corazón de Puertos en un refugio para la fauna lacustre.
            </p>
            <div className={styles.list}>
                <div className={styles.itemContainer}>
                    <div className={styles.iconContainer}>
                        <KeyboardArrowRightIcon color='inherit' fontSize='inherit' />
                    </div>
                    <div className={styles.item}>6 kilómetros de senderos</div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.iconContainer}>
                        <KeyboardArrowRightIcon color='inherit' fontSize='inherit' />
                    </div>
                    <div className={styles.item}>60 hectáreas de esparcimiento</div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.iconContainer}>
                        <KeyboardArrowRightIcon color='inherit' fontSize='inherit' />
                    </div>
                    <div className={styles.item}>Muelles y decks sobre el río Luján</div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.iconContainer}>
                        <KeyboardArrowRightIcon color='inherit' fontSize='inherit' />
                    </div>
                    <div className={styles.item}>Centro de capacitación y actividades</div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.iconContainer}>
                        <KeyboardArrowRightIcon color='inherit' fontSize='inherit' />
                    </div>
                    <div className={styles.item}>Mirador y centro de sustentabilidad</div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.iconContainer}>
                        <KeyboardArrowRightIcon color='inherit' fontSize='inherit' />
                    </div>
                    <div className={styles.item}>Más de 120 especies de aves</div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.iconContainer}>
                        <KeyboardArrowRightIcon color='inherit' fontSize='inherit' />
                    </div>
                    <div className={styles.item}>Todo un lago para disfrutar</div>
                </div>
            </div>
            <p className={styles.texts}>
                Un imponente entorno acuático donde todos los barrios tienen acceso a un gran lago central de más 
                de 200 hectáreas. Es el lugar perfecto para una amplia gama de actividades recreativas y deportivas. 
                Vive la emoción del wakepark más extenso del país, con 240 metros de cable, 220 de riding, rampas y 
                8 módulos de saltos. O elige tu orilla preferida para una pausa y contemplación, disfrutando del agua 
                y los espacios verdes a tu propio ritmo.
            </p>
        </div>
    </div>
  )
}

export default Puertos
