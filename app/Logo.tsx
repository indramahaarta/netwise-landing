/** NetWise mark — white squircle + tri-color ascending bars.
 *  Mirrors the iOS app icon (Assets.xcassets/AppIcon, "Clear" palette:
 *  accent blue · expense red · income green). Pure SVG, scales crisply. */
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
      <rect
        x="0.9"
        y="0.9"
        width="98.2"
        height="98.2"
        rx="22.37"
        fill="#FFFFFF"
        stroke="#EAEBEE"
        strokeWidth="1.8"
      />
      <rect x="24" y="58" width="14" height="20" rx="4" fill="#3E6FA8" />
      <rect x="43" y="44" width="14" height="34" rx="4" fill="#D85A4A" />
      <rect x="62" y="28" width="14" height="50" rx="4" fill="#1F9D5B" />
    </svg>
  );
}
