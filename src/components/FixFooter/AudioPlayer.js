import {
  nextIcon,
  pauseBlackIcon,
  playBlackIcon,
  prevIcon,
} from "../../assets";
import { baseUrl } from "../../config";

const AudioPlayer = ({
  title,
  artist,
  avatar,
  duration,
  trackProgress,
  onChangeTrackProgress,
  onPlayPause,
  isPlaying,
  nextTrack,
  prevTrack,
}) => {
  const currentProgress = (trackProgress / duration) * 100;
  const trackProgressStyling = `linear-gradient(to right, #ffffff ${currentProgress}%, grey ${currentProgress}%)`;

  return (
    <div className="audio-player-lg">
      <div className="audio-cover-lg-img">
        <img src={`${baseUrl}/${avatar}`} />
      </div>

      <div>
        <h2>{title}</h2>
        <h3>{artist}</h3>
      </div>

      <div className="audio-player-progress">
        <input
          type="range"
          min={"0"}
          step={"1"}
          max={duration ? duration : 0}
          value={trackProgress}
          onChange={onChangeTrackProgress}
          style={{ background: trackProgressStyling }}
        />
      </div>

      <div className="audio-controls flex justify-sb">
        <button onClick={prevTrack}>
          <img src={prevIcon} />
        </button>
        <div className="play-pause-btn">
          <button onClick={onPlayPause}>
            {isPlaying ? (
              <img style={{ marginTop: "5px" }} src={pauseBlackIcon} />
            ) : (
              <img
                style={{ marginLeft: "5px", marginTop: "5px" }}
                src={playBlackIcon}
              />
            )}
          </button>
        </div>
        <button onClick={nextTrack}>
          <img src={nextIcon} />
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
