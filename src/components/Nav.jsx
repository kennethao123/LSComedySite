import { Link } from "react-router";
import styles from "../styles/Nav.module.css"
import { useContext } from "react";


const Nav = () => {

    const jump = (e , id) => {
        e.preventDefault();

        const target = document.getElementById(id);

        if (!target) return;

        //Update URL hash
        window.history.pushState(null, '', `/#${id}`);


        document.getElementById(`${id}`)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    return (
        <div className={styles.navBar}>
            <a id={styles.yourName} href="/#">Lillian Sam</a>
            <div className={styles.linksDiv}>
                <a href="/#dates" onClick={(e) => jump(e, 'dates')}>Dates</a>
                <a href="/#videos" onClick={(e) => jump(e, 'videos')}>Videos</a>
                <a href="/#contact" onClick={(e) => jump(e, 'contact')}>Contact</a>
            </div>
        </div>
    )
}

export default Nav;