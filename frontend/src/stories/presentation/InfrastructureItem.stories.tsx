import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InfrastructureItem } from "../../components/presentation";

export default {
  title: "Presentational Components/Infrastructure Item",
  component: InfrastructureItem,
} as ComponentMeta<typeof InfrastructureItem>;

const Template: ComponentStory<typeof InfrastructureItem> = (args) => (
  <InfrastructureItem {...args} />
);

export const SeminarHall = Template.bind({});
SeminarHall.args = {
  id: 4,
  title: "Seminar Hall",
  description:
    "Lorem ipsum dolor sit amet. Rem cumque atque nam atque tempora est obcaecati temporibus ex sunt placeat? Et molestiae doloremque qui provident fuga et perferendis minima. Est veritatis repellat ut doloremque rerum quo maiores dignissimos eos magnam enim. Est blanditiis culpa aut exercitationem ipsa sit voluptas aspernatur ad perspiciatis optio? Est nesciunt iste a iusto tempore a quia cumque et consequuntur placeat aut doloremque corrupti. Et internos sunt sed ipsa enim et dolore eius sed error quia et molestiae animi est nulla sapiente qui rerum consequatur? Cum esse iure est distinctio quos et eligendi quos.",
  images: [
    "https://clg-site.herokuapp.com/media/infrastructure_images/1_oqsFIoi.jpg",
    "https://clg-site.herokuapp.com/media/infrastructure_images/2_KeMp3op.jpg",
    "https://clg-site.herokuapp.com/media/infrastructure_images/3_YEb1ySc.jpg",
    "https://clg-site.herokuapp.com/media/infrastructure_images/4.jpg",
    "https://clg-site.herokuapp.com/media/infrastructure_images/5.jpg",
  ],
};

export const FossLab = Template.bind({});
FossLab.args = {
  id: 5,
  title: "Foss Lab",
  description:
    "Lorem ipsum dolor sit amet. Rem cumque atque nam atque tempora est obcaecati temporibus ex sunt placeat? Et molestiae doloremque qui provident fuga et perferendis minima. Est veritatis repellat ut doloremque rerum quo maiores dignissimos eos magnam enim. Est blanditiis culpa aut exercitationem ipsa sit voluptas aspernatur ad perspiciatis optio? Est nesciunt iste a iusto tempore a quia cumque et consequuntur placeat aut doloremque corrupti. Et internos sunt sed ipsa enim et dolore eius sed error quia et molestiae animi est nulla sapiente qui rerum consequatur? Cum esse iure est distinctio quos et eligendi quos.",
  images: [
    "https://clg-site.herokuapp.com/media/infrastructure_images/Lab1.jpg",
    "https://clg-site.herokuapp.com/media/infrastructure_images/Lab2.jpg",
    "https://clg-site.herokuapp.com/media/infrastructure_images/Lab3.jpg",
    "https://clg-site.herokuapp.com/media/infrastructure_images/Lab4.jpg",
    "https://clg-site.herokuapp.com/media/infrastructure_images/Lab5.jpg",
  ],
};

export const Library = Template.bind({});
Library.args = {
  id: 6,
  title: "Library",
  description:
    "Lorem ipsum dolor sit amet. Rem cumque atque nam atque tempora est obcaecati temporibus ex sunt placeat? Et molestiae doloremque qui provident fuga et perferendis minima. Est veritatis repellat ut doloremque rerum quo maiores dignissimos eos magnam enim. Est blanditiis culpa aut exercitationem ipsa sit voluptas aspernatur ad perspiciatis optio? Est nesciunt iste a iusto tempore a quia cumque et consequuntur placeat aut doloremque corrupti. Et internos sunt sed ipsa enim et dolore eius sed error quia et molestiae animi est nulla sapiente qui rerum consequatur? Cum esse iure est distinctio quos et eligendi quos.",
  images: [
    "https://clg-site.herokuapp.com/media/infrastructure_images/Library1.jpg",
    "https://clg-site.herokuapp.com/media/infrastructure_images/Library2.jpg",
    "https://clg-site.herokuapp.com/media/infrastructure_images/Library3.jpg",
    "https://clg-site.herokuapp.com/media/infrastructure_images/Library4.jpg",
    "https://clg-site.herokuapp.com/media/infrastructure_images/Library5.jpg",
  ],
};

