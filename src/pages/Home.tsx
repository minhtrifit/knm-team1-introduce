import { useEffect } from "react";
import HomeContent from "../components/HomeContent";

const Home = () => {
  useEffect(() => {
    document.title = "TNS Website | Home";
  }, []);

  return (
    <div className="min-h-[500px]">
      <HomeContent />
    </div>
  );
};

export default Home;
