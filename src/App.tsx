import BentoCell from "./components/BentoCell";
import BentoGrid from "./components/BentoGrid";
import SectionAudienceGrowth from "./components/sections/SectionAudienceGrowth";
import SectionCreatePost from "./components/sections/SectionCreatePost";
import SectionGrowFollowers from "./components/sections/SectionGrowFollowers";
import SectionMaintainConsistent from "./components/sections/SectionMaintainConsistent";
import SectionManageMultiple from "./components/sections/SectionManageMultiple";
import SectionSchedule from "./components/sections/SectionSchedule";
import SectionSocialMedia from "./components/sections/SectionSocialMedia";
import SectionWriteYourContent from "./components/sections/SectionWriteYourContent";

export default function App() {
  return (
    <main data-text-preset="4">
      <BentoGrid>
        <BentoCell cellColor="purple-pale">
          <SectionSocialMedia />
        </BentoCell>

        <BentoCell cellColor="white">
          <SectionManageMultiple />
        </BentoCell>

        <BentoCell cellColor="yellow">
          <SectionMaintainConsistent />
        </BentoCell>

        <BentoCell cellColor="purple-pale">
          <SectionSchedule />
        </BentoCell>

        <BentoCell cellColor="purple">
          <SectionGrowFollowers />
        </BentoCell>

        <BentoCell cellColor="white">
          <SectionAudienceGrowth />
        </BentoCell>

        <BentoCell cellColor="yellow-pale">
          <SectionCreatePost />
        </BentoCell>

        <BentoCell cellColor="yellow">
          <SectionWriteYourContent />
        </BentoCell>
      </BentoGrid>
    </main>
  );
}
