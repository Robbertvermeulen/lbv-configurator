const structure = [
  {
    id: "propulsionSystem",
    slug: "propulsion-system",
    title: "Propulsion system",
    parts: [
      {
        id: "motor",
        title: "Motor",
        type: "choice",

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate porta libero, vitae pretium nunc facilisi vel. Suspendisse bibendum, augue sed mollis rhoncus, ligula neque venenatis justo, et laoreet felis sapien malesuada justo.",
        options: [
          {
            id: 1,
            title: "Torqeedo Cruise 4.0",
            price: 12,
            info: "This is the extra info for the Torqeedo Cruise 4.0",
          },
          {
            id: 2,
            title: "Oceanvolt AX5 - Shaftdrive",
            price: 119,
          },
        ],
      },
      {
        id: "batteryPack",
        title: "Battery pack",
        type: "dropdown",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate porta libero, vitae pretium nunc facilisi vel. Suspendisse bibendum, augue sed mollis rhoncus, ligula neque venenatis justo, et laoreet felis sapien malesuada justo.",
        options: [
          {
            id: 1,
            title: "Standard battery pack (10kWh)",
            price: 132,
          },
          {
            id: 2,
            title: "Range extender pack (20kWh)",
            price: 119,
          },
          {
            id: 3,
            title: "Standard battery pack (19kWh)",
            price: 122,
          },
          {
            id: 4,
            title: "Range extender pack (38kWh)",
            price: 119,
          },
        ],
      },
      {
        id: "batteryCharger",
        title: "Battery wall-charger (230V)",
        type: "dropdown",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate porta libero, vitae pretium nunc facilisi vel. Suspendisse bibendum, augue sed mollis rhoncus, ligula neque venenatis justo, et laoreet felis sapien malesuada justo.",
        options: [
          {
            id: 1,
            title: "Standard charger (0-100% in 10 hours)",
            price: 110,
          },
          {
            id: 2,
            title: "Fast charger (0-100% in 2 hours)",
            price: 23.2,
          },
        ],
      },
    ],
  },
  {
    id: "sails",
    title: "Sails",
    slug: "sails",
    parts: [
      {
        id: "sails",
        title: "Sails",
        type: "choice",
        description: "",
        options: [
          {
            id: 1,
            title: "Standard",
            price: 55,
          },
          {
            id: 2,
            title: "Code 0",
            price: 3.22,
          },
        ],
      },
      {
        id: "lazyBag",
        title: "Lazy-bag",
        type: "dropdown",
        description: "",
        options: [
          {
            id: 1,
            title: "Lazy-bag",
            price: 48.5,
          },
          {
            id: 2,
            title: "No Lazy-bag",
            price: 99,
          },
        ],
      },
      {
        id: "shade",
        title: "Shade",
        type: "dropdown",
        description: "",
        options: [
          {
            id: 1,
            title: "No shade",
            price: 0,
          },
          {
            id: 2,
            title: "10m2 shade",
            price: 200,
          },
          {
            id: 3,
            title: "20m2 shade",
            price: 38,
          },
        ],
      },
    ],
  },
  {
    id: "navigationAccessibility",
    title: "Navigation & accessibility",
    slug: "navigation-accessibility",
  },
  {
    id: "deckExterior",
    title: "Deck & exterior",
    slug: "deck-exterior",
  },
];

export default structure;
