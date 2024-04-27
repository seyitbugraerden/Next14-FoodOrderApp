import About from "@/components/About";
import Campaigns from "@/components/Campaigns";
import Carousel from "@/components/Carousel";
import Reservation from "@/components/Reservation";
import Customers from "@/components/customers/Customers";
import MenuWrapper from "@/components/product/MenuWrapper";

export default function Home() {
  return (
    <main>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
      <Customers />
    </main>
  );
}
