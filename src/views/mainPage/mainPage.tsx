import styles from './mainPage.module.css'

let MainPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={`title`}>
                    Share Address
                </div>
                <div className={`paper ${styles.card}`}>
                    <div className={styles.row}>
                        <div className={styles.col}>

                        </div>
                        <div className={styles.col}>

                        </div>
                    </div>
                    <div className={styles.row}>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default MainPage;

