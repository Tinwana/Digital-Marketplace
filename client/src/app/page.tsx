import { Container } from "@/components/layout";
import { Button, buttonVariants } from "@/components/ui";
import { perks } from "@/features/Home";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Container>
        <div className="py-20 mx-auto text-center flex flex-col max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high-quality{" "}
            <span className="text-blue-600">digital assets</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to DigitalHippo. Every assets on our platform is verified by
            our team to ensure out highest quality standards{" "}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center justify-center">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality promises &rarr;</Button>
          </div>
        </div>

        {/* todo products */}
      </Container>

      <section className="border-t border-gray-200 bg-gray-50 ">
        <Container className="py-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => {
              return (
                <div
                  key={perk.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="md:flex-shrink-0 flex justify-center">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                      {<perk.Icon className="w-1/3 h-1/3 " />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
