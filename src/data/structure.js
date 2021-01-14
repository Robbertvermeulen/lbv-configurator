const structure = [
  {
    id: 1,
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
            label: "Option 1",
            value: 12,
          },
          {
            id: 2,
            label: "Option 2",
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
            label: "Option 1",
            value: 12,
          },
          {
            id: 2,
            label: "Option 2",
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
  },
  {
    id: 3,
    title: "Navigation & accessibility",
  },
  {
    id: 4,
    title: "Deck & exterior",
  },
];

export default structure;
