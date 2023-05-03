import React from "react";

import PossibleVideoSeriesStudentViewClickbutton3 from "components/PossibleVideoSeriesStudentViewClickbutton3";
import { Img, Text } from "components";

const PossibleVideoSeriesStudentViewPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-roboto items-center justify-start mx-auto shadow-bs w-full">
        <div className="border-[3px] border-black_900 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-[70px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start mb-[21px] self-stretch w-auto md:w-full">
            <PossibleVideoSeriesStudentViewClickbutton3
              className="flex flex-col items-start justify-start w-auto md:w-full"
              videoOne="Video One"
              videoTwo="Video Two"
            />
            <div className="bg-white_A700 flex flex-col items-start justify-start self-stretch w-auto md:w-full">
              <div className="border border-black_900 border-solid flex flex-col md:gap-10 gap-[152px] items-center justify-end pt-[155px] w-full">
                <div className="border border-black_900 border-solid flex flex-col items-center justify-center md:px-10 sm:px-5 px-[46px] py-[22px] self-stretch w-auto">
                  <Img
                    src="images/img_play.svg"
                    className="h-9 w-[26px]"
                    alt="play"
                  />
                </div>
                <div className="bg-blue_700 border border-black_900 border-solid flex md:flex-col flex-row gap-[21px] items-center justify-start px-2.5 py-[9px] self-stretch w-auto md:w-full">
                  <Img
                    src="images/img_polygon3.svg"
                    className="h-[18px] w-[17px]"
                    alt="polygonThree"
                  />
                  <Text
                    className="font-semibold text-left text-white_A700 w-auto"
                    as="h2"
                    variant="h2"
                  >
                    0.00
                  </Text>
                  <Img
                    src="images/img_timebar.svg"
                    className="h-1.5 w-[493px]"
                    alt="timebar"
                  />
                  <Img
                    src="images/img_volume.svg"
                    className="h-2.5 w-2"
                    alt="volume"
                  />
                  <Img
                    src="images/img_settings.svg"
                    className="h-[17px] w-[17px]"
                    alt="settings"
                  />
                  <Img
                    src="images/img_menu.svg"
                    className="h-[15px] w-5"
                    alt="menu"
                  />
                  <Img
                    src="images/img_computer.svg"
                    className="h-[17px] w-5"
                    alt="computer"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border border-blue_gray_100 border-solid flex md:flex-1 flex-col items-center justify-start rounded-bl-none rounded-br-[5px] rounded-tl-none rounded-tr-[5px] w-[38%] md:w-full">
            <div className="flex flex-col items-end justify-start self-stretch w-auto sm:w-full">
              <div className="bg-white_A700 flex flex-col h-[37px] md:h-auto items-start justify-start px-[15px] py-1.5 rounded-bl-none rounded-br-none rounded-tl-none rounded-tr-[5px] w-[514px] sm:w-full">
                <div className="flex flex-row gap-[9px] items-center justify-start self-stretch w-auto">
                  <Text
                    className="text-left text-teal_900 w-auto"
                    as="h1"
                    variant="h1"
                  >
                    Transcript
                  </Text>
                  <Img
                    src="images/img_editbutton.svg"
                    className="h-6 w-6"
                    alt="editbutton"
                  />
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[-1px] items-center justify-start w-[500px] sm:w-full">
                <div className="flex flex-col items-start justify-start w-[485px] sm:w-full">
                  <Text
                    className="font-normal not-italic text-gray_800 text-left tracking-[0.49px]"
                    as="h2"
                    variant="h2"
                  >
                    <>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                      <br />
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad <br />
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip <br />
                      ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in <br />
                      voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint <br />
                      occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt <br />
                      mollit anim id est laborum.
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do <br />
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad <br />
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip <br />
                      ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in <br />
                      voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint
                    </>
                  </Text>
                </div>
                <div className="bg-teal_900 border border-gray_700 border-solid flex flex-col items-center justify-start p-0.5 rounded-bl-none rounded-br rounded-tl rounded-tr-none w-[3%] sm:w-full">
                  <div className="bg-white_A700 border border-solid border-white_A700 h-[186px] mb-[167px] mt-[26px] rotate-[-90deg] rounded-[5px] w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PossibleVideoSeriesStudentViewPage;
