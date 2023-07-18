export interface Country {
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: {
    svg: string;
    png: string;
  };
  index: number;
}
