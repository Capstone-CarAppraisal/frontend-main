interface Variant {
  [key: string]: string[]; // Engine size to variants mapping
}

interface CarType {
  [type: string]: Variant; // Car type (Sedan, Hatchback, etc.) to engine variants mapping
}

interface CarBrands {
  [brand: string]: CarModels; // Car model to types mapping
}
interface CarModels {
  [model: string]: CarType;
}

export const selectData: CarBrands = {
  Mazda: {
    "2": {
      Sedan: {
        "1300": [
          "C",
          "E",
          "High",
          "High Connect",
          "High Plus",
          "S",
          "S Leather",
          "SP",
          "Standard",
        ],
        "1500": [
          "Elegance Groove",
          "Elegance Limited Edition",
          "Elegance Maxx",
          "Elegance Spirit",
          "Groove",
          "Maxx Sports",
          "Spirit",
          "Spirit Sports",
          "XD",
          "XD High",
          "XD High Connect",
          "XD High Plus",
          "XDL",
        ],
      },
      Hatchback: {
        "1300": [
          "C Sports",
          "E Sports",
          "High Connect",
          "S Leather Sports",
          "S Sports",
          "SP Sports",
          "Sports 100th Anniversary Edition",
          "Sports High",
          "Sports High Connect",
          "Sports High Plus",
          "Sports Standard",
        ],
        "1500": [
          "Maxx Sports",
          "S",
          "Spirit",
          "Spirit Sports",
          "Sports Groove",
          "Sports Maxx",
          "Sports Maxx Sports",
          "Sports Spirit",
          "XD Sport High Plus L",
          "XD Sports",
          "XD Sports High",
          "XD Sports High Connect",
          "XD Sports High Plus",
        ],
      },
    },
    "3": {
      Sedan: {
        "1600": ["Groove", "S", "S Plus", "Spirit", "V"],
        "2000": [
          "100th Anniversary Edition",
          "C",
          "E",
          "E Sports",
          "Maxx",
          "R",
          "Racing Series Limited Edition",
          "S",
          "SP",
        ],
      },
      Hatchback: {
        "1600": [
          "Life",
          "S Plus",
          "Spirit",
          "Spirit Sports",
          "Spirit Sports Plus",
          "V",
        ],
        "2000": [
          "C Sports",
          "E Sports",
          "Maxx Sports",
          "R Sports",
          "Racing Serie Limited Edition",
          "S Sports",
          "SP Sports",
          "Sports 100th Anniversary Edition",
        ],
      },
    },
    "BT-50 PRO": {
      Pickup: {
        "2200": [
          "DOUBLE CAB",
          "DOUBLE CAB ECLIPSE",
          "DOUBLE CAB Hi-Racer",
          "DOUBLE CAB Hi-Racer Eclipse",
          "DOUBLE CAB Hi-Racer PROSERIES",
          "DOUBLE CAB S",
          "DOUBLE CAB THUNDER Hi-Racer",
          "DOUBLE CAB V",
          "FREE STYLE CAB Hi-Racer",
          "FREE STYLE CAB Hi-Racer Eclipse",
          "FREE STYLE CAB Hi-Racer mt",
          "FREE STYLE CAB Hi-Racer PROSERIES",
          "FREE STYLE CAB S",
          "FREE STYLE CAB THUNDER Hi-Racer",
          "FREE STYLE CAB V",
        ],
        "2500": ["FREE STYLE CAB Hi-Racer", "FREE STYLE CAB S"],
        "3200": ["DOUBLE CAB R 4WD"],
      },
    },
    "CX-3": {
      SUV: {
        "1500": ["XDL"],
        "2000": [
          "Base",
          "Base Plus",
          "C",
          "Comfort",
          "E",
          "Proactive",
          "S",
          "SP",
        ],
      },
    },
    "CX-30": {
      SUV: {
        "2000": ["C", "Carbon Edition", "S", "SP"],
      },
    },
    "CX-5": {
      SUV: {
        "2000": ["C", "S", "SP"],
        "2200": ["XD", "XDL 4WD"],
        "2500": ["S", "Turbo SP 4WD"],
      },
    },
    "CX-8": {
      SUV: {
        "2200": ["XDL Exclusive 4WD"],
        "2500": ["S", "SP"],
      },
    },
  },
};

export function findCarType(
  brand: string,
  model: string,
  submodel: string
): string {
  const car = selectData[brand]?.[model];
  for (const type in car) {
    for (const engine in car[type]) {
      if (car[type][engine].includes(submodel)) {
        return type;
      }
    }
  }
  return "Error";
}

export const carYear = [
  1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002,
  2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
  2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
];

export const color = [
  { value: "black", option: "สีดำ" },
  { value: "gray", option: "สีเทา" },
  { value: "brown", option: "สีน้ำตาล" },
  { value: "red", option: "สีแดง" },
  { value: "green", option: "สีเขียว" },
  { value: "blue", option: "สีฟ้า" },
  { value: "sky", option: "สีฟ้าอ่อน" },
  { value: "white", option: "สีขาว" },
];

export const district = [
  {
    value: "N",
    option: "ภาคเหนือ",
  },
  {
    value: "NE",
    option: "ภาคตะวันออกเฉียงเหนือ",
  },
  {
    value: "E",
    option: "ภาคตะวันออก",
  },
  {
    value: "W",
    option: "ภาคตะวันตก",
  },
  {
    value: "S",
    option: "ภาคใต้",
  },
]; 

export const colorTranslations: Record<string, string> = {
  black: "สีดำ",
  gray: "สีเทา",
  brown: "สีน้ำตาล",
  red: "สีแดง",
  green: "สีเขียว",
  blue: "สีฟ้า",
  sky: "สีฟ้าอ่อน",
  white: "สีขาว",
};

export function translateColorToThai(colorName: string): string {
  return colorTranslations[colorName] || "Unknown color";
}

export function convertTransmission(trans: any) {
  if (trans == "AT") return "อัตโนมัติ";
  if (trans == "MT") return "ธรรมดา";
}
