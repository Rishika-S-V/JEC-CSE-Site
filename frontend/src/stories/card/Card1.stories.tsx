import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Card1 } from "../../components/presentation";

export default {
  title: "Cards/Card1",
  component: Card1,
  args: {
    text: "Card 1",
    imgUrl: "https://unsplash.it/1080",
  },
} as ComponentMeta<typeof Card1>;

const Template: ComponentStory<typeof Card1> = (args) => <Card1 {...args} />;

export const Story = Template.bind({});
Story.args = {};
