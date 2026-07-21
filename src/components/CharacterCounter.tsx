import { Platform } from "../types/Platform";
import "../styles/CharacterCounter.css";

interface Props {
  post: string;
  selectedPlatforms: string[];
  platforms: Platform[];
}

const CharacterCounter = ({
  post,
  selectedPlatforms,
  platforms,
}: Props) => {
  return (
    <div className="character-counter">
      <h2>Character Count</h2>

      {platforms
        .filter((platform) => selectedPlatforms.includes(platform.id))
        .map((platform) => (
          <div key={platform.id} className="counter-item">
            <span>{platform.name}</span>

            <span>
              {post.length} / {platform.limit}
            </span>
          </div>
        ))}
    </div>
  );
};

export default CharacterCounter;
