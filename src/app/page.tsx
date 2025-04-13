import Image from "next/image";

import HeroImageSmallScreen from "@/assets/images/heroImageSmallScreen.png";
import HeroImageLargeScreen from "@/assets/images/heroImageLargeScreen.png";
import Ring1Image from "@/assets/images/ring1.jpg";
import Ring2Image from "@/assets/images/ring2.jpg";
import PeopleUser from "@/assets/images/peopleUser.svg";
import diamondHard from "@/assets/images/diamondHard.svg";
import LifeWarranty from "@/assets/images/lifeWarranty.svg";
import WhyChooseBottom from "@/assets/images/whyChooseBottom.svg";
import ExploreMore from "@/assets/images/exploreMore.jpg";

import Breadcrumb from "@/components/CustomBreadcrumb";
import Card from "@/components/Card";
import Testimonimals from "@/components/Testimonimals";
import ExploreMoreButton from "@/components/ExploreMoreButton";

const whyChooseContent = [
  {
    icon: PeopleUser,
    title: "Expert Guidance",
    description: "Work with our designers to create your perfect piece.",
  },
  {
    icon: diamondHard,
    title: "Crafted with Luxury Materials",
    description:
      "Only the finest diamonds, gemstones, and precious metals used.",
  },
  {
    icon: LifeWarranty,
    title: "Lifetime Warranty",
    description:
      "Lifetime warranty on every piece, ensuring quality and lasting beauty.",
  },
];

const exploreMoreContent = [
  "How to Select the Ideal Wedding Band",
  "Lab Grown Diamond Guide",
  "How to Choose the Engagement Ring",
  "Ring Size Guide",
];

const customJewelryContent = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We discuss your vision and preferences to craft a unique design.",
  },
  {
    number: "02",
    title: "Selecting Materials",
    description:
      "Choose from exquisite diamonds, precious metals, and gemstones.",
  },
  {
    number: "03",
    title: "Creating a 3D Model",
    description:
      "We discuss your vision and preferences to craft a unique design.",
  },
  {
    number: "04",
    title: "Manufacturing",
    description:
      "Expert artisans bring your piece to life with precision and care.",
  },
  {
    number: "05",
    title: "Quality Assurance",
    description: "Every detail is inspected to ensure flawless craftsmanship.",
  },
  {
    number: "06",
    title: "Delivery",
    description:
      "Your custom jewelry is elegantly packaged and delivered to you.",
  },
];
export default function Home() {
  return (
    <div>
      {/* hero section */}
      <section>
        {/* Small screens */}
        <div className="block lg:hidden">
          <Image
            src={HeroImageSmallScreen}
            alt="Hero image small"
            priority
            placeholder="blur"
          />
        </div>

        {/* Large screens */}
        <div className="hidden lg:block">
          <Image
            src={HeroImageLargeScreen}
            alt="Hero image large"
            priority
            placeholder="blur"
          />
        </div>
      </section>

      <section>
        <div className="ps-4 pt-5 lg:px-20">
          <Breadcrumb items={["Home", "Custom Jewelry"]} />
          <div className="mt-10 grid grid-cols-1 lg:flex lg:justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <h2 className="font-header text-[1.625rem]">Custom Jewelry</h2>
                <p className="mt-2 text-sm text-[#434343]">
                  Create Your Masterpiece: Bespoke
                </p>
                <p className="text-sm text-[#434343]">
                  Jewelry Crafted for You
                </p>
              </div>
              <div className="relative hidden lg:flex">
                <Image src={Ring1Image} alt="ring1" />
                <Image
                  src={Ring2Image}
                  alt="ring2"
                  className="absolute right-0 lg:-bottom-36 lg:-right-36"
                />
              </div>
            </div>
            {/* Right side (Steps) */}
            <div className="mt-5 flex flex-col gap-6">
              <p className="text-sm text-[#434343] w-[500px] lg:block hidden">
                Exquisite design, flawless craftsmanship, and timeless
                elegance—your vision, perfectly crafted.
              </p>
              <div className="flex flex-col gap-4 lg:gap-10">
                {customJewelryContent.map((item, index) => (
                  <div className="flex gap-1" key={index}>
                    <div className="text-[#7A7A7A]">{item.number}</div>
                    <div className="border-b-[1px] border-b-[#E4E4E4] pb-2 lg:pb-10">
                      <p className="uppercase">{item.title}</p>
                      <p className="text-sm text-[#7A7A7A]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
                <p className="text-sm text-[#434343] lg:hidden">
                  Exquisite design, flawless craftsmanship, and timeless
                  elegance—your vision, perfectly crafted.
                </p>
              </div>
              <div className="relative flex lg:hidden">
                <Image
                  src={Ring1Image}
                  alt="ring1"
                  className="h-[20.063rem] w-[15.688rem]"
                />
                <Image
                  src={Ring2Image}
                  alt="ring2"
                  className="absolute -bottom-[6rem] right-[1rem] h-[13.313rem] w-[10.063rem] lg:-bottom-36 lg:-right-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MyJewel section */}
      <section>
        <div className="relative mt-52 px-4 pb-[7.5rem] lg:px-20">
          <h2 className="text-center font-header text-[1.625rem]">
            Why Choose MyJewel?
          </h2>
          {
            <div className="mt-5 flex w-full flex-col gap-5 lg:mt-10 lg:flex-row">
              {whyChooseContent.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>
          }
          <Image
            src={WhyChooseBottom}
            alt="image"
            className="absolute bottom-0 right-0 -z-10 w-full lg:-bottom-14 lg:h-80 lg:w-80"
          />
        </div>
      </section>
      <section className="z-50 mt-[70px] w-full items-center justify-between gap-10 px-4 lg:mt-[0px] lg:grid lg:grid-cols-5 lg:pe-0 lg:ps-20">
        <div className="flex flex-col gap-5 lg:col-span-3">
          <h2 className="font-header text-3xl">Explore More</h2>
          <p className="text-sm text-[#7A7A7A] lg:line-clamp-2 lg:w-[432px]">
            Looking for more diamond guides, buying tips or details about the
            4Cs? Explore more of our diamond education pages:
          </p>
          <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-10">
            {exploreMoreContent.map((item, index) => (
              <div
                key={index}
                className="flex w-full items-center justify-between lg:w-[318px]"
              >
                <p
                  className={`text-[12px] text-[#434343] ${index == 0 ? "underline" : ""}`}
                >
                  {item}
                </p>
                <ExploreMoreButton />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[30px] lg:col-span-2 lg:mt-[0px]">
          <Image
            src={ExploreMore}
            alt="explore more"
            className="z-50 w-full lg:h-[419px]"
          />
        </div>
      </section>
      <section className="px-4 lg:px-20 lg:pb-20">
        <Testimonimals />
      </section>
    </div>
  );
}
