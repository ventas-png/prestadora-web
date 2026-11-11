type P = { size?: number };
const base = (size: number) => ({
  width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true,
});
export const IconChat = ({ size = 20 }: P) => (<svg {...base(size)}><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.5A8.4 8.4 0 1 1 21 11.5z" /></svg>);
export const IconLock = ({ size = 18 }: P) => (<svg {...base(size)}><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>);
export const IconBuilding = ({ size = 26 }: P) => (<svg {...base(size)}><path d="M3 21h18" /><path d="M5 21V8l7-5 7 5v13" /><path d="M9 21v-6h6v6" /></svg>);
export const IconDrop = ({ size = 26 }: P) => (<svg {...base(size)}><path d="M12 2.5S5 10.2 5 14.5a7 7 0 0 0 14 0C19 10.2 12 2.5 12 2.5z" /></svg>);
export const IconWrench = ({ size = 26 }: P) => (<svg {...base(size)}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z" /></svg>);
export const IconKey = ({ size = 26 }: P) => (<svg {...base(size)}><circle cx="8" cy="15" r="4" /><path d="m10.8 12.2 9.2-9.2" /><path d="m17 6 3 3" /><path d="m15 8 2 2" /></svg>);
export const IconShield = ({ size = 22 }: P) => (<svg {...base(size)}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>);
export const IconBolt = ({ size = 26 }: P) => (<svg {...base(size)}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" /></svg>);
export const IconMenu = ({ size = 24 }: P) => (<svg {...base(size)}><path d="M4 6h16M4 12h16M4 18h16" /></svg>);
export const serviceIcons = [IconBuilding, IconDrop, IconWrench, IconKey, IconBolt, IconShield];
