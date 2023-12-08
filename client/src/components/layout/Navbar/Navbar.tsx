import { FC } from "react";
import Container from "../Container";
import Link from "next/link";
import { Icons, buttonVariants } from "@/components/ui";
import NavItems from "./NavItems";
import { Span } from "next/dist/trace";
import NavbarUser from "./NavbarUser";
import { Cart } from "@/components/ui";

const Navbar: FC = () => {
  const user = null;

  return (
    <header className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <div className="relative bg-white">
        <Container>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* TOO: mobile nav */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>

              <div className="ml-auto flex items-center">
                <NavbarUser user={user} />
                <div className="ml-4 flow-root lg:ml-6 ">
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
