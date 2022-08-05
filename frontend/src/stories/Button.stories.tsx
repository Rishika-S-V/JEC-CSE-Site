import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Button } from "../components/presentation";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    text: "Button",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
