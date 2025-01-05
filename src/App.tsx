import imgAiContent from "/images/illustration-ai-content.webp";
import imgAudienceGrowth from "/images/illustration-audience-growth.webp";
import imgConsistentSchedule from "/images/illustration-consistent-schedule.webp";
import imgCreatePost from "/images/illustration-create-post.webp";
import imgFiveStars from "/images/illustration-five-stars.webp";
import imgGrowFollowers from "/images/illustration-grow-followers.webp";
import imgMultiplePlatforms from "/images/illustration-multiple-platforms.webp";
import imgSchedulePosts from "/images/illustration-schedule-posts.webp";

import "./App.css";

function App() {
  return (
    <>
      <h1>
        Social Media <span>10x</span> <em>Faster</em> with AI
      </h1>
      <img src={imgFiveStars} alt="" />
      <p>Over 4,000 5-star reviews</p>

      <img src={imgMultiplePlatforms} alt="" />
      <h2>Manage multiple accounts and platforms.</h2>

      <h2>Maintain a consistent posting schedule.</h2>
      <img src={imgConsistentSchedule} alt="" />

      <h2>Schedule to social media.</h2>
      <img src={imgSchedulePosts} alt="" />
      <p>
        Optimize post timings to publish content at the perfect time for your
        audience.
      </p>

      <img src={imgGrowFollowers} alt="" />
      <h3>Grow followers with non-stop content.</h3>

      <div>{`>`}56% </div>
      <p>faster audience growth</p>
      <img src={imgAudienceGrowth} alt="" />

      <h3>
        Create and schedule content <em>quicker.</em>
      </h3>
      <img src={imgCreatePost} alt="" />

      <h3>Write your content using AI.</h3>
      <img src={imgAiContent} alt="" />
    </>
  );
}

export default App;
