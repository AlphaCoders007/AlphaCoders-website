import { cn } from "@/app/lib/utils";
import { Marquee } from "@/app/components/ui/ParallexUI";

// Sample images
const reviews = [
  {
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    img: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

// Randomly insert "Meet", "The", or "Team" into the rows
const firstRow = reviews.slice(0, 3);
const secondRow = reviews.slice(0, 4);
const thirdRow = reviews.slice(0, 4);


const texts = ["Meet", "The", "Team"];

const insertRandomText = (row: any[]) => {
  const rowCopy = [...row];
  const randomText = texts[Math.floor(Math.random() * texts.length)];
  const randomIndex = Math.floor(Math.random() * rowCopy.length);
  
  rowCopy.splice(randomIndex, 0, { text: randomText }); // Insert random text at random index
  return rowCopy;
};

const firstRowWithText = insertRandomText(firstRow);
const secondRowWithText = insertRandomText(secondRow);
const thirdRowWithText = insertRandomText(thirdRow);


const ReviewCard = ({ img, text }: { img: string; text?: string }) => {
  return (
    <figure
      className={cn(
        "relative w-48 h-48 cursor-pointer overflow-hidden rounded-md shadow-md", // Larger size here
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      {text ? (
        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
          {text}
        </div>
      ) : (
        // Square-shaped image
        <img
          className="object-cover w-full h-full"
          alt="Review Image"
          src={img}
        />
      )}
    </figure>
  );
};

export function ParallexSection() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRowWithText.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRowWithText.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRowWithText.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      {/* Gradient overlays for visual effect */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}