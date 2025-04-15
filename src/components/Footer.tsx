import Image from "next/image";
import VisaCardImage from "@/assets/images/Visa.svg";
import MasterCardImage from "@/assets/images/masterCard.svg";
import ApplePay from "@/assets/images/apple1.svg";
import AmexImage from "@/assets/images/amex2.svg";
import TeddyImage from "@/assets/images/teddy.svg";
import Facebook from "@/assets/images/LiaFacebook.svg";
import Instagram from "@/assets/images/LiaInstagram.svg";

import EmailForm from "@/components/EmailForm";
type ContactContent = string;

const contactContents: ContactContent[] = [
  "Blog",
  "Lab Grown Diamond Guide",
  "Moissanite vs. Diamond Guide",
  "Ring Size Guide",
];

const paymentContent = [
  VisaCardImage,
  MasterCardImage,
  ApplePay,
  AmexImage,
  TeddyImage,
];

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8] px-4 pt-[3.125rem]">
      <div className="lg:flex lg:items-start lg:justify-between lg:px-20 lg:pt-[86px]">
        <div className="mt-3 border-b-[1.5px] border-b-[#E4E4E4] pb-1 lg:mt-0 lg:w-[234px] lg:border-0">
          <h3 className="text-sm font-semibold uppercase text-[#434343]">
            contact us
          </h3>
          <ul>
            {contactContents.map((content: string, index) => (
              <li
                key={index}
                className="py-2 text-sm font-normal text-[#434343]"
              >
                {content}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-3 border-b-[1.5px] border-b-[#E4E4E4] pb-1 lg:mt-0 lg:w-[234px] lg:border-0">
          <h3 className="text-sm font-semibold uppercase text-[#434343]">
            contact us
          </h3>
          <ul>
            {contactContents.map((content: string, index) => (
              <li
                key={index}
                className="py-2 text-sm font-normal text-[#434343]"
              >
                {content}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-3 border-b-[1.5px] border-b-[#E4E4E4] pb-1 lg:mt-0 lg:w-[234px] lg:border-0">
          <h3 className="text-sm font-semibold uppercase text-[#434343]">
            contact us
          </h3>
          <ul>
            {contactContents.map((content: string, index) => (
              <li
                key={index}
                className="py-2 text-sm font-normal text-[#434343]"
              >
                {content}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-[1.875rem] lg:mt-0 lg:pb-1">
          <div>
            <h2 className="text-[16px]">Let&apos;s Keep In Touch</h2>
            <EmailForm />
          </div>
          <div className="mb-[30px]">
            <h3 className="text-xs font-semibold">Payment Methods</h3>
            <div className="mt-3 flex gap-3">
              {paymentContent.map((item, index) => (
                <div
                  key={index}
                  className="flex h-[28px] w-[42px] items-center justify-center rounded-md border-[0.81px]"
                >
                  <Image src={item} className="grayscale" alt="master card" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between border-b-[1px] border-b-[#E4E4E4] pb-2 lg:hidden">
            <p className="text-[8px] text-[#434343]">Terms & Conditions</p>
            <p className="text-[8px] text-[#434343]">Privacy Policy</p>
            <p className="text-[8px] text-[#434343]">Site Map</p>
            <div className="flex items-center gap-2">
              <Image src={Facebook} alt="facebook" />
              <Image src={Instagram} alt="instagram" />
            </div>
          </div>
        </div>

        <p className="p-[10px] text-center text-[10px] text-[#434343] lg:hidden">
          © 2025, All Rights Reserved - MyJewel
        </p>
      </div>
      <div className="mx-20 hidden border-t-[1px] border-t-[#E4E4E4] lg:flex lg:items-center lg:justify-between">
        <p className="py-5 text-center text-[14px] text-[#434343]">
          &copy; 2025, All Rights Reserved - MyJewel
        </p>
        <div className="hidden items-center justify-between gap-7 pb-2 lg:flex">
          <p className="text-[12px] text-[#434343]">Terms & Conditions</p>
          <p className="text-[12px] text-[#434343]">Privacy Policy</p>
          <p className="text-[12px] text-[#434343]">Site Map</p>
          <div className="flex items-center gap-7">
            <Image src={Facebook} alt="facebook" />
            <Image src={Instagram} alt="instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
}
