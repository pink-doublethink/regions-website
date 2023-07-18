import { FaSearch } from 'react-icons/fa';
import Regions from './Regions';
import { Dispatch, SetStateAction } from 'react';

type SearchProps = {
  searchInput: string;
  setCountries: Dispatch<SetStateAction<[]>>;
  searchCountries: (searchInput: string) => void;
};

const Search = (props: SearchProps) => {
  return (
    <article className="search-section">
      <section className="input-block">
        <FaSearch className="search-icon" />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          value={props.searchInput}
          onChange={(e) => props.searchCountries(e.target.value)}
        />
      </section>
      <Regions setCountries={props.setCountries} />
    </article>
  );
};

export default Search;
