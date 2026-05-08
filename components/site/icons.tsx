import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const lineProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round"
} as const;

export function PetIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 56 56" {...lineProps} {...props}>
      <path d="M13 21 L15 9 L23 18" />
      <path d="M43 21 L41 9 L33 18" />
      <path d="M13 21 C9 30 12 43 28 45 C44 43 47 30 43 21" />
      <circle cx="22" cy="28" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="34" cy="28" r="1.4" fill="currentColor" stroke="none" />
      <path d="M21 36 L24 39 L28 35 L32 39 L35 36" />
    </svg>
  );
}

export function GameIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 56 56" {...lineProps} {...props}>
      <path d="M28 6 L50 28 L28 50 L6 28 Z" />
      <path d="M28 16 L40 28 L28 40 L16 28 Z" />
      <circle cx="28" cy="28" r="2" fill="currentColor" stroke="none" />
      <path d="M28 6 L28 12 M50 28 L44 28 M28 50 L28 44 M6 28 L12 28" strokeOpacity="0.5" />
    </svg>
  );
}

export function InteractiveIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 56 56" {...lineProps} {...props}>
      <circle cx="16" cy="28" r="9" />
      <path d="M13 24 L13 32 L20 28 Z" fill="currentColor" stroke="none" />
      <path d="M25 28 Q34 20 42 12" />
      <path d="M25 28 L42 28" />
      <path d="M25 28 Q34 36 42 44" />
      <circle cx="44" cy="12" r="3" />
      <circle cx="44" cy="28" r="3" />
      <circle cx="44" cy="44" r="3" />
    </svg>
  );
}

export function ToyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 56 56" {...lineProps} {...props}>
      <path d="M10 22 L28 14 L46 22 L28 30 Z" />
      <path d="M10 22 L10 42 L28 50 L46 42 L46 22" />
      <path d="M28 30 L28 50" strokeOpacity="0.5" />
      <path d="M22 18 L23 11 M34 18 L33 11" />
      <circle cx="23" cy="22" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="33" cy="22" r="0.9" fill="currentColor" stroke="none" />
      <path d="M25 25 L31 25" strokeOpacity="0.6" />
    </svg>
  );
}

export function CoreTeamIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 56 56" {...lineProps} {...props}>
      <path d="M28 16 L38 22 L38 34 L28 40 L18 34 L18 22 Z" />
      <circle cx="28" cy="28" r="2.4" />
      <circle cx="28" cy="28" r="0.9" fill="currentColor" stroke="none" />
      <path d="M28 16 L28 8 M28 40 L28 48 M38 22 L44 18 M38 34 L44 38 M18 22 L12 18 M18 34 L12 38" />
      <circle cx="28" cy="8" r="1.8" />
      <circle cx="28" cy="48" r="1.8" />
      <circle cx="44" cy="18" r="1.8" />
      <circle cx="44" cy="38" r="1.8" />
      <circle cx="12" cy="18" r="1.8" />
      <circle cx="12" cy="38" r="1.8" />
    </svg>
  );
}

export function LifecycleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 56 56" {...lineProps} {...props}>
      <path d="M28 12 Q44 12 44 28" />
      <path d="M40 24 L44 28 L48 24" />
      <path d="M44 28 Q44 44 28 44" />
      <path d="M32 40 L28 44 L32 48" />
      <path d="M28 44 Q12 44 12 28" />
      <path d="M16 32 L12 28 L8 32" />
      <path d="M12 28 Q12 12 28 12" />
      <path d="M24 16 L28 12 L24 8" />
      <circle cx="28" cy="28" r="4" />
      <circle cx="28" cy="28" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FusionIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 56 56" {...lineProps} {...props}>
      <circle cx="20" cy="28" r="14" strokeDasharray="2 3" />
      <circle cx="36" cy="28" r="14" />
      <circle cx="28" cy="28" r="3.5" fill="currentColor" stroke="none" />
      <circle cx="6" cy="28" r="1.6" />
      <circle cx="50" cy="28" r="1.6" />
      <circle cx="28" cy="10" r="1.6" />
      <circle cx="28" cy="46" r="1.6" />
    </svg>
  );
}

