import image from "/icons/favicon.png"

const sources = [
  {
    sourceslist: [
      {
        text: "Area, Production, Yield  (APY)",
        value: "APY",
        tooltip:"APY",
        image:image,
      },
      {
        text: "Prices",
        value: "Prices",
        tooltip:"MSP, Retail, Wholesale Prices",
        image:image,
      },
      {
        text:"Trade",
        value:"Trade",
        tooltip:"Export & Import",
        image:image,
      },
      {
        text:"Procurement",
        value:"Procurement",
        tooltip:"Procurement",
        image:image,
      },
      {
        text:"Market Arrivals",
        value:"Arrival",
        tooltip:"Market Arrivals",
        image:image,
      },
      {
        text:"UPAg",
        value:"UPAg",
        tooltip:"UPAg",
        image:image,
      },
    ],
    subsources: {
      "APY": ["DCS", "GCES", "DOCA", "PMFBY"],
      "Prices": ["DES", "GCES", "DOCA", "PMFBY"],
      "Trade": ["DCS", "GCCES", "DOCA", "PMFBY"],
      "Procurement": ["DCSS", "GCES", "DOCA", "PMFBY"],
      "Arrival": ["DCS", "GC3ES", "DOCA", "PMFBY"],
      "UPAg": ["DCSP", "GCES", "DOCA", "PMFBY"],
    },
  },
];

export default sources;