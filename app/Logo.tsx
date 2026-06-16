/** NetWise mark — charcoal squircle + tri-color ascending bars.
 *  Mirrors the iOS app icon (AppIconDark). Pure SVG, scales crisply. */
export function Logo({
  size = 32,
  className,
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="NetWise"
      className={className}
      style={style}
    >
      <rect width="100" height="100" rx="22.37" fill="#2A2C2F" />
      <rect x="24" y="58" width="14" height="20" rx="4" fill="#8499AC" />
      <rect x="43" y="44" width="14" height="34" rx="4" fill="#D7A59B" />
      <rect x="62" y="28" width="14" height="50" rx="4" fill="#93BBA1" />
    </svg>
  );
}
