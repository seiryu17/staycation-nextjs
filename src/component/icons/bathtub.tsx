import React from "react";

interface IProps {
  size?: number;
  fill?: string;
}

const SvgIcon = (props: IProps) => {
  const { fill, size = 38 } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="38" height="38" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_62_27" transform="scale(0.00520833)" />
        </pattern>
        <image
          id="image0_62_27"
          width="192"
          height="192"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default SvgIcon;