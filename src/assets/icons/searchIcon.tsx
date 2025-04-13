type SearchIconProps = {
  width?: string | number;
  height?: string | number;
};

export default function SearchIcon({
  width = "1.188rem",
  height = "1.188rem",
}: SearchIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M8.04499 3.74874C7.19523 3.74874 6.36456 4.00073 5.65801 4.47283C4.95146 4.94493 4.40077 5.61594 4.07559 6.40102C3.7504 7.18609 3.66531 8.04996 3.83109 8.88339C3.99687 9.71682 4.40607 10.4824 5.00694 11.0832C5.60781 11.6841 6.37336 12.0933 7.20679 12.2591C8.04022 12.4249 8.9041 12.3398 9.68917 12.0146C10.4742 11.6894 11.1453 11.1387 11.6174 10.4322C12.0895 9.72563 12.3414 8.89496 12.3414 8.0452C12.3414 6.90573 11.8887 5.81295 11.083 5.00723C10.2772 4.2015 9.18446 3.74882 8.04499 3.74874Z"
        stroke="#434343"
        strokeMiterlimit="10"
      />
      <path
        d="M11.2494 11.2506L14.25 14.2512"
        stroke="#434343"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
}
