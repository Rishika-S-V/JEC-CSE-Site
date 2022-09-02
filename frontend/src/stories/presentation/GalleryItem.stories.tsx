import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GalleryItem } from "../../components/presentation";

export default {
  title: "Presentational Components/Gallery Item",
  component: GalleryItem,
} as ComponentMeta<typeof GalleryItem>;

const Template: ComponentStory<typeof GalleryItem> = (args) => (
  <GalleryItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Events",
  images: [
    "https://unsplash.it/512",
    "https://unsplash.it/512",
    "https://unsplash.it/512",
    "https://unsplash.it/512",
    "https://unsplash.it/512",
    "https://unsplash.it/512",
  ],
};
