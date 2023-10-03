import { FC, SVGProps } from "react";

interface BankIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

const BankIcon: FC<BankIconProps> = ({ color = "#C9CDD2", ...rest }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.36669 1.94138L1.91735 8.03629C1.55367 8.33385 1.76407 8.92327 2.23396 8.92327H3.33326V14.7566H2.49997V17.2566H17.5V14.7566H16.6666V8.92327H17.7659C18.2358 8.92327 18.4462 8.33385 18.0825 8.03629L10.6332 1.94137C10.2648 1.63998 9.73505 1.63998 9.36669 1.94138ZM6.66664 9.75661H8.3333V13.9233H6.66664V9.75661ZM13.3333 9.75661H11.6666V13.9233H13.3333V9.75661Z"
        fill={color}
      />
    </svg>
  );
};

export default BankIcon;
