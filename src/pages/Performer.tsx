import { useEffect } from "react";
import Card from "../components/Card";

const Performer = () => {
  useEffect(() => {
    document.title = "TNS Website | Performer";
  }, []);

  return (
    <div className="min-h-[500px] w-[350px] lg:w-[80%] mx-auto mt-10">
      <p className="text-3xl font-bold text-blue-900">Diễn viên:</p>
      <div className="w-[80%] mx-auto mt-10 mb-10 flex justify-around flex-wrap">
        <Card url="minhtri.png" title="Lê Minh Trí" des="Vai diễn: Minh Trí" />
        <Card url="minhhuy.png" title="Lê Minh Huy" des="Vai diễn: Minh Huy" />
        <Card
          url="thienan.png"
          title="Triệu Hoàng Thiên Ân"
          des="Vai diễn: Thiên Ân"
        />
      </div>
      <div className="w-[60%] mx-auto mt-10 mb-10 flex justify-around flex-wrap">
        <Card
          url="haidang.png"
          title="Nguyễn Hải Đăng"
          des="Vai diễn: Thầy giáo"
        />
        <Card
          url="thaibao.png"
          title="Dương Ngọc Thái Bảo"
          des="Vai diễn: Thái Bảo"
        />
      </div>
    </div>
  );
};

export default Performer;
