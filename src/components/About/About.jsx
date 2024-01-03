/* eslint-disable react/no-unescaped-entities */
import { getImageUrl } from "../../utils"
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="Me"/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>
                                Frontend Developer
                            </h3>
                            <p>
                                I'm a frontend developer with experience building responsive
                                and optimized websites.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>
                                Backend Developer
                            </h3>
                            <p>
                                I have experience developing fast and optimized back-end systems
                                and APIs.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>
                                UI Designer
                            </h3>
                            <p>
                                I have designed multiple landing pages as well as highly functional and visually pleasing user interfaces.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            
        </section>
    )
}