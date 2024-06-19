import styles from './TextNode.module.css';

function TextNode() {
    return (<>
        <div className={styles.wrapper}>
            <div className={`${styles.textNode} ${styles.floatright}`}>
                <p>Hey, good morning! How was your weekend?</p>
                <span className={`${styles.floatright}`}>15:40</span>
            </div>
        </div>
        <div className={styles.wrapper}>
            <div className={`${styles.textNode} ${styles.floatleft}`}>
                <p>Hey, good morning! How was your weekend?</p>
                <span className={`${styles.floatleft}`}>15:40</span>
            </div>
        </div>
        <div className={styles.wrapper}>
            <div className={`${styles.textNode} ${styles.floatright}`}>
                <p>Hey, good morning! How was your weekend?</p>
                <span className={`${styles.floatright}`}>15:40</span>
            </div>
        </div>
    </>);
}

export default TextNode;