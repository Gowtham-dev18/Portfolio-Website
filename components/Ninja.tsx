import React from "react";
import Image from "next/image";
import ninja from "@/app/images/ninja.png";

type NinjaProps = {
  className?: string;
  imageClassName?: string;
};

export default function Ninja({ className = "hero-ninja", imageClassName = "hero-ninja-img" }: NinjaProps) {
  return (
    <div className={className} aria-hidden="true">
      <Image
        src={ninja}
        alt=""
        priority
        draggable={false}
        width={560}
        height={620}
        className={imageClassName}
      />
    </div>
  );
}
