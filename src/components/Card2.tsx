interface PropType {
  url: string;
  title: string;
  des: string;
}

const Card2 = (props: PropType) => {
  const { url, title, des } = props;
  return (
    <div className="w-[300px] lg:w-[800px] bg-white p-5 rounded-lg">
      <img src={url} alt="performer" className="w-[100%]" />
      <div>
        <p className="text-xl text-center font-bold mt-5 mb-3">{title}</p>
        <p className="text-md">{des}</p>
      </div>
    </div>
  );
};

export default Card2;
