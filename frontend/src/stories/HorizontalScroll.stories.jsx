import React from "react";

import { HorizontalScroll } from "../components/container";

export default {
  title: "Container Components/HorizontalScroll",
  component: HorizontalScroll,
  argTypes: {
    numberOfChildren: { type: "number", default: 4 },
    width: { type: "number", default: 2 },
    height: { type: "number", default: 2 },
  },
};

const Template = ({ numberOfChildren, width, height, ...args }) => (
  <HorizontalScroll {...args}>
    {[...Array(numberOfChildren).keys()].map((n, i) => (
      <div
        key={i}
        style={{
          width: `${width}rem`,
          height: `${height}rem`,
          backgroundColor: "teal",
          display: "inline-flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {n + 1}
      </div>
    ))}
  </HorizontalScroll>
);

export const Default = Template.bind({});
Default.args = {};
