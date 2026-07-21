import { useState } from "react";

import Header from "./components/Header";
import PlatformSelector from "./components/PlatformSelector";
import PostComposer from "./components/PostComposer";
import CharacterCounter from "./components/CharacterCounter";
import ValidationMessage from "./components/ValidationMessage";

import { platforms } from "./data/platforms";

import "./styles/App.css";

function App() {
  const [post, setPost] = useState("");

  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const togglePlatform = (id: string) => {
    if (selectedPlatforms.includes(id)) {
      setSelectedPlatforms(
        selectedPlatforms.filter((platform) => platform !== id)
      );
    } else {
      setSelectedPlatforms([...selectedPlatforms, id]);
    }
  };

  return (
    <div className="app">
      <Header />

      <PlatformSelector
        platforms={platforms}
        selectedPlatforms={selectedPlatforms}
        onToggle={togglePlatform}
      />

      <PostComposer
        post={post}
        setPost={setPost}
      />

      <CharacterCounter
        post={post}
        selectedPlatforms={selectedPlatforms}
        platforms={platforms}
      />

      <ValidationMessage
        post={post}
        selectedPlatforms={selectedPlatforms}
        platforms={platforms}
      />
    </div>
  );
}

export default App;
