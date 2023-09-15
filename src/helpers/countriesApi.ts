import { Country, CountryApi } from "../interfaces/countries";

// Retorna un array de 10 grupos de paises (cada grupo con 4 paises), listos para ser convertidos a preguntas.
export const getCountryGroupArray = (
  apiResponse: CountryApi[]
): Array<Country[]> => {
  if (!apiResponse) return [];

  const foundGroups: Array<Country[]> = [];

  for (let index = 1; index <= 10; index++) {
    const countryGroup: Country[] = getRandomCountryGroup(apiResponse);
    foundGroups.push(countryGroup);
  }

  return foundGroups;
};

// Retorna un grupo de 4 paises random.
const getRandomCountryGroup = (array: CountryApi[]): Country[] => {
  // Clonar el array original para no modificarlo directamente
  const shuffled = array.slice() as [];

  shuffleArray(shuffled); // Barajar el array

  const foundCountries = [];

  for (let index = 1; index <= 4; index++) {
    const randomCountry = array[Math.floor(Math.random() * array.length)];
    foundCountries.push(mapCountry(randomCountry));
  }
  return foundCountries;
};

// Estructura los paises de una forma más manejable.
const mapCountry = (countryApi: CountryApi): Country => {
  return {
    flag: countryApi.flags.svg || countryApi.flags.svg || "",
    flagAlt: countryApi.flags.alt || "",
    countryName: countryApi.name.common || "",
    capital: countryApi.capital[0] || "Sin Capital",
  };
};

// Función para barajar (shuffle) el array utilizando el método Fisher-Yates
const shuffleArray = (arr: []) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Intercambiar elementos
  }
};
