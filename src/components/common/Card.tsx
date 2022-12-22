import React from "react";
import { fn } from "../../utils";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={fn(
        "mx-auto w-full max-w-[20rem] sm:max-w-md  md:max-w-lg lg:max-w-4xl",
        className
      )}
    >
      {children}
    </div>
  );
};
