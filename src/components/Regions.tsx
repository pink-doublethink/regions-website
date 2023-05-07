import { useState, FC } from "react";

interface Region {
  label: string;
  name: string;
}

interface Props {
  setCountries: React.Dispatch<React.SetStateAction<any[]>>;
}

const FilterRegions: FC<Props> = ({ setCountries }) => {
  const [isVisible, setVisibility] = useState<boolean>(false);
  const [activeRegion, setActiveRegion] = useState<string>("");

  const regions: Region[] = [
    {
      label: "All",
      name: "all",
    },
    {
      label: "Africa",
      name: "africa",
    },
    { label: "Americas", name: "americas" },
    {
      label: "Asia",
      name: "asia",
    },
    { label: "Europe", name: "europe" },
    { label: "Oceania", name: "oceania" },
  ];

  const fetchRegion = async (regionName: string): Promise<void> => {
    if (regionName === "all") {
      const url = `https://restcountries.com/v2/all`;
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
    } else {
      const url = `https://restcountries.com/v2/region/${regionName}`;
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
    }
  };

  const addDropdown = (): void => {
    setVisibility((prevState) => !prevState);
  };

  const removeDropdown = (): void => {
    setVisibility((prevState) => !prevState);
  };

  return (
    <section
      className={isVisible ? "active-regions select-region" : "select-region"}
      id="regions"
    >
      <summary onClick={addDropdown}>
        {activeRegion === "All" || !activeRegion
          ? "Filter by Region"
          : activeRegion}
      </summary>
      {isVisible ? (
        <div className="region-list">
          {regions.map((region) => (
            <li
              onClick={() => {
                fetchRegion(region.name);
                setActiveRegion(region.label);
                removeDropdown();
              }}
              value={region.name}
              key={region.label}
            >
              {region.label}
            </li>
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default FilterRegions;
