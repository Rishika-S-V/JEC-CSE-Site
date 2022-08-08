import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { Footer, Header, Hero } from "../../components/presentation";

export default {
  title: "Presentational Components/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithLayout: ComponentStory<typeof Hero> = () => (
  <BrowserRouter>
    <div className="flex min-h-screen flex-col">
      <Header variant="HOME">
        <Hero />
      </Header>
      <Footer classes="mt-auto" />
    </div>
  </BrowserRouter>
);
