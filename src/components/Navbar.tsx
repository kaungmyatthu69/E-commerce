import Image from "next/image";

import CalendarIcon from "@/assets/icons/calendarIcon";
import HeartIcon from "@/assets/icons/heartIcon";
import BagIcon from "@/assets/icons/bagIcon";
import UserCircleIcon from "@/assets/icons/userCircleIcon";
import DownArrowIcon from "@/assets/icons/downArrowIcon";
import MenuBarIcon from "@/assets/icons/menuBarIcon";
import SearchIcon from "@/assets/icons/searchIcon";

import LogoImage from "@/assets/images/myJewel.svg";

type NavBarItem = string;
const narBarItems: NavBarItem[] = [
  "Jewelry",
  "Love and Engagement",
  "Gifts",
  "Custom Jewelry",
  "About",
  "Contact us",
];

export default function NavBar() {
  return (
    <nav className="flex flex-col justify-between bg-white">
      {/* <div className="flex items-center">
          <CalendarIcon />
          <span className="text-[#15274B]">Book an appointment</span>
        </div> */}
      <div className="flex w-full items-center justify-center gap-1.5 border-b-[1px] border-b-[#e4e4e4] py-1.5 lg:justify-between lg:px-11">
        <div className="hidden items-center gap-1.5 lg:flex">
          <CalendarIcon />
          <p className="text-[10px] uppercase tracking-wide text-[#15274B]">
            Book an appointment
          </p>
        </div>
        <div className="flex items-center justify-center gap-1.5">
          <div className="h-0.5 w-0.5 rounded-full bg-[#15274B]"></div>
          <p className="text-[8px] text-[#15274B] lg:text-[11px]">
            Exclusive Collection Launch: Discover Timeless Elegance Today
          </p>
          <div className="h-0.5 w-0.5 rounded-full bg-[#15274B]"></div>
        </div>
        <div className="hidden gap-5 lg:flex">
          <UserCircleIcon />
          <HeartIcon />
          <BagIcon />
        </div>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-between">
        <div className="border-r-[1px] border-[#e4e4e4] lg:py-6  pe-[53px] ps-[64px]">
          <Image src={LogoImage} alt="logo image" />
        </div>
        <div className="flex gap-4">
          {narBarItems.map((item, index) => (
            <div key={index} className="flex items-center  py-0.5 px-5 justify-center gap-2">
              <p className="uppercase text-[13px]">{item}</p>
              {index  < 3 ? 
              <DownArrowIcon />:''
}
            </div>
          ))}
        </div>
        <div className="border-s-[1px] border-[#e4e4e4] py-6 pe-8 ps-10">
          <SearchIcon width={'30px'} height={'30px'} />
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 px-3 pb-6 pt-4 lg:hidden">
        <div className="flex items-center gap-2.5">
          <MenuBarIcon />
          <CalendarIcon width={'18px'} height={'18px'}  />
        </div>

        <Image src={LogoImage} alt="logo image" />
        <div className="flex items-center gap-2.5">
          <HeartIcon />
          <div className="relative">
            <BagIcon />
            <div className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-[#434343] text-[7px] text-white">
              1
            </div>
          </div>
          <SearchIcon />
        </div>
      </div>
    </nav>
  );
}
