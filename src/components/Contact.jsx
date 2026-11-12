import styles from "../styles/Contact.module.css";
import instagram from "../assets/instagram.png";
import tiktok from "../assets/tik-tok.png";
const instagramUrl = 'https://www.instagram.com/yiyanyam/';
const tiktokUrl = 'https://www.tiktok.com/discover/yiyanyam';
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';



const Contact = () => {
    const form = useRef();
    const [emailStatus, setEmailStatus] = useState('');

    const newTab = (url) => {
        window.open(url, "_blank", 'noopener,noreferrer')
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_dxebw3q', 'template_h5nti28', form.current, {
                publicKey: 'h26G4dRCe-Bd1FBc1',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                    setEmailStatus('Contact email successfully sent!')

                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setEmailStatus('Contact form failed :(')
                },
            );
    }

    return (
        <section id='contact' className={styles.contact}>
            <div className={styles.contactDiv}>
                <h1>Get in touch</h1>

                {/*social media links*/}
                <div className={styles.card}>
                    <div className={styles.buttonsDiv}>
                        <h3>Social Media</h3>
                        <button onClick={ () => newTab(instagramUrl) }><img className={styles.icon} src={instagram} alt="ig"/></button>
                        <button onClick={ () => newTab(tiktokUrl) }><img className={styles.icon} src={tiktok} alt="tiktok"/></button>
                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail} className={styles.formDiv}>
                    <label htmlFor='name'>Name: <input id='name' type="text"/></label>
                    <label htmlFor='email'>Email: <input id='email' type="text"/></label>
                    <label className={styles.message} htmlFor='message'>Message: <textarea id='message'/></label>

                    <input type="submit" className={styles.submitButton} value="Send Email"/>
                </form>

                <h3>{emailStatus}</h3>


            </div>
        </section>
    )
}

export default Contact;