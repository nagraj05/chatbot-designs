const sources = [
  {
    sourceslist: [
      "APY",
      "Price Index",
      "Stock",
      "Trade",
      "Procurement",
      "Arrival",
      "Balance Sheets",
      "Other Indexes",
    ],
    subsources: {
      "APY": ["DCS", "GCES", "DOCA", "PMFBY"],
      "Price Index": ["DES", "GCES", "DOCA", "PMFBY"],
      "Stock": ["DCS", "GCEES", "DOCA", "PMFBY"],
      "Trade": ["DCS", "GCCES", "DOCA", "PMFBY"],
      "Procurement": ["DCSS", "GCES", "DOCA", "PMFBY"],
      "Arrival": ["DCS", "GC3ES", "DOCA", "PMFBY"],
      "Balance Sheets": ["DCSP", "GCES", "DOCA", "PMFBY"],
      "Other Indexes": ["DCSO", "GCES", "DOCA", "PMFBY"],
    },
  },
];

export default sources;