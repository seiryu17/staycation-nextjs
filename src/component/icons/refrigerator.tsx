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
          <use xlinkHref="#image0_65_22" transform="scale(0.00520833)" />
        </pattern>
        <image
          id="image0_65_22"
          width="192"
          height="192"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default SvgIcon;
