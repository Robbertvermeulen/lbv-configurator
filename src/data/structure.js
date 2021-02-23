const structure = [
  {
    id: 1,
    slug: "propulsion-system",
    title: "Propulsion system",
    parts: [
      {
        id: 1,
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
        id: 2,
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
    id: 2,
    title: "Sail",
    slug: "sail",
  },
  {
    id: 3,
    title: "Navigation & accessibility",
    slug: "navigation-accessibility",
  },
  {
    id: 4,
    title: "Deck & exterior",
    slug: "deck-exterior",
  },
];

export default structure;
