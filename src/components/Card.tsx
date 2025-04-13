import Image from "next/image";

type CardProps = {
  item: {
    icon: string;
    title: string;
    description: string;
  };
};

export default function Card({ item }: CardProps) {
  console.log("item", item);
  return (
    <div className="flex flex-col items-center bg-white z-10 p-5 gap-4 shadow-[0_2px_8px_0_rgba(99,99,99,0.2)]">
      <Image src={item.icon} alt="icon" />
      <h2 className="font-header font-semibold text-[#15274B]">{item.title}</h2>
      <p className="text-[#7A7A7A] text-sm text-center">{item.description}</p>
    </div>
  );
}