export function WechatQrPlaceholder() {
  return (
    <svg viewBox="0 0 80 80" fill="currentColor" aria-hidden="true">
      <path d="M3 3h22v22H3zM7 7v14h14V7zM10 10h8v8h-8z" fillRule="evenodd" />
      <path d="M55 3h22v22H55zM59 7v14h14V7zM62 10h8v8h-8z" fillRule="evenodd" />
      <path d="M3 55h22v22H3zM7 59v14h14V59zM10 62h8v8h-8z" fillRule="evenodd" />
      <path d="M37 37h6v6h-6zM39 39h2v2h-2z" fillRule="evenodd" />
      {[29, 35, 47].map((x) => <rect key={`a-${x}`} x={x} y="3" width="3" height="3" />)}
      {[29, 41].map((x) => <rect key={`b-${x}`} x={x} y="9" width="3" height="3" />)}
      {[35, 47].map((x) => <rect key={`c-${x}`} x={x} y="15" width="3" height="3" />)}
      {[29, 41, 47].map((x) => <rect key={`d-${x}`} x={x} y="21" width="3" height="3" />)}
      {[3, 15, 59, 65].map((x) => <rect key={`e-${x}`} x={x} y="29" width="3" height="3" />)}
      {[9, 21, 71].map((x) => <rect key={`f-${x}`} x={x} y="35" width="3" height="3" />)}
      {[3, 21, 59].map((x) => <rect key={`g-${x}`} x={x} y="41" width="3" height="3" />)}
      {[15, 71, 35, 41, 47].map((x) => <rect key={`h-${x}`} x={x} y="47" width="3" height="3" />)}
      {[3, 59, 65].map((x) => <rect key={`i-${x}`} x={x} y="53" width="3" height="3" />)}
      {[29, 41].map((x) => <rect key={`j-${x}`} x={x} y="59" width="3" height="3" />)}
      {[29, 47].map((x) => <rect key={`k-${x}`} x={x} y="65" width="3" height="3" />)}
      <rect x="35" y="71" width="3" height="3" />
    </svg>
  );
}

export function WuxingVisual() {
  return (
    <svg viewBox="0 0 240 240" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="120" cy="120" r="105" strokeDasharray="2 8" opacity="0.35" />
      <circle cx="120" cy="120" r="68" />
      <path d="M120 52 L182 100 L158 173 L82 173 L58 100 Z" strokeOpacity="0.4" />
      {[
        ["120", "52", "金"],
        ["182", "100", "木"],
        ["158", "173", "水"],
        ["82", "173", "火"],
        ["58", "100", "土"]
      ].map(([cx, cy, label]) => (
        <g key={label}>
          <circle cx={cx} cy={cy} r="20" />
          <text x={cx} y={Number(cy) + 7} textAnchor="middle" fontFamily="Noto Serif SC Local, serif" fontSize="22" fontWeight="900" fill="currentColor" stroke="none">
            {label}
          </text>
        </g>
      ))}
      <circle cx="120" cy="120" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ChaoPetsVisual() {
  return (
    <svg viewBox="0 0 240 240" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="120" cy="120" r="105" strokeDasharray="2 8" opacity="0.35" />
      <circle cx="120" cy="120" r="78" />
      <path d="M120 64 C116 56 106 56 106 66 C106 74 120 84 120 84 C120 84 134 74 134 66 C134 56 124 56 120 64 Z" />
      <ellipse cx="120" cy="148" rx="32" ry="20" />
      <circle cx="120" cy="120" r="22" />
      <path d="M105 105 L108 94 L116 107" />
      <path d="M135 105 L132 94 L124 107" />
      <circle cx="113" cy="121" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="127" cy="121" r="1.6" fill="currentColor" stroke="none" />
      <path d="M118 128 Q120 130 122 128" />
      <path d="M150 150 Q174 144 170 118 Q166 105 156 106" />
      {[
        ["120", "14"], ["226", "120"], ["120", "226"], ["14", "120"]
      ].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" fill="currentColor" stroke="none" />)}
      <text x="120" y="205" textAnchor="middle" fontFamily="Outfit" fontSize="9" letterSpacing="5" fill="currentColor" stroke="none" opacity="0.7">IDLE · COMPANION</text>
    </svg>
  );
}

export function BoyfriendVisual() {
  return (
    <svg viewBox="0 0 240 240" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="120" cy="120" r="105" strokeDasharray="2 8" opacity="0.35" />
      <circle cx="120" cy="120" r="78" strokeDasharray="1 4" opacity="0.2" />
      <path d="M120 92 C108 72 78 72 78 102 C78 130 120 152 120 152 C120 152 162 130 162 102 C162 72 132 72 120 92 Z" />
      <path d="M82 108 Q60 105 48 85 M82 132 Q60 148 50 175 M158 108 Q180 105 192 85 M158 132 Q180 148 190 175" />
      {[
        ["48", "85"], ["50", "175"], ["192", "85"], ["190", "175"]
      ].map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="4" fill="currentColor" stroke="none" />
          <circle cx={cx} cy={cy} r="11" strokeOpacity="0.5" />
        </g>
      ))}
      <text x="120" y="200" textAnchor="middle" fontFamily="Outfit" fontSize="9" letterSpacing="6" fill="currentColor" stroke="none" opacity="0.7">CHOOSE YOUR PATH</text>
    </svg>
  );
}
