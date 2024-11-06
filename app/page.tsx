import Explore from "./components/explore";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import NewsLetter from "./components/latest-news-letter";
import NewsBrief from "./components/news-brief";
import NewsExplainer from "./components/news-explainer";
import TodaysEdition from "./components/todays-edition";
import TopStories from "./components/top-stories";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <NewsBrief />
      <TodaysEdition />
      <NewsExplainer />
      <TopStories />
      <NewsLetter />
      <Explore />
      <Footer />
    </div>
  );
}
