import React from "react";
import Hero from "./components/Hero";
import { Whatwedo } from "./components/Whatwedo";
import Cards from "./components/Cards";
import ContactSection from "./components/ContactSection";
import Carousel from "./components/ui/CarouselUI";
import Card from "./components/Card";


const itemsArray = [
  <Card key={1} card={{ src: "image1.jpg", title: "Websites", category: "Category 1", content: <p>Some content for card 1</p> }} index={0} />,
  <Card key={2} card={{ src: "image2.jpg", title: "Card 2", category: "Category 2", content: <p>Some content for card 2</p> }} index={1} />,
  <Card key={3} card={{ src: "image3.jpg", title: "Card 3", category: "Category 3", content: <p>Some content for card 3</p> }} index={2} />,
  <Card key={3} card={{ src: "image4.jpg", title: "Card 3", category: "Category 3", content: <p>Some content for card 3</p> }} index={2} />,

  <Card key={3} card={{ src: "image1.jpg", title: "Card 3", category: "Category 3", content: <p>Some content for card 3</p> }} index={2} />,

  <Card key={3} card={{ src: "image2.jpg", title: "Card 3", category: "Category 3", content: <p>Some content for card 3</p> }} index={2} />,
  <Card key={3} card={{ src: "image3.jpg", title: "Card 3", category: "Category 3", content: <p>Some content for card 3</p> }} index={2} />,
  <Card key={3} card={{ src: "image4.jpg", title: "Card 3", category: "Category 3", content: <p>Some content for card 3</p> }} index={2} />,
  <Card key={3} card={{ src: "image2.jpg", title: "Card 3", category: "Category 3", content: <p>Some content for card 3</p> }} index={2} />,
  <Card key={3} card={{ src: "image1.jpg", title: "Card 3", category: "Category 3", content: <p>Some content for card 3</p> }} index={2} />,

];
function Page() {

  
  return (
    <div>
      <Hero />
      <Carousel items={itemsArray} />
      <Whatwedo />
      <ContactSection />
    </div>
  );
}

export default Page;
