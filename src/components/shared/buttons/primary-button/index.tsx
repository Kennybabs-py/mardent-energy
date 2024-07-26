import { ReactNode } from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import cn from "clsx";

import "./primary-button.scss";
type Props = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  variation?: "primary" | "secondary";
  showArrow?: boolean;
};
export default function PrimaryButton(props: Props) {
  const { children, type, variation = "primary", showArrow = false } = props;

  return (
    <button
      type={type ? type : "button"}
      className={cn(
        "primary__button",
        variation === "primary" && "primary",
        variation === "secondary" && "secondary"
      )}
    >
      {children} {showArrow && <IoArrowForwardCircleOutline />}
    </button>
  );
}
