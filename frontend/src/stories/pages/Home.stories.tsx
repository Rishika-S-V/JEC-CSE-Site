import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Footer, Header } from "../../components/presentation";

import { Home } from "../../pages";

export default {
  title: "Pages/Home",
  component: Home,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => (
  <BrowserRouter>
    <Home {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});

export const WithLayout = () => (
  <BrowserRouter>
    <div className="flex min-h-screen flex-col">
      <Header variant="HOME" />
      <Home />
      <Footer classes="mt-auto" />
    </div>
  </BrowserRouter>
);
