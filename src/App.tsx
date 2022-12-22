import { AboutCard } from "./components/AboutCard";
import { BackProjectCard } from "./components/BackProject/BackProjectCard";
import { Header } from "./components/Header/Header";
import { StatsCard } from "./components/StatsCard";

const App = () => {
  return (
    <>
      <Header />
      <main className="font-commissioner">
        <BackProjectCard />
        <StatsCard />
        <AboutCard />
      </main>
    </>
  );
};

export default App;
