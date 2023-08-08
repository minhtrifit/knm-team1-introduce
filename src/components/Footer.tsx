const Footer = () => {
  return (
    <div className="pt-[100px] text-white bg-violet-950">
      <div className="w-[80%] mx-auto flex flex-col items-center md:flex-row justify-between">
        <div className="">
          <div className="w-[100px] mb-5">
            <img src="logo.png" alt="logo" />
          </div>
          <p>Một sản phẩm của nhóm: Tốt nghiệp sớm</p>
          <p>Ngày công chiếu: comming soon</p>
        </div>
        <div className="my-20 md:my-0">
          <p className="text-xl font-bold mb-5">Menu</p>
          <div className="flex">
            <div className="bg-red-700 mr-5 w-[140px] h-[50px] text-white text-center leading-[50px] font-bold rounded-3xl hover:cursor-pointer hover:bg-red-500">
              Subcribe now
            </div>
            <div className="bg-red-700 ml-5 w-[140px] h-[50px] text-white text-center leading-[50px] font-bold rounded-3xl hover:cursor-pointer hover:bg-red-500">
              Subcribe now
            </div>
          </div>
        </div>
        <div>
          <p className="text-xl font-bold mb-5">Stay In The Loop</p>
          <p className="w-[300px] text-justify mb-5">
            Tham gia danh sách tin nhắn của chúng tôi để nhận được những cập
            nhập mới nhất
          </p>
          <div className="relative">
            <input
              className="w-[300px] mb-5 bg-white text-black px-5 py-5 rounded-3xl"
              value="Nhập email"
            />
            <div className="absolute right-2 top-2 bg-red-700 ml-5 w-[140px] h-[50px] text-white text-center leading-[50px] font-bold rounded-3xl hover:cursor-pointer hover:bg-red-500">
              Subcribe now
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-center mt-16 w-[80%] mx-auto py-[20px]"
        style={{ borderTop: "1px solid gray" }}
      >
        Copyright ©: Tốt nghiệp sớm - since 2023
      </div>
    </div>
  );
};

export default Footer;
