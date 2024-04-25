import Reviews from "@/components/customers/reviews";
import Cars from "@/components/fleet/cars";
import Footer from "@/components/footer/footer";
import Forms from "@/components/forms/forms";
import Header from "@/components/header";
import Hero from "@/components/hero/hero";
import How from "@/components/how-it-works/how-it-works";
import LogoBanner from "@/components/logo_banner";
import Why from "@/components/why/why";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <LogoBanner />
      <Cars />
      <Why />
      <Reviews />
      <How />
      <Forms />
      <Footer />
    </main>
  );
}
