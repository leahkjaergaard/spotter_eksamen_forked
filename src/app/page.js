import HeaderIndex from "./componets/HeaderIndex";
import TextAnimation from "../app/componets/TextAnnimation";
import Hero from "../app/componets/Hero";
import TextToHeader from "./componets/TextToHeader";

export default function Page() {
  return (
    <main>
      <HeaderIndex />
      <TextToHeader />
      <Hero />
      <TextAnimation />
    </main>
  )
}

