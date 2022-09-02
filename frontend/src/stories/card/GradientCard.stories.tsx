import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Component } from "react";
import GradientCard from "../../components/presentation/GradientCard";
export default {
  title: "cards/GradientCard",
  component: GradientCard,
  args: {
    image:
      "https://images.pexels.com/photos/13377318/pexels-photo-13377318.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    hoverImage:
      "https://images.pexels.com/photos/13339565/pexels-photo-13339565.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    width: "w-32",
  },
} as ComponentMeta<typeof GradientCard>;

const Template: ComponentStory<typeof GradientCard> = (args) => (
  <GradientCard {...args} />
);
export const Default = Template.bind({});
