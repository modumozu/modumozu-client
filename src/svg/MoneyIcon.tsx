import { FC, SVGProps } from "react";

interface MoneyIconProps extends SVGProps<SVGSVGElement> {}

const MoneyIcon: FC<MoneyIconProps> = ({ ...rest }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18.75C14.8325 18.75 18.75 14.8325 18.75 10C18.75 5.16751 14.8325 1.25 10 1.25C5.16751 1.25 1.25 5.16751 1.25 10C1.25 14.8325 5.16751 18.75 10 18.75ZM7.08335 7.08333H5.62481V8.54167H4.16667V10H5.62481V11.0938C5.62481 12.5032 6.76742 13.6458 8.17689 13.6458C8.891 13.6458 9.5366 13.3525 9.99981 12.8798C10.463 13.3525 11.1086 13.6458 11.8227 13.6458C13.2322 13.6458 14.3748 12.5032 14.3748 11.0938V10H15.8333V8.54167H14.3748V7.08333H12.9167V11.0938C12.9167 11.6978 12.427 12.1875 11.8229 12.1875C11.2189 12.1875 10.7292 11.6978 10.7292 11.0938V7.08333H10.729H9.27085H9.27064V11.0938L9.2707 11.1116C9.26117 11.7074 8.77519 12.1875 8.1771 12.1875C7.57304 12.1875 7.08335 11.6978 7.08335 11.0938V7.08333Z"
        fill="#C9CDD2"
      />
    </svg>
  );
};

export default MoneyIcon;
