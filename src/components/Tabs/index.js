import { useState } from "react";
import { baseUrl } from "../../config";
import "./style.css";

const Tabs = ({ tabData, onItemSelect }) => {
  const [touched, setTouched] = useState(false);
  const [active, setActive] = useState("");

  const getActiveClass = (tab) => {
    return touched
      ? active === tab
        ? "active"
        : ""
      : tabData[tab].isActive
      ? "active"
      : "";
  };

  console.log({ tabData });
  return (
    <div className="tab-container">
      {/* tab header */}
      <div className="tab-header flex">
        {tabData &&
          Object.keys(tabData).map((tab, index) => (
            <a
              key={index}
              className={`${getActiveClass(tab)}`}
              href={`#${tab}`}
              onClick={() => {
                setTouched(true);
                setActive(tab);
              }}
            >
              {tabData[tab].label}
            </a>
          ))}
      </div>

      {/* tab content */}
      <div className="tab-contents">
        {tabData &&
          Object.keys(tabData).map((tab, index) => (
            <div
              key={index}
              className={`tab-content ${getActiveClass(tab)}`}
              id={`${tab}`}
            >
              <div className="content-wrapper flex justify-center m-20">
                {tabData[tab].items.map((item, _index) => (
                  <div
                    onClick={() => onItemSelect(tab, item.key)}
                    key={_index}
                    className="content-item m-10"
                  >
                    <div className="d-visilibity z-0"></div>
                    <img src={`${baseUrl}/music/${item.key}/${item.key}.jpg`} />
                    <div className="content-label flex justify-center align-center">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tabs;
