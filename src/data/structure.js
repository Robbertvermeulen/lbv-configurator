const structure = [
  {
    id: "propulsionSystem",
    slug: "propulsion-system",
    title: "Propulsion system",
    parts: [
      {
        id: "propulsion",
        title: "Propulsion",
        type: "choice",

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate porta libero, vitae pretium nunc facilisi vel. Suspendisse bibendum, augue sed mollis rhoncus, ligula neque venenatis justo, et laoreet felis sapien malesuada justo.",
        options: [
          {
            id: 1,
            title: "Option 1",
            value: 12,
          },
          {
            id: 2,
            title: "Option 2",
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
            title: "Option 1",
            value: 12,
          },
          {
            id: 2,
            title: "Option 2",
            value: 119,
          },
        ],
      },
      {
        id: 3,
        title: "Battery charger",
      },
    ],
  },
  {
    id: "sail",
    title: "Sail",
    slug: "sail",
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
