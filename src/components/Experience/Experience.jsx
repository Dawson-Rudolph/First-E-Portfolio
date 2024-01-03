import skills from '../../Data/Skills.json';
import history from '../../Data/History.json'
import {getImageUrl} from '../../utils'
import styles from './Experience.module.css'


export const Experience = () => {
    return (
        <section className={styles.container} id='experience'>
            <div>
                <h2 className={styles.title}>
                    Experience
                </h2>
                <div className={styles.content}>
                    <div className={styles.skills}>{
                        skills.map((skill, id) => {
                            return <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        })
                    }</div>
                    <ul className={styles.history}>
                        {
                            history.map((historyItem, id) => {
                                return <li key={id} className={styles.historyItem}>
                                    <img className={styles.logo} src = {getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`}/>
                                    <div className={styles.historyItemDetails}>
                                        <h2>{`${historyItem.organisation}`}</h2>
                                        <h3>{`${historyItem.role}`}</h3>
                                        <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                        <ul>{historyItem.experiences.map((experience, id) => {
                                            return <li className={styles.item} key={id}>{experience}</li>
                                        })}</ul>
                                        <a className={styles.description} href='https://www.linkedin.com/in/dawson-rudolph-01a514262/details/experience/'>Description</a>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}