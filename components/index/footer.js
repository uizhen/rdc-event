const Footer = () => {
  return (
    <div className="absolute z-10 w-full py-20 lg:px-[11rem] ">
      <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center">
        <img
          className="w-[20rem] h-[10rem]"
          src="http://www.coalmongolia.mn/wp-content/uploads/2022/05/22-logo-white-mon.png"
        />
        <div className="flex items-center gap-7 cursor-pointer  hidden md:hidden lg:flex lg:flex-row">
          <div>Хөтөлбөр</div>
          <div>Үзэсгэлэн</div>
          <div>Спонсор</div>
          <div>Мандат</div>
          <div>Танилцуулга</div>
        </div>
      </div>
      <div className="w-full  border-b pt-10 opacity-[0.5]"></div>
    </div>
  );
};

export default Footer;
