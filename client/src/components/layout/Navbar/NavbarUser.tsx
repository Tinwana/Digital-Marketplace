import { buttonVariants } from "@/components/ui";
import Link from "next/link";
import { FC } from "react";

interface NavbarUserProps {
  user: any;
}

const NavbarUser: FC<NavbarUserProps> = ({ user }) => {
  return (
    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 ">
      {user ? (
        <>
          <span className="h-6 w-px bg-gray-200 " aria-hidden="true" />
        </>
      ) : (
        <>
          <Link
            href="/sign-in"
            className={buttonVariants({ variant: "ghost" })}
          >
            Sign In
          </Link>
          <span className="h-6 w-px bg-gray-200 " aria-hidden="true" />
          <Link
            href="/sign-up"
            className={buttonVariants({ variant: "ghost" })}
          >
            Create Account
          </Link>
          <div className="flex lg:ml-6 ">
            <span className="h-6 w-px bg-gray-200 " aria-hidden="true" />
          </div>
        </>
      )}
    </div>
  );
};

export default NavbarUser;
