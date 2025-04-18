import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";
import { useState } from "react";
import AppleLogo from "../assets/img/apple.svg";

const MyTopNavbar = function () {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState("Track 1");
  const [volume, setVolume] = useState(50);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack("Track 2");
  };

  const prevTrack = () => {
    setCurrentTrack("Track 1");
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  return (
    <div className="music-player2 d-none d-lg-block">
      <div className="d-flex justify-content-between">
        <div>
          <div className="player-controls2 d-flex align-items-center">
            <button onClick={prevTrack} className="control-btn2">
              <FaStepBackward />
            </button>
            <button onClick={togglePlayPause} className="control-btn2">
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button onClick={nextTrack} className="control-btn2">
              <FaStepForward />
            </button>
            <button onClick={nextTrack} className="control-btn2">
              <i className="bi bi-shuffle"></i>
            </button>
            <button onClick={nextTrack} className="control-btn2">
              <i className="bi bi-arrow-repeat"></i>
            </button>
          </div>
        </div>
        <div>
          <img src={AppleLogo} className="img-white" alt="Apple Logo" />
        </div>
        <div className="d-flex align-items-center">
          <i className="bi bi-volume-down me-2"></i>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
            style={{ width: "100px" }}
          />
          <i className="bi bi-volume-up ms-2"></i>
        </div>
        <div>
          <a href="#" className="btn btn-danger me-3">
            <i className="bi bi-person-circle"></i> Accedi
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyTopNavbar;
