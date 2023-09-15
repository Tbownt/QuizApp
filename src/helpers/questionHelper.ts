import { Country, CountryMap, Option } from "../interfaces/countries";

export const generateQuestionArray = (
  countryGroupArray: Array<Array<Country>>
): Option[] => {
  const questionGroup: Option[] = countryGroupArray.map((countryGroup) => {
    // select a random country from that group to use as the correct answer.
    const randomValidIndex = Math.floor(Math.random() * countryGroup.length);
    return {
      options: mapQuestionOptions(countryGroup, randomValidIndex),
      checkFor: Math.random() < 0.5 ? "capital" : "flag",
    };
  });

  return questionGroup;
};

const mapQuestionOptions = (
  countryGroup: Country[],
  correctCountryIndex: number
): CountryMap[] => {
  return countryGroup.map((item: CountryMap, index) => ({
    valid: correctCountryIndex === index ? true : false,
    countryName: item.countryName,
    capital: item.capital,
    flag: item.flag,
    flagAlt: item.flagAlt,
  }));
};
