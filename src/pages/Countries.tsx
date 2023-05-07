import { useState, useEffect } from "react";
import AllCountries from "../components/State";
import FilteredCountries from "../components/FilteredState";
import Search from "../components/Search";
import { Country } from "../components/types";

export default function Countries(): JSX.Element {
  const url = `https://restcountries.com/v2/all`;
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [foundFilter, setFoundFilter] = useState<boolean>(true);
  const [filtered, setFiltered] = useState<Country[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  const fetchCountries = async (items?: void): Promise<void> => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let mounted = true;
    fetchCountries().then((items: void) => {
      if (mounted) {
        fetchCountries(items);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const searchCountries = (searchValue: string): void => {
    setSearchInput(searchValue);
    if (searchValue) {
      setFiltered(
        countries.filter((country) =>
          Object.values(country)
            .join("")
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        )
      );
      setFoundFilter(true);
      if (filtered.length <= 0) {
        setFoundFilter(false);
      }
    } else {
      setFiltered(countries);
    }
  };

  return (
    <main>
      {isLoading ? (
        <h2 className="searching">Searching...</h2>
      ) : (
        <>
          <Search
            searchCountries={searchCountries}
            searchInput={searchInput}
            setCountries={setCountries}
          />
          {searchInput.length > 0 ? (
            <FilteredCountries filtered={filtered} foundFilter={foundFilter} />
          ) : (
            <AllCountries countries={countries} />
          )}
        </>
      )}
    </main>
  );
}
