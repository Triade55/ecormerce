import React, { ReactNode } from "react";
import CardSection from "./CardSection";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { title } from "process";
import clsx from "clsx";
type Props = {
  children: ReactNode;
};

type PropsSectionHeader = {
  children: ReactNode;
  seeMore?: string;
  variant?: "between" | "center" | "end" | "start";
};
export function SectionHeader({
  children,
  seeMore,
  variant = "between",
}: PropsSectionHeader) {
  return (
    <div
      className={clsx(
        `text-2xl bg-primary p-4 text-white rounded-t-2xl flex justify-${variant} items-center`
      )}
    >
      {children}
      {seeMore && (
        <Link href="/" className="flex items-center gap-2 text-sm">
          voir plus <ChevronRight />
        </Link>
      )}
    </div>
  );
}
type PropsSectionContent = {
  children: ReactNode;
  number?:string
};
export default function SectionContent({ children,number="6" }: PropsSectionContent) {
  return <div className={`grid grid-cols-${number} p-4 gap-2`}>{children}</div>;
}

export function Section({ children }: Props) {
  return <section className="bg-white rounded-2xl">{children}</section>;
}
