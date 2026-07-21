import { Platform } from "../types/Platform";
import "../styles/ValidationMessage.css";

interface Props {
  post: string;
  selectedPlatforms: string[];
  platforms: Platform[];
}

const ValidationMessage = ({
  post,
  selectedPlatforms,
  platforms,
}: Props) => {
  return (
    <div className="validation-box">
      <h2>Validation</h2>

      {platforms
        .filter((platform) => selectedPlatforms.includes(platform.id))
        .map((platform) => (
          <div key={platform.id}>
            {post.length <= platform.limit ? (
              <p className="success">
                ✅ Valid for {platform.name}
              </p>
            ) : (
              <p className="error">
                ❌ {platform.name} limit exceeded
              </p>
            )}
          </div>
        ))}
    </div>
  );
};

export default ValidationMessage;
