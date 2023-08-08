import { useEffect } from "react";

const Story = () => {
  useEffect(() => {
    document.title = "TNS Website | Story";
  }, []);

  return (
    <div className="min-h-[500px]">
      <p className="text-center text-4xl font-bold mt-10">CỐT TRUYỆN</p>
      <div className="text-md lg:text-xl text-justify mt-10 mb-10 w-[350px] lg:w-[800px] mx-auto">
        Kể về nhân vật Trí, cảnh đầu tiên là lúc Trí bắt đầu dậy, chuẩn bị cá
        nhân và đến trường (có thể là Ú). Khi Trí bước vào lớp, sẽ có 1 thầy
        Đăng đứng lớp và nhân vật quần chúng Huy, Ân, Bảo. Ngày qua ngày, các
        bài kiểm tra của Trí điểm không được cao và bị Huy, Ân, Bảo chế giễu.
        Sau đó thầy giáo Đăng tới và nói câu gì đó truyền động lực, chỉ ra những
        điểm sai sót trong bài mà chỉ cần làm thêm 1 chút xíu nữa thôi là Trí có
        điểm, vậy là Trí cố gắng học để chuẩn bị cho lần thi cuối kì sắp tới.
        Nhưng trong lần thi cuối kì đó, điểm số của Trí vẫn không đạt như mong
        muốn, nhưng thầy Đăng nói là: "Em có thấy điểm của em đã tiến bộ hơn so
        với các lần trước không, đó chính là việc em đã lớn hơn với chính bản
        thân mình những ngày hôm trước 2 rồi, chỉ cần cố gắng hơn bản thân em
        ngày hôm nay nữa và mỗi ngày sau, em sẽ làm được". Từ đó, Trí đã cố gắng
        hơn nhiều trong cuộc sống và gặt hái được một số thành tựu.
      </div>
    </div>
  );
};

export default Story;
