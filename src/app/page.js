import HeaderIndex from "./components/HeaderIndex";
import TextAnimation from "./components/TextAnnimation";
import Hero from "./components/Hero";
import TextToHeader from "./components/TextToHeader";

export default function Page() {
  return (
    <main>
      <HeaderIndex />
      <TextToHeader />
      <Hero />
      <TextAnimation />
    </main>
  );
}
