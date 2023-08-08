import { useEffect } from "react";
import Card from "../components/Card";
import Card2 from "../components/Card2";

const DirectorFilm = () => {
  useEffect(() => {
    document.title = "TNS Website | Director Film";
  }, []);

  return (
    <div className="min-h-[500px] w-[350px] lg:w-[80%] mx-auto mt-10">
      <p className="text-3xl text-center font-bold text-blue-900">
        Director/Film:
      </p>
      <div className="w-[80%] mx-auto mt-10 mb-10 flex justify-around flex-wrap">
        <Card url="dinhbao.png" title="Bùi Đình Bảo" des="Hậu cần, quay phim" />
      </div>
      <p className="text-3xl mt-10 mb-10 font-bold text-blue-900">
        Official Lineup:
      </p>
      <div className="w-[80%] mx-auto mt-10 mb-10 flex justify-around flex-wrap">
        <Card2
          url="team.png"
          title="Tốt nghiệp sớm"
          des="Kỹ năng mềm - team 1"
        />
      </div>
    </div>
  );
};

export default DirectorFilm;
