import BsBoxUpArrow from "@/assets/images/BsBoxArrowUpRight.svg"
import Image from "next/image"
const ExploreMoreButton=()=>{
    return (
        <div>
            <div className="flex items-center justify-center  rounded-full  w-[50px] h-[50px] border border-[#7A7A7A]">
                <Image src={BsBoxUpArrow} alt="arrow" />
            </div>
        </div>

    )
}
export default ExploreMoreButton;