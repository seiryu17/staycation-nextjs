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
          <use xlinkHref="#image0_62_14" transform="scale(0.00520833)" />
        </pattern>
        <image
          id="image0_62_14"
          width="192"
          height="192"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default SvgIcon;
