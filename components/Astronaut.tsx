import React from "react";
import Image from "next/image";
import astronaut from "@/app/images/astronut.png";

export default function Astronaut() {
  return (
    <div className="astro-mount" aria-hidden="true">
      <div className="astro-swing">
        <span className="astro-thread astro-thread-l" />
        <span className="astro-thread astro-thread-r" />
        <Image
          src={astronaut}
          alt=""
          priority
          draggable={false}
          className="astro-img"
        />
      </div>
    </div>
  );
}
