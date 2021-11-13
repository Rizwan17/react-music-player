import { backIcon } from "../../assets";
import { baseUrl } from "../../config";
import "./style.css";

const AudioList = ({ onBackButtonPress, audioList, onTrackSelect }) => {
  console.log({ audioList });
  return (
    <div className="audio-ls p-20">
      <div onClick={onBackButtonPress} className="audio-ls-header">
        <img src={backIcon} />
      </div>

      <ul className="mtb-10">
        {audioList.length ? (
          audioList.map((item, index) => (
            <li
              onClick={() => onTrackSelect(index)}
              key={index}
              className="audio-ls-container"
            >
              <div className="audio-ls-item flex align-center ptb-5">
                <div className="audio-img">
                  <img src={`${baseUrl}/${item.avatar}`} />
                </div>
                <div className="audio-info mlr-10">
                  <p>{item.title}</p>
                  <p>{item.artist}</p>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p style={{ textAlign: "center", fontSize: "16px" }}>
            No Audio Available
          </p>
        )}
      </ul>
    </div>
  );
};

export default AudioList;
