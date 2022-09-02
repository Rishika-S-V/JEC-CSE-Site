import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Footer, Header } from "../../components/presentation";

import { Gallery } from "../../pages";

export default {
  title: "Pages/Gallery",
  component: Gallery,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Gallery>;

const Template: ComponentStory<typeof Gallery> = (args) => (
  <BrowserRouter>
    <Gallery {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});

export const WithLayout = () => (
  <BrowserRouter>
    <div className="flex min-h-screen flex-col">
      <Header title="Infrastructure" />
      <Gallery />
      <Footer classes="mt-auto" />
    </div>
  </BrowserRouter>
);
