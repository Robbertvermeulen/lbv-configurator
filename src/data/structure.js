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
            value: 12,
          },
          {
            id: 2,
            title: "Oceanvolt AX5 - Shaftdrive",
            value: 119,
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
            value: 12,
          },
          {
            id: 2,
            title: "Range extender pack (20kWh)",
            value: 119,
          },
          {
            id: 1,
            title: "Standard battery pack (19kWh)",
            value: 12,
          },
          {
            id: 2,
            title: "Range extender pack (38kWh)",
            value: 119,
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
            value: 0,
          },
          {
            id: 2,
            title: "Fast charger (0-100% in 2 hours)",
            value: 0,
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
            value: 0,
          },
          {
            id: 2,
            title: "Code 0",
            value: 0,
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
            value: 0,
          },
          {
            id: 2,
            title: "No Lazy-bag",
            value: 0,
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
            value: 0,
          },
          {
            id: 2,
            title: "10m2 shade",
            value: 0,
          },
          {
            id: 3,
            title: "20m2 shade",
            value: 0,
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
