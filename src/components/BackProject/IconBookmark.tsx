type IconBookmarkProps = {
  isBookmarked: boolean;
};

export const IconBookmark = ({ isBookmarked }: IconBookmarkProps) => {
  const circleColor = isBookmarked ? "hsl(176 50% 47%)" : "#2F2F2F";
  const pathColor = isBookmarked ? "white" : "#B1B1B1";
  return (
    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd">
        <circle fill={circleColor} cx="28" cy="28" r="28" />
        <path fill={pathColor} d="M23 19v18l5-5.058L33 37V19z" />
      </g>
    </svg>
  );
};
