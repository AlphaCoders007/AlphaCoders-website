import Image from "next/image";
import React from "react";
import { cn } from "@/app/lib/utils";
import Link from "next/link";
import MagicalButton from "./MinimalButton";

export const Card = React.memo(
  ({
    card,
    href,
  }: {
    card: Card;
    href: string;
  }) => (
    <Link href={href} passHref>
      <div
        className={cn(
          "rounded-lg relative z-50 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out cursor-pointer"
        )}
      >
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end py-8 px-4 transition-opacity duration-300 text-textcolor-yellow">
          {/* Title */}
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </div>
          {/* Description */}
          <div className="text-sm md:text-base text-textcolor-yellow mt-2">
            {card.description}
          </div>
          {/* <Link
          href={card.path}
          >
            <div> */}

          {/* <MagicalButton /> */}
            {/* </div>
          </Link> */}
        </div>
      </div>
    </Link>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  description: string;
  path:string
};

export function FocusCardsUi({ cards }: { cards: Card[] }) {
  const rowRoutes = ["/weimagine", "/wedesign", "/wecreate"];

  const rows = Array.from({ length: Math.ceil(cards.length / 3) }, (_, i) =>
    cards.slice(i * 3, i * 3 + 3)
  );

  return (
    <div className="grid py-5 gap-10 mx-auto max-w-7xl w-full">
      {rows.map((rowCards, rowIndex) => (
        <div
          key={rowIndex}
          className="grid grid-cols-1 px-4 md:grid-cols-3 md:px-8 gap-10 w-full"
        >
          {rowCards.map((card, cardIndex) => (
            <Card
              key={cardIndex}
              card={card}
              href={rowRoutes[rowIndex]} // Pass the route as a link
            />
          ))}
        </div>
      ))}
    </div>
  );
}
