import { cn } from "@/utils";
import { FC, ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20")}>
      {children}
    </div>
  );
};

export default Container;
