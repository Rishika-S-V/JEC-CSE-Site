import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "../components/presentation";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Presentational Components/Header",
  component: Header,
  argTypes: {
    variant: { control: { type: "select" } },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <BrowserRouter>
    <Header {...args}>
      <h1>Hi from Child 1</h1>
      <p>Hi from Child 2</p>
    </Header>
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = { variant: "DEFAULT", title: "Page Title" };

export const Home = Template.bind({});
Home.args = { variant: "HOME" };
