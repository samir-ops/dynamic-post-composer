import { Platform } from "../types/Platform";
import "../styles/PlatformSelector.css";

interface Props {
  platforms: Platform[];
  selectedPlatforms: string[];
  onToggle: (id: string) => void;
}

const PlatformSelector = ({
  platforms,
  selectedPlatforms,
  onToggle,
}: Props) => {
  return (
    <div className="platform-selector">
      <h2>Select Platforms</h2>

      {platforms.map((platform) => (
        <label key={platform.id} className="platform-item">
          <input
            type="checkbox"
            checked={selectedPlatforms.includes(platform.id)}
            onChange={() => onToggle(platform.id)}
          />

          {platform.name}
        </label>
      ))}
    </div>
  );
};

export default PlatformSelector;
