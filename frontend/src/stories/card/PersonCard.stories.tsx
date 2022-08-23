import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { PersonCard } from "../../components/presentation";

export default {
  title: "Cards/PersonCard",
  component: PersonCard,
  args: {
    text: "Card 1",
    imgUrl: "https://unsplash.it/1080",
  },
} as ComponentMeta<typeof PersonCard>;

const Template: ComponentStory<typeof PersonCard> = (args) => (
  <PersonCard {...args} />
);

export const Default = Template.bind({});
Default.args = {};
