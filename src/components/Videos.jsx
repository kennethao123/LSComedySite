import styles from "../styles/Videos.module.css";
import pic1 from '../assets/pic1.JPEG'
import pic2 from '../assets/pic2.JPEG'
import pic3 from '../assets/pic3.JPEG'

import video2 from '../assets/video2.gif'
import video3 from '../assets/video3.gif'


const Videos = () => {
    return (
        <section id='videos'>
            <div className={styles.videoDiv}>
                <img className={styles.video} src={pic1}></img>
                <img className={styles.video} src={pic1}></img>

                {/*<h2 className={styles.overlayText}>pic 1</h2>*/}
            </div>
            <div className={styles.videoDiv}>
                <img className={styles.video} src={pic2}></img>
                {/*<h2 className={styles.overlayText}>pic 2</h2>*/}

            </div>
            <div className={styles.videoDiv}>
                <img className={styles.video} src={pic3}></img>
                <img className={styles.video} src={pic3}></img>

                <img className={styles.video} src={pic3}></img>

                {/*<h2 className={styles.overlayText}>pic 3</h2>*/}

            </div>

        </section>
    )
}

export default Videos;