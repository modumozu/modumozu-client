import { FC, SVGProps } from "react";

interface CircledXIconProps extends SVGProps<SVGSVGElement> {}

const CircledXIcon: FC<CircledXIconProps> = ({ ...rest }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <circle cx="10" cy="10" r="10" fill="#D9D9D9" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.14645 6.85355C5.95118 6.65829 5.95118 6.34171 6.14645 6.14645C6.34171 5.95118 6.65829 5.95118 6.85355 6.14645L10 9.29289L13.1464 6.14645C13.3417 5.95118 13.6583 5.95118 13.8536 6.14645C14.0488 6.34171 14.0488 6.65829 13.8536 6.85355L10.7071 10L13.8536 13.1464C14.0488 13.3417 14.0488 13.6583 13.8536 13.8536C13.6583 14.0488 13.3417 14.0488 13.1464 13.8536L10 10.7071L6.85355 13.8536C6.65829 14.0488 6.34171 14.0488 6.14645 13.8536C5.95118 13.6583 5.95118 13.3417 6.14645 13.1464L9.29289 10L6.14645 6.85355Z"
      fill="white"
    />
  </svg>
);
export default CircledXIcon;
