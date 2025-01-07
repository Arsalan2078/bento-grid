import imgAiContent from "/images/illustration-ai-content.webp";
import imgAudienceGrowth from "/images/illustration-audience-growth.webp";
import imgConsistentSchedule from "/images/illustration-consistent-schedule.webp";
import imgCreatePost from "/images/illustration-create-post.webp";
import imgFiveStars from "/images/illustration-five-stars.webp";
import imgGrowFollowers from "/images/illustration-grow-followers.webp";
import imgMultiplePlatforms from "/images/illustration-multiple-platforms.webp";
import imgSchedulePosts from "/images/illustration-schedule-posts.webp";
import "./App.css";
import BentoGrid from "./components/BentoGrid";
import BentoCell from "./components/BentoCell";

function App() {
  return (
    <BentoGrid>
      <BentoCell cellName="five-stars" cellColor="purple">
        <h1>
          Social Media <span className="highlight">10x</span> <em>Faster</em>{" "}
          with AI
        </h1>
        <img src={imgFiveStars} alt="" />
        <p>Over 4,000 5-star reviews</p>
      </BentoCell>

      <BentoCell cellName="multiple-platforms" cellColor="white">
        <img src={imgMultiplePlatforms} alt="" />
        <h3>Manage multiple accounts and platforms.</h3>
      </BentoCell>

      <BentoCell cellName="consistent-schedule" cellColor="yellow">
        <h3>Maintain a consistent posting schedule.</h3>
        <img src={imgConsistentSchedule} alt="" />
      </BentoCell>

      <BentoCell cellName="schedule-post" cellColor="purple-pale">
        <h3>Schedule to social media.</h3>
        <img src={imgSchedulePosts} alt="" />
        <p>
          Optimize post timings to publish content at the perfect time for your
          audience.
        </p>
      </BentoCell>

      <BentoCell cellName="grow-followers" cellColor="purple">
        <img src={imgGrowFollowers} alt="" />
        <h2>Grow followers with non-stop content.</h2>
      </BentoCell>

      <BentoCell cellName="audience-growth" cellColor="white">
        <div>{`>`}56% </div>
        <p>faster audience growth</p>
        <img src={imgAudienceGrowth} alt="" />
      </BentoCell>

      <BentoCell cellName="create-post" cellColor="yellow-pale">
        <h2>
          Create and schedule content{" "}
          <em>
            <span className="highlight">quicker.</span>
          </em>
        </h2>
        <img src={imgCreatePost} alt="" />
      </BentoCell>

      <BentoCell cellName="ai-content" cellColor="yellow">
        <h2>Write your content using AI.</h2>
        <img src={imgAiContent} alt="" />
      </BentoCell>
    </BentoGrid>
  );
}

export default App;
