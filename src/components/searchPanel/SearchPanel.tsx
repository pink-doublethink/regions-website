import styles from "./SearchPanel.module.css";

const SearchPanel =()=>{
    return(
        <div className={styles.countryList__search}>

                <div className={styles.search__panel}>
                    <div className={`${styles.search__img} ${styles.search__search}`}>
                        <img src="/icons8-search.svg" alt="search icon" />
                    </div>
                    <div className={styles.search__inputBox}>
                        <input type="text" placeholder="Search Here"/>
                    </div>
                    <div className={`${styles.search__img} ${styles.search__close}`}>
                        <img src="/cancel.png" alt="search icon" />
                    </div>
                </div>

                <div className={styles.search__selecter}>
                    <select name="regions" id="region" required>
                        <option value="" hidden disabled selected>Выбрать</option>
                        <option value="Europe">Europe</option>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
                </div>
    );
}

export default SearchPanel;