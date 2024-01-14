import ModelFloor from "./compoents/ModelFloor";
import "./App.css";
import { useState } from "react";
function App() {
  const [sole, setSole] = useState(false);
  const [stripe, setStripe] = useState(false);
  const [back, setBack] = useState(false);
  const [top, setTop] = useState(false);
  return (
    <div className="main-wrapper">
      <ModelFloor sole={sole} stripe={stripe} back={back} top={top} />
      <div
        className={`fixed top-0 z-30 left-0 w-[200px] bg-white h-full bottom-0 flex flex-col`}
      >
        <div className="absolute left-0 top-0 blur-0 h-full flex flex-col w-full border-r">
          <div className="h-[25%] border-b flex flex-col justify-center items-center">
            <span className="w-[30px] h-[30px] mb-[20px] flex justify-center items-center leading-none rounded-full bg-[#e9e9e9] text-[#818181] text-[12px]">
              01
            </span>
            <span className="text-[14px] font-medium">Top area</span>
            <span className="flex mt-[10px]">
              <button
                onClick={() => setTop(false)}
                className={`w-[36px] h-[36px]  rounded-full border ${
                  top ? `boeder` : `border-[#333]`
                } relative flex justify-center items-center  mr-[10px]`}
              >
                <span
                  className={`bg-black block w-[30px] h-[30px] rounded-full hover:scale-75 transition-all duration-300 ${
                    !top ? `!scale-75` : ``
                  }`}
                ></span>
              </button>
              <button
                onClick={() => setTop(true)}
                className={`w-[36px] h-[36px]  rounded-full border ${
                  !top ? `boeder` : `border-[#333]`
                } relative flex justify-center items-center`}
              >
                <span
                  className={`bg-[#e9e8e8] block w-[30px] h-[30px] rounded-full hover:scale-75 transition-all duration-300 ${
                    top ? `!scale-75` : ``
                  }`}
                ></span>
              </button>
            </span>
          </div>
          <div className="h-[25%] border-b flex flex-col justify-center items-center">
            <span className="w-[30px] h-[30px] mb-[20px] flex justify-center items-center leading-none rounded-full bg-[#e9e9e9] text-[#818181] text-[12px]">
              02
            </span>
            <span className="text-[14px] font-medium">Side stripe</span>
            <span className="flex mt-[10px]">
              <button
                onClick={() => setStripe(false)}
                className={`w-[36px] h-[36px]  rounded-full border ${
                  stripe ? `boeder` : `border-[#333]`
                } relative flex justify-center items-center  mr-[10px]`}
              >
                <span
                  className={`bg-black block w-[30px] h-[30px] rounded-full hover:scale-75 transition-all duration-300 ${
                    !stripe ? `!scale-75` : ``
                  }`}
                ></span>
              </button>
              <button
                onClick={() => setStripe(true)}
                className={`w-[36px] h-[36px]  rounded-full border ${
                  !stripe ? `boeder` : `border-[#333]`
                } relative flex justify-center items-center`}
              >
                <span
                  className={`bg-[#e9e8e8] block w-[30px] h-[30px] rounded-full hover:scale-75 transition-all duration-300 ${
                    stripe ? `!scale-75` : ``
                  }`}
                ></span>
              </button>
            </span>
          </div>
          <div className="h-[25%] border-b flex flex-col justify-center items-center">
            <span className="w-[30px] h-[30px] mb-[20px] flex justify-center items-center leading-none rounded-full bg-[#e9e9e9] text-[#818181] text-[12px]">
              03
            </span>
            <span className="text-[14px] font-medium">Back side</span>
            <span className="flex mt-[10px]">
              <button
                onClick={() => setBack(false)}
                className={`w-[36px] h-[36px]  rounded-full border ${
                  back ? `boeder` : `border-[#333]`
                } relative flex justify-center items-center  mr-[10px]`}
              >
                <span
                  className={`bg-black block w-[30px] h-[30px] rounded-full hover:scale-75 transition-all duration-300 ${
                    !back ? `!scale-75` : ``
                  }`}
                ></span>
              </button>
              <button
                onClick={() => setBack(true)}
                className={`w-[36px] h-[36px]  rounded-full border ${
                  !back ? `boeder` : `border-[#333]`
                } relative flex justify-center items-center`}
              >
                <span
                  className={`bg-[#e9e8e8] block w-[30px] h-[30px] rounded-full hover:scale-75 transition-all duration-300 ${
                    back ? `!scale-75` : ``
                  }`}
                ></span>
              </button>
            </span>
          </div>
          <div className="h-[25%] border-b flex flex-col justify-center items-center">
            <span className="w-[30px] h-[30px] mb-[20px] flex justify-center items-center leading-none rounded-full bg-[#e9e9e9] text-[#818181] text-[12px]">
              04
            </span>
            <span className="text-[14px] font-medium">Sole</span>
            <span className="flex mt-[10px]">
              <button
                onClick={() => setSole(false)}
                className={`w-[36px] h-[36px]  rounded-full border ${
                  sole ? `boeder` : `border-[#333]`
                } relative flex justify-center items-center  mr-[10px]`}
              >
                <span
                  className={`bg-black block w-[30px] h-[30px] rounded-full hover:scale-75 transition-all duration-300 ${
                    !sole ? `!scale-75` : ``
                  }`}
                ></span>
              </button>
              <button
                onClick={() => setSole(true)}
                className={`w-[36px] h-[36px]  rounded-full border ${
                  !sole ? `boeder` : `border-[#333]`
                } relative flex justify-center items-center`}
              >
                <span
                  className={`bg-[#e9e8e8] block w-[30px] h-[30px] rounded-full hover:scale-75 transition-all duration-300 ${
                    sole ? `!scale-75` : ``
                  }`}
                ></span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
