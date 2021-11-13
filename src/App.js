import { useEffect, useState } from "react";
import AudioList from "./components/AudioList";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Tabs from "./components/Tabs";
import "./App.css";
import FixFooter from "./components/FixFooter";
import { baseUrl } from "./config";

function App() {
  const [list, setList] = useState(false);
  const [appData, setAppData] = useState({});
  const [audioList, setAudioList] = useState([]);
  const [trackIndex, setTrackIndex] = useState(-1);

  const onBackButtonPress = () => {
    setList(false);
  };

  const onItemSelect = (tab, type) => {
    if (tab in appData) {
      if (type in appData[tab]) {
        const audioList = appData[tab][type];
        setAudioList(audioList);
      } else {
        //to remove old items from array
        setAudioList([]);
      }
    } else {
      //to remove old items from array
      setAudioList([]);
    }

    setList(true);
  };

  const onTrackSelect = (index) => {
    setTrackIndex(index);
  };

  useEffect(() => {
    fetch(`${baseUrl}/song`)
      .then((res) => res.json())
      .then((jsonResp) => {
        console.log({ jsonResp });
        setAppData(jsonResp.appData);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);

  return (
    <div className="App m-20">
      <Header />
      <h2 className="mtb-20 app-quote">Find the best music for your code</h2>
      <SearchInput />
      <Tabs onItemSelect={onItemSelect} tabData={appData["homeScreen"]} />
      {list && (
        <AudioList
          audioList={audioList}
          onTrackSelect={onTrackSelect}
          onBackButtonPress={onBackButtonPress}
        />
      )}
      {/* <button onClick={() => setList(true)}>btn</button> */}

      <FixFooter trackIndex={trackIndex} audioList={audioList} />
    </div>
  );
}

export default App;
