import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Footer, Header } from "../../components/presentation";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Presentational Components/Header",
  component: Header,
  argTypes: {
    variant: { control: { type: "select" } },
  },
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <BrowserRouter>
    <Header {...args}></Header>
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = { variant: "DEFAULT", title: "Page Title" };

export const Home = Template.bind({});
Home.args = { variant: "HOME" };

export const WithLayout: ComponentStory<typeof Header> = (args) => (
  <BrowserRouter>
    <div className="flex min-h-screen flex-col">
      <Header {...args}>
        <h1>Hi from Child 1</h1>
        <p>Hi from Child 2</p>
      </Header>
      <Footer classes="mt-auto" />
    </div>
  </BrowserRouter>
);
WithLayout.args = { variant: "DEFAULT", title: "Page Title" };
