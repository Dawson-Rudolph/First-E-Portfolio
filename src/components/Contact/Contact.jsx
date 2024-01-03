import {getImageUrl} from '../../utils'
import styles from './Contact.module.css'

export const Contact = () => {
    return (
        <footer id='contact' className={styles.container}>
            <div className={styles.text}>
                <h2>
                    Contact Information
                </h2>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"/>
                    <a href='mailto:Dawsonrudolph03@gmail.com'>Dawsonrudolph03@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon"/>
                    <a href='https://www.linkedin.com/in/dawson-rudolph-01a514262/'>LinkedIn</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon"/>
                    <a href='https://github.com/Dawson-Rudolph'>GitHub</a>
                </li>
            </ul>
        </footer>
    )
}