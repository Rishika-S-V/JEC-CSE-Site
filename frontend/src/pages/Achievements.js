import "./Achievements.css";
import AchievementCard from "../components/AchievementCards";
import Customheader from "../components/Dynamic_header/Customheader";

const Achievements = () => {
  return (
    <div>
      <Customheader path="" header="Student Achievements"></Customheader>
      <AchievementCard />
    </div>
  );
};

export default Achievements;
