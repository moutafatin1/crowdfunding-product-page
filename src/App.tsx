import { useState } from "react";
import { AboutCard } from "./components/AboutCard";
import { BackProjectCard } from "./components/BackProject/BackProjectCard";
import { Header } from "./components/Header/Header";
import { StatsCard } from "./components/StatsCard";
export type Crowd = {
  totalBacked: number;
  totalBackers: number;
};

const App = () => {
  const [crowd, setCrowd] = useState<Crowd>({
    totalBacked: 89914,
    totalBackers: 5007,
  });
  const backingProgress = (crowd.totalBacked / 100000) * 100;
  return (
    <>
      <Header />
      <main className="font-commissioner">
        <BackProjectCard />
        <StatsCard crowd={crowd} backingProgress={backingProgress} />
        <AboutCard />
      </main>
    </>
  );
};

export default App;
