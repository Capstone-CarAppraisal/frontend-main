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
    "Mazda 121": {
      Sedan: {
        "1300": ["1.3"],
      },
    },
    "Mazda 2": {
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
    "Mazda 3": {
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
    "Mazda 323": {
      Hatchback: {
        "1800": ["Astina EGI"],
      },
    },
    "Mazda BT-50": {
      Pickup: {
        "1900": [
          "Double Cab Hi-Racer SP",
          "Freestyle Cab C",
          "Freestyle Cab Hi-Racer C",
          "Freestyle Cab Hi-Racer S",
          "Standard Cab E",
        ],
        "2500": [
          "DOUBLE CAB Hi-Racer",
          "FREE STYLE CAB Hi-Racer",
          "FREE STYLE CAB V",
          "SINGLE S",
        ],
      },
    },
    "Mazda BT-50 Pro": {
      pickup: {
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
    "Mazda CX-3": {
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
    "Mazda CX-30": {
      SUV: {
        "2000": ["C", "Carbon Edition", "S", "SP"],
      },
    },
    "Mazda CX-5": {
      SUV: {
        "2000": ["C", "S", "SP"],
        "2200": ["XD", "XDL 4WD"],
        "2500": ["S", "Turbo SP 4WD"],
      },
    },
    "Mazda CX-7": {
      Wagon: {
        "2300": ["2.3T 4WD Wagon"],
      },
    },
    "Mazda CX-8": {
      SUV: {
        "2200": ["XDL Exclusive 4WD"],
        "2500": ["S", "SP"],
      },
    },
    "Mazda CX-9": {
      SUV: {
        "3700": ["4WD"],
      },
    },
    "Mazda Familia": {
      Pickup: {
        "800": ["800"],
        "1400": ["SINGLE STD"],
      },
    },
    "Mazda Fighter": {
      Pickup: {
        "2500": [
          "DOUBLE CAB 4WD",
          "DOUBLE CAB Mid",
          "FREE STYLE CAB Lux",
          "FREE STYLE CAB Mid",
          "SUPER SALOON Super Saloon STR Base",
        ],
        "2900": ["DOUBLE CAB"],
      },
    },
    "Mazda Magnum Thunder": {
      Pickup: {
        "2500": ["STD"],
      },
    },
    "Mazda MX-5": {
      Convertible: {
        "1500": ["1.5"],
        "1600": ["1.6"],
        "1800": ["1.8"],
        "2000": ["2.0", "30th Anniversary"],
      },
    },
    "Mazda RX-7": {
      Coupe: {
        "1300": ["1.3"],
      },
    },
    "Mazda RX-8": {
      Coupe: {
        "1300": ["1.3", "Roadster"],
      },
    },
    "Mazda Savanna": {
      Coupe: {
        "1100": ["1.1"],
      },
    },
  },
};

export const carYear = [
  1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002,
  2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
  2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
];
