import styles from "../styles/Contact.module.css";
import instagram from "../assets/instagram.png";
const instagramUrl = 'https://www.instagram.com/yiyanyam/';


const Contact = () => {

    const newTab = (url) => {
        window.open(url, "_blank", 'noopener,noreferrer')
    }

    return (
        <section id='contact' className={styles.contact}>
            <div className={styles.contactDiv}>
                <h1>Get in touch</h1>

                {/*social media links*/}
                <div className={styles.card}>
                    <div className={styles.buttonsDiv}>
                        <h3>Social Media</h3>
                        <button onClick={ () => newTab(instagramUrl) }><img className={styles.icon} src={instagram} alt=""/></button>
                    </div>
                </div>

                <form className={styles.formDiv}>
                    <label htmlFor='name'>Name: <input id='name' type="text"/></label>


                    <label htmlFor='email'>Email: <input id='email' type="text"/></label>


                    <label className={styles.message} htmlFor='message'>Message: <textarea id='message'/></label>



                    <button>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;