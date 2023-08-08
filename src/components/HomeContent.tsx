const HomeContent = () => {
  return (
    <div className="w-[100%] flex flex-col items-center md:flex-row md:justify-center py-10">
      <div className="w-[300px] md:w-[500px] md:mr-8">
        <img src="poster.png" alt="poster" className="w-[100%]" />
      </div>
      <div className="md:ml-8 flex flex-col justify-center">
        <p className="font-bold text-center md:text-left text-5xl w-[400px] mb-10">
          BEING BIGGER THAN YOURSELF
        </p>
        <p className="text-center md:text-left">
          Một sản phẩm của nhóm tốt nghiệp sớm...
        </p>
        <div className="flex justify-around mt-10">
          <div className="bg-red-700 w-[140px] h-[50px] text-white text-center leading-[50px] font-bold rounded-3xl hover:cursor-pointer hover:bg-red-500">
            Video
          </div>
          <div className="w-[140px] h-[50px] border-gray-950 border border-solid text-center leading-[45px] font-bold rounded-3xl hover:cursor-pointer hover:bg-gray-500 hover:text-white">
            Learn more
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
