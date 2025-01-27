import Image from "next/image";
import React from "react";
import { cn } from "@/app/lib/utils";
import Link from "next/link";

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
          "rounded-lg relative z-50 overflow-hidden h-60 md:h-[75vh] w-full transition-all duration-300 ease-out cursor-pointer transform hover:scale-[1.03] hover:-translate-y-1"
        )}
        style={{ perspective: "1000px" }}
      >
        <div
          className="relative w-full h-full transform transition-transform duration-500 ease-in-out hover:rotate-x-6 hover:rotate-y-6"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <Image
            src={card.src}
            alt={card.title}
            fill
            className="object-cover absolute inset-0 rounded-lg"
            style={{
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end py-8 px-4 transition-opacity duration-300 text-textcolor-yellow rounded-lg">
            {/* Title */}
            <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
              {card.title}
            </div>
            {/* Description */}
            <div className="text-sm md:text-base text-textcolor-yellow mt-2">
              {card.description}
            </div>
          </div>
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
};

export function FocusCardsUi({
  cards,
  className,
}: {
  cards: Card[];
  className: string;
}) {
  // Define routes for rows
  const rowRoutes = ["/weimagine", "/wedesign", "/wecreate"];

  // Group cards into rows
  const rows = Array.from({ length: Math.ceil(cards.length / 3) }, (_, i) =>
    cards.slice(i * 3, i * 3 + 3)
  );

  return (
    <div className={`grid py-5 h-100vh gap-10 mx-auto w-full ${className}`}>
      {rows.map((rowCards, rowIndex) => (
        <div
          key={rowIndex}
          className="grid grid-cols-1 px-4 md:grid-cols-3 md:px-5 gap-5 w-full"
        >
          {rowCards.map((card, cardIndex) => (
            <Card
              key={cardIndex}
              card={card}
              href={rowRoutes[rowIndex] || "#"} // Use the corresponding route for the row, or fallback to "#"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
