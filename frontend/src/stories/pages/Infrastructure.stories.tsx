import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Footer, Header } from "../../components/presentation";
import axios from "axios";

import { Infrastructure } from "../../pages";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

export default {
  title: "Pages/Infrastructure",
  component: Infrastructure,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Infrastructure>;

const Template: ComponentStory<typeof Infrastructure> = (args) => (
  <BrowserRouter>
    <Infrastructure {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});

export const WithLayout = () => (
  <BrowserRouter>
    <div className="flex min-h-screen flex-col">
      <Header title="Infrastructure" />
      <Infrastructure />
      <Footer classes="mt-auto" />
    </div>
  </BrowserRouter>
);
