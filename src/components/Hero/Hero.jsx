/* eslint-disable react/no-unescaped-entities */
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}> 
                    Hi, I'm Dawson
                </h1>
                <p className={styles.description}>
                    I am a Software Engineer that has had multiple internship
                    experiences and extensive knowledge on multiple programming
                    technologies. Reach out to me if you would like to learn more!
                </p>
                <a className={styles.contactBtn} href="mailto:dawsonrudolph03@gmail.com">Contact Me</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" />
            <div className={styles.firstBlur}/>
            <div className={styles.secondBlur}/>
            <div className={styles.thirdBlur}/>
            <div className={styles.fourthBlur}/>
            <div className={styles.fifthBlur}/>
        </section>
    )
}