// Generated by https://quicktype.io

export interface CountryApi {
  flags: Flags;
  name: Name;
  capital: string[];
}

export interface Country {
  flag: string;
  flagAlt: string;
  countryName: string;
  capital: string;
}

export interface CountryMap extends Country {
  valid: boolean;
}

export interface Option {
  options: CountryMap[];
  checkFor: string;
}

export interface ContextState {
  completed: boolean;
  currentQuestion: number;
  correctAnswers: number;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: NativeName };
}

export interface NativeName {
  official: string;
  common: string;
}
