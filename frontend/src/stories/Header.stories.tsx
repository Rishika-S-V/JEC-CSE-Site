import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "../components/presentation";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Presentational Components/Header",
  component: Header,
  argTypes: {
    type: { control: { type: "select" } },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <BrowserRouter>
    <Header {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = { type: "DEFAULT" };

export const Home = Template.bind({});
Home.args = { type: "HOME" };
