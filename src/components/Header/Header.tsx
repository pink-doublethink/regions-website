import styles from "./Header.module.css";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__title}>
                <h1>Where in the world?</h1>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div className={styles.header__toggleMod}>
                <fieldset className={styles.switcher}>
                    <legend className={styles.switcher__leg}>Scheme</legend>
                    <input type="radio" className={`${styles.switcher__radio} ${styles.switcher__radio_light}`} name="color-scheme" value="light" aria-label="Светлая" />
                    <input type="radio" className={`${styles.switcher__radio} ${styles.switcher__radio_auto}`} name="color-scheme" value="auto" aria-label="Системная" checked />
                    <input type="radio" className={`${styles.switcher__radio} ${styles.switcher__radio_dark}`} name="color-scheme" value="dark" aria-label="Темная" />
                    <div className={styles.switcher__status}></div>
                </fieldset>
            </div>
        </header>
    );
};
  
  export default Header;