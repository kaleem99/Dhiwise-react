import React from "react";

import { Button } from "components";

const PossibleVideoSeriesStudentViewClickbutton3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-center justify-start self-stretch w-auto">
          <Button
            className="cursor-pointer font-normal font-roboto h-8 min-w-[92px] not-italic text-[13px] text-center text-teal_900 w-auto"
            size="sm"
            variant="OutlineGray300"
          >
            {props?.videoOne}
          </Button>
          <Button
            className="cursor-pointer font-normal font-roboto h-8 min-w-[93px] not-italic text-[13px] text-center text-teal_900 w-auto"
            shape="CustomBorderLR4"
            size="sm"
            variant="OutlineGray300_1"
          >
            {props?.videoTwo}
          </Button>
        </div>
      </div>
    </>
  );
};

PossibleVideoSeriesStudentViewClickbutton3.defaultProps = {
  videoOne: "Video One",
  videoTwo: "Video Two",
};

export default PossibleVideoSeriesStudentViewClickbutton3;
