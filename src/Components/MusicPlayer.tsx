import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";

import { useState } from "react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState("Track 1");

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack("Track 2");
  };

  const prevTrack = () => {
    setCurrentTrack("Track 1");
  };

  return (
    <div className="music-player rounded-4 d-lg-none">
      <div className="player-info">
        <p className="track-name">{currentTrack}</p>
      </div>
      <div className="player-controls">
        <button onClick={prevTrack} className="control-btn">
          <FaStepBackward />
        </button>
        <button onClick={togglePlayPause} className="control-btn">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={nextTrack} className="control-btn">
          <FaStepForward />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
