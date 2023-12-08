"use client";
import { Button, Image } from "@/components/ui";
import { PRODUCT_CATEGORIES } from "@/config";
import { cn } from "@/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

const NavItem: FC<NavItemProps> = ({
  category,
  handleOpen,
  isAnyOpen,
  isOpen,
}) => {
  return (
    <div className="flex">
      <div className="flex items-center relative">
        <Button
          className="gap-1.5 "
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.label}
          <ChevronDown
            className={cn("h-4 w-4 transition-all text-muted-foreground", {
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      </div>
      {isOpen ? (
        <div
          className={cn(
            "absolute inset-x-0 top-full text-sm text-muted-foreground",
            {
              "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen,
            }
          )}
        >
          <div
            className="absolute inset-0 top-1/2 bg-white shadow"
            aria-hidden="true"
          />
          <div className="relative bg-white">
            <div className="mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-4 gap-8 gap-y-10 py-16">
                <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                  {category.featured.map((item) => {
                    return (
                      <div
                        className="group relative text-base sm:text-sm"
                        key={item.name}
                      >
                        <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                          <Image
                            alt={item.name}
                            src={item.imageSrc}
                            className="object-cover object-center"
                          />
                        </div>
                        <Link
                          href={item.href}
                          className="mt-6 block font-medium text-gray-900"
                        >
                          {item.name}
                        </Link>
                        <p className="mt-1" aria-hidden="true">
                          Shop now
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavItem;
