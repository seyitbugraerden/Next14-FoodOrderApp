import Header from "@/components/layouts/Header";
import Carousel from "@/components/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <main>
      <Header />
      <Carousel/>
    </main>
  );
}
