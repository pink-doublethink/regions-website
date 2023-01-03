import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header'
import styles from '../styles/App.module.css'
import SearchPanel from '../components/searchPanel/SearchPanel';

const getData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Could not fetch ${url}, status: ${response.status}`);
  }
  return await response.json();
}

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData('https://restcountries.com/v3.1/all');
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, ['https://restcountries.com/v3.1/all']);

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.countryList}>
        <SearchPanel />
        <div className={styles.countryList__box}>
          <ul className={styles.countryList__items}>
            {data &&
              data.map(({ flags, common, population, region, capital }) => (
                <div className={styles.countryList__item}>
                  <img  src={flags.png} alt="dgdfg" width={400} height={400} className={styles.countryList__img}/>
                  <div className={styles.countryList__decript}>
                    <h3 className={styles.decr__title}>{common}</h3>
                    <div className={styles.decr__box}>
                      <span className={styles.decr__population}>
                        Population: <span className="decr__population-value">{population}</span>
                      </span>
                      <span className={styles.decr__region}>
                        Region: <span className="decr__region-value">{region}</span>
                      </span>
                      <span className={styles.decr__capital}>
                        Capital: <span className="decr__capital-value">{capital}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
                </ul>
            </div>
        </main>
    </div>
  )
}

export default App