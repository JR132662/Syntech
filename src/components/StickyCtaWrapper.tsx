"use client";

import dynamic from "next/dynamic";

const StickyCta = dynamic(() => import("./StickyCta"), { ssr: false });

export default function StickyCtaWrapper() {
  return <StickyCta />;
}
