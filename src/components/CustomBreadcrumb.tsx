type BreadcrumbProps = {
  items: string[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="flex gap-1 text-sm">
      {items.map((item, index) => (
        <p
          key={index}
          className={index !== items.length - 1 ? "text-[#7A7A7A]" : ""}
        >
          {item}
          {index !== items.length - 1 && " / "}
        </p>
      ))}
    </div>
  );
}
