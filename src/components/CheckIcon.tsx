import { FC, SVGAttributes } from 'react';

type IconProps = SVGAttributes<SVGElement>;

const CheckIcon: FC<IconProps> = ({ color = 'currentColor', ...svgProps }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...svgProps}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.5607 7.56065L11.7678 16.3535C10.7914 17.3299 9.20854 17.3299 8.23222 16.3535L3.93933 12.0607L6.06065 9.93933L9.99999 13.8787L18.4393 5.43933L20.5607 7.56065Z"
      fill={color}
    />
  </svg>
);

export default CheckIcon;
