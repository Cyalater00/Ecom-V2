import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SliderShow from "./components/SliderShow";

const slides = [
  {
    image: "napoliaway.jpeg",
    alt: "Image 1",
    title: "Welcome to Our Website",
    text: "Discover amazing products and services.",
  },
  {
    image: "newcastle.jpeg",
    alt: "Image 2",
    title: "Explore Endless Possibilities",
    text: "Find what you need and more.",
  },
  {
    image: "Brentford.jpeg",
    alt: "Image 2",
    title: "Explore Endless Possibilities",
    text: "Find what you need and more.",
  },
  // Add more slides as needed
];

const App = () => {
  return (
    <>
      <Header />
      <SliderShow slides={slides} />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
