import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { Footer } from "../../components/presentation";

export default {
  title: "Presentational Components/Footer",
  component: Footer,
  args: {
    text: "Footer",
  },
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => (
  <BrowserRouter>
    <Footer />
  </BrowserRouter>
);

export const Default = Template.bind({});