export const Canteen = Template.bind({});
Canteen.args = {
  id: 7,
  title: "Canteen",
  description:
    "Lorem ipsum dolor sit amet. Rem cumque atque nam atque tempora est obcaecati temporibus ex sunt placeat? Et molestiae doloremque qui provident fuga et perferendis minima. Est veritatis repellat ut doloremque rerum quo maiores dignissimos eos magnam enim. Est blanditiis culpa aut exercitationem ipsa sit voluptas aspernatur ad perspiciatis optio? Est nesciunt iste a iusto tempore a quia cumque et consequuntur placeat aut doloremque corrupti. Et internos sunt sed ipsa enim et dolore eius sed error quia et molestiae animi est nulla sapiente qui rerum consequatur? Cum esse iure est distinctio quos et eligendi quos.",
  images: [
    "https://clg-site.herokuapp.com/media/infrastructure_images/Canteen1.jpg",
    "https://clg-site.herokuapp.com/media/infrastructure_images/Canteen2.jpg",
    "https://clg-site.herokuapp.com/media/infrastructure_images/Canteen3.jpg",
    "https://clg-site.herokuapp.com/media/infrastructure_images/Canteen4.jpg",
    "https://clg-site.herokuapp.com/media/infrastructure_images/Canteen5.jpg",
  ],
};
export const Classroom = Template.bind({});
Classroom.args = {
  id: 8,
  title: "Classroom",
  description:
    "Lorem ipsum dolor sit amet. Rem cumque atque nam atque tempora est obcaecati temporibus ex sunt placeat? Et molestiae doloremque qui provident fuga et perferendis minima. Est veritatis repellat ut doloremque rerum quo maiores dignissimos eos magnam enim. Est blanditiis culpa aut exercitationem ipsa sit voluptas aspernatur ad perspiciatis optio? Est nesciunt iste a iusto tempore a quia cumque et consequuntur placeat aut doloremque corrupti. Et internos sunt sed ipsa enim et dolore eius sed error quia et molestiae animi est nulla sapiente qui rerum consequatur? Cum esse iure est distinctio quos et eligendi quos.",
  images: [
    "https://clg-site.herokuapp.com/media/infrastructure_images/Classroom1.jpg",
    "https://clg-site.herokuapp.com/media/infrastructure_images/Classroom2.jpg",
    "https://clg-site.herokuapp.com/media/infrastructure_images/Classroom3.jpg",
    "https://clg-site.herokuapp.com/media/infrastructure_images/Classroom4.jpg",
    "https://clg-site.herokuapp.com/media/infrastructure_images/Classroom5.jpg",
  ],
};
export const Ambience = Template.bind({});
Ambience.args = {
  id: 9,
  title: "Ambience",
  description:
    "Lorem ipsum dolor sit amet. Rem cumque atque nam atque tempora est obcaecati temporibus ex sunt placeat? Et molestiae doloremque qui provident fuga et perferendis minima. Est veritatis repellat ut doloremque rerum quo maiores dignissimos eos magnam enim. Est blanditiis culpa aut exercitationem ipsa sit voluptas aspernatur ad perspiciatis optio? Est nesciunt iste a iusto tempore a quia cumque et consequuntur placeat aut doloremque corrupti. Et internos sunt sed ipsa enim et dolore eius sed error quia et molestiae animi est nulla sapiente qui rerum consequatur? Cum esse iure est distinctio quos et eligendi quos.",
  images: [
    "https://clg-site.herokuapp.com/media/infrastructure_images/ambience1.png",
    "https://clg-site.herokuapp.com/media/infrastructure_images/ambience2.png",
    "https://clg-site.herokuapp.com/media/infrastructure_images/ambience3.png",
    "https://clg-site.herokuapp.com/media/infrastructure_images/ambience4.png",
    "https://clg-site.herokuapp.com/media/infrastructure_images/ambience5.png",
  ],
};
