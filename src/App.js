import { useState } from "react";
import AudioList from "./components/AudioList";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Tabs from "./components/Tabs";
import "./App.css";
import FixFooter from "./components/FixFooter";

function App() {
  const [list, setList] = useState(false);

  const onBackButtonPress = () => {
    setList(false);
  };

  return (
    <div className="App m-20">
      <Header />
      <h2 className="mtb-20 app-quote">Find the best music for your code</h2>
      <SearchInput />
      <Tabs />
      {list && <AudioList onBackButtonPress={onBackButtonPress} />}
      {/* <button onClick={() => setList(true)}>btn</button> */}

      <FixFooter />
    </div>
  );
}

export default App;
