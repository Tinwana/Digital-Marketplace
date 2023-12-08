"use client";
import { Image, buttonVariants } from "@/components/ui";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { formatPrice } from "@/utils";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const Cart: FC = () => {
  const itemCount = 0;
  const fee = 32;

  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2 ">
        <ShoppingCart
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        />
        <span className="ml-2 text-lg text-gray-700 group-hover:text-gray-800 font-semibold">
          {itemCount}
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart ({itemCount})</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">cart items</div>
            <div className="space-y-4 pr-6 ">
              <Separator />

              <div className="space-y-2 pr-6 ">
                <div className="flex justify-between">
                  <span className="">Shipping</span>
                  <span className="">Free</span>
                </div>

                <div className="flex justify-between">
                  <span className="">Transaction Fee</span>
                  <span className="">{formatPrice(fee)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="">Total</span>
                  <span className="">{formatPrice(fee)}</span>
                </div>
              </div>

              <SheetFooter className="">
                <SheetTrigger asChild>
                  <Link
                    href="/cart"
                    className={buttonVariants({ className: "w-full" })}
                  >
                    Continue to checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <>
            <div className="flex h-full flex-col items-center justify-center space-y-1">
              <div
                aria-hidden="true"
                className="relative mb-4 h-60 w-60 text-muted-foreground"
              >
                <Image alt="empty cart" src="/hippo-empty-cart.png" />
              </div>
              <p className="text-xl font-semibold">You cart is empty!</p>
              <SheetTrigger asChild>
                <Link
                  href="/products"
                  className={buttonVariants({
                    variant: "link",
                    size: "sm",
                    className: "text-sm text-muted-foreground",
                  })}
                >
                  Add item to your cart to checkout
                </Link>
              </SheetTrigger>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
