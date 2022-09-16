import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";

const Sponsor = () => {
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const [clicked5, setClicked5] = useState(false);

  const click = () => {
    setClicked(true);
  };
  const unclick = () => {
    setClicked(false);
  };
  const click2 = () => {
    setClicked2(true);
  };
  const unclick2 = () => {
    setClicked2(false);
  };
  const click3 = () => {
    setClicked3(true);
  };
  const unclick3 = () => {
    setClicked3(false);
  };
  const click4 = () => {
    setClicked4(true);
  };
  const unclick4 = () => {
    setClicked4(false);
  };
  const click5 = () => {
    setClicked5(true);
  };
  const unclick5 = () => {
    setClicked5(false);
  };

  return (
    <div className="bg-[white] flex flex-col justify-center items-center">
      <div className="flex flex-col pt-10 md:flex-row gap-20 z-10">
        <img
          className="w-[14rem] h-[4rem]"
          src="http://www.coalmongolia.mn/wp-content/uploads/2022/08/energy.png"
        />
        <img
          className="w-[14rem] h-[4rem]"
          src="http://www.coalmongolia.mn/wp-content/uploads/2022/08/MERA-logo3.png"
        />
      </div>
      <span className="border-b w-[80%]">1</span>
      <div className="flex gap-20 items-center py-5 z-10 flex-col md:flex-row">
        <img
          className="w-[14rem] h-[4rem]"
          src="http://www.coalmongolia.mn/wp-content/uploads/2022/08/AODE-LLC-LOGO-GUIDE_6-01-2.png"
        />
        <img
          className="w-[14rem] h-[4rem]"
          src="http://www.coalmongolia.mn/wp-content/uploads/2022/08/grand.png"
        />
        <img
          className="w-[14rem]"
          src="http://www.coalmongolia.mn/wp-content/uploads/2022/08/taiho-2.png"
        />
      </div>
      <span className="border-b w-[80%]">1</span>
      <div className="min-h-[20rem] w-full py-8 z-10 flex flex-col  items-center">
        <img
          className="w-[8rem] h-[6rem]"
          src="http://www.coalmongolia.mn/wp-content/uploads/2022/05/03.png"
        />
        <div className="flex flex-col items-center pt-10 gap-y-2">
          <b className="text-black text-[24px]">10 ДАХЬ ЖИЛДЭЭ</b>

          <p className="text-black w-[16rem] md:w-[50rem] lg:w-[55rem] text-center">
            “Coal Mongolia” нүүрсний салбарын худалдаа, хөрөнгө оруулалтын Олон
            Улсын чуулга уулзалт, үзэсгэлэн нь Монгол Улсын нүүрсний салбарт
            хөрөнгө оруулалт татах, шинэ техник технологи нэвтрүүлэх, нүүрсний
            экспорт, худалдаа, тээвэр ложистикийг сайжруулах, Азийн зах зээлд
            Монголын нүүрсний салбарын өрсөлдөх чадварыг бэхжүүлэх зорилгоор
            2011 оноос жил бүр амжилттай зохион байгуулагдсаар ирсэн билээ.
          </p>
        </div>
      </div>
      <div className="flex flex-col mx-5  lg:flex-row  text-black gap-10 mt-10">
        <div className="bg-[#e8eaed] md:w-[20rem] lg:w-[25rem]  gap-y-6 py-10 px-2 flex flex-col justify-center items-center">
          <b className="text-[25px]">Хөтөлбөр</b>
          <p className="text-center">
            10 дахь удаагийн “Coal Mongolia-2022” нь “Сэргэлтийг хамтдаа” уриан
            дор зохион байгуулагдана.
          </p>
          <div className=" text-white bg-black h-12 px-6 flex items-center gap-1">
            <h1>Дэлгэрэнгүй</h1>
            <BsFillArrowRightCircleFill size={"15"} />
          </div>
        </div>
        <div className="bg-[#e8eaed] md:w-[20rem] lg:w-[25rem] gap-y-4 py-10 px-2 flex flex-col justify-center items-center">
          <b className="text-[25px]">Үзэсгэлэн</b>
          <p className="text-center">
            10 дахь удаагийн “Coal Mongolia-2022” нь “Сэргэлтийг хамтдаа” уриан
            дор зохион байгуулагдана.
          </p>
          <div className=" text-white bg-black h-12 px-6 flex items-center gap-1">
            <h1>Дэлгэрэнгүй</h1>
            <BsFillArrowRightCircleFill size={"15"} />
          </div>
        </div>
        <div className="bg-[#e8eaed] md:w-[20rem] lg:w-[25rem] gap-y-4 py-10 px-2 flex flex-col justify-center items-center">
          <b className="text-[25px]">Оролцогчид</b>
          <p className="text-center">
            10 дахь удаагийн “Coal Mongolia-2022” нь “Сэргэлтийг хамтдаа” уриан
            дор зохион байгуулагдана.
          </p>
          <div className=" text-white bg-black h-12 px-6 flex items-center gap-1">
            <h1>Дэлгэрэнгүй</h1>
            <BsFillArrowRightCircleFill size={"15"} />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center my-10 text-black">
        <h1 className="px-4 lg:px-0">
          2011 оноос хойш давхардсан тоогоор 17,256 зочид, төлөөлөгчид зочид
          Coal Mongolia-д оролцсон байна.
        </h1>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center gap-20">
        <div className="text-black grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          <div className="flex flex-col items-center lg:items-start">
            <b className="text-[62px] text-[#012f4d]">7084</b>
            <h1>Нийт хурлын зочид, төлөөлөгчид</h1>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <b className="text-[62px] text-[#012f4d]">527</b>
            <h1>Үзэсгэлэн гаргасан компани</h1>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <b className="text-[62px] text-[#012f4d]">55%</b>
            <h1>Дээд шатны удирдлага</h1>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <b className="text-[62px] text-[#012f4d]">79%</b>
            <h1>Бизнесийн төлөөлөл</h1>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/742492879?h=aba9faf4c3"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="w-full text-center text-black">Supporting logo</div>
      <div className="w-full bg-[#012f4d]">
        <img
          className="w-full h-[25rem] z-0 absolute"
          src="http://www.coalmongolia.mn/wp-content/uploads/2022/05/lines.png?id=74"
        />
        <div className=" lg:w-full flex items-center z-10 flex flex-col">
          <b className="text-[26px]">ЧУУЛГАНЫ ТУХАЙ</b>
          <div className="lg:w-[54rem] p-4">
            <div
              onClick={clicked ? unclick : click}
              className=" border-b p-4 relative cursor-pointer"
            >
              <h1 className="z-10">Энэ жилийн чуулганы уриа юу вэ?</h1>
              <div
                className={
                  clicked
                    ? `transition-all duration-700 -mt-10 -translate-y-16 opacity-[0] z-0`
                    : `transition-all duration-700 mt-8 `
                }
              >
                10 дах удаагийн “Coal Mongolia-2022” нь “Сэргэлтийг хамтдаа”
                уриан дор 2022 оны 9-р сарын 7-8 өдрүүдэд, ШангриЛа Улаанбаатар
                зочид буудалд өндөр дээд хэмжээнд зохион байгуулагдана.
              </div>
            </div>
            <div
              onClick={clicked2 ? unclick2 : click2}
              className=" border-b p-4 relative cursor-pointer"
            >
              <h1>Энэ жилийн чуулганы онцлог ба зорилт</h1>
              <div
                className={
                  clicked2
                    ? `transition-all duration-700 -mt-[11rem] -translate-y-16 opacity-[0] z-0`
                    : `transition-all duration-700 mt-8`
                }
              >
                Монгол Улсын нүүрс экспорт түүхэн дээд хэмжээнд хүрч коксжих
                нүүрснээс гадна антрацит болон эрчим хүчний , нүүрсийг баяжуулж
                экспортлож эхэлсэн, БНХАУ Австралийн коксжих нүүрсний импортод
                хориг тавьсан мөн нүүрсний үнэ өсөлттэй байгаа зэрэг нь салбарын
                онцлох үйл явдал болж байна Монголд шинээр нүүрс баяжуулах .
                үйлдвэрүүд олноор баригдаж нүүрсний салбарын хөгжил шинэ шатанд
                гарч олборлолтоос баяжуулалт-боловсруулалт тээвэрлэлтийн
                технологийн болон зах зээл, гадаад худалдааны бодлогын
                сорилтуудтай тулгарч байна. Иймд энэ удаагийн чуулганаар
                өрсөлдөөнийг онцолж бэлтгэн нийлүүлэгч, үйлдвэрлэгч-худалдан
                авагч талуудын бизнесийн харилцаа хамтын ажиллагааг үр ашигтай
                өргөжүүлэх зорилт дэвшүүлж байна.
              </div>
            </div>
            <div
              onClick={clicked3 ? unclick3 : click3}
              className="border-b p-4 relative cursor-pointer"
            >
              <h1>Чуулганы зохион байгуулагчид</h1>
              <div
                className={
                  clicked3
                    ? `transition-all duration-700 -mt-[8.5rem] -translate-y-16 opacity-[0] z-0`
                    : `transition-all duration-700 mt-8`
                }
              >
                Чуулганы ерөнхий зохион байгуулагчаар “Монгол Нүүрс Ассоциаци”,
                хамтран зохион байгуулагчаар “Монгол Нүүрс Ассоциаци”, Хятадын
                Нүүрс Тээвэр, Худалдааны Ассоциаци болон дэлхийн нүүрсний зах
                зээлийн судалгаа, худалдаа, тээвэр ложистикийн платформ бүхий
                мэдээллийн вэбсайт www.ccbdcc.com буюу БНХАУ-ын Түдэй Тинк Танк
                компани мөн дэлхийн нүүрсний зах зээлийн судалгаа, худалдаа,
                тээвэр ложистикийн платформ бүхий мэдээллийн вэбсайт
                www.yimei180.com буюу БНХАУ-ын Хэлүэ цахим худалдааны компани
                нар оролцож байна.
              </div>
            </div>
            <div
              onClick={clicked4 ? unclick4 : click4}
              className="border-b p-4 relative cursor-pointer"
            >
              <h1>Чуулганд хэн оролцох вэ?</h1>
              <div
                className={
                  clicked4
                    ? `transition-all duration-700 -mt-[11rem] -translate-y-16 opacity-[0] z-0`
                    : `transition-all duration-700 mt-8`
                }
              >
                <ul>
                  <li>
                    - Засгийн газрын гишүүд, яам агентлагийн газрын дарга,
                    мэргэжилтэн
                  </li>
                  <li>- Салбарын эрдэмтэн судлаачид</li>
                  <li>- Хөрөнгө оруулагчид, банк, санхүүгийн байгууллагууд</li>
                  <li>- Техник технологийн компаниуд, бэлтгэн нийлүүлэгчид</li>
                  <li>
                    Нүүрс олборлолт, баяжуулалт, боловсруулалт, тээвэрлэлтийн
                    компаниуд
                  </li>
                  <li>
                    - Худалдаа, тээвэр ложистикийн компаниуд -Хайгуулын төсөл
                    эзэмшигчид, жуниор компаниуд
                  </li>
                  <li>- Туслан гүйцэтгэгч компаниуд</li>
                  <li>- Зөвлөх үйлчилгээ, программ хангамжийн компаниуд г.м</li>
                </ul>
              </div>
            </div>
            <div
              className="border-b p-4 cursor-pointer z-10 relative"
              onClick={clicked5 ? unclick5 : click5}
            >
              <h1>Чуулганд оролцсоноор ямар үнэ цэнийг авах вэ?</h1>
              <div
                className={
                  clicked5
                    ? `transition-all duration-700 -mt-[11rem] -translate-y-16 opacity-[0] z-0`
                    : `transition-all duration-700 mt-8`
                }
              >
                <ul>
                  <li>
                    - Салбарын лидерүүдтэй нүүр тулан уулзаж бизнесийн харилцаа,
                    хамтын ажиллагаа тогтооно
                  </li>
                  <li>
                    - Нүүрсний салбарын зах зээл, үнийн чиг хандлагын талаар
                    дэлхийн шилдэг судлаачдын байр суурийг сонсоно
                  </li>
                  <li>
                    - Салбарын бодлого, төлөвлөлт, шинэ төслийн талаарх мэдээлэл
                    авна
                  </li>
                  <li>- Хөрөнгө оруулалтын төслүүдтэй танилцана</li>
                  <li>- Борлуулалтаа нэмэгдүүлнэ</li>
                  <li>
                    - Шинэ техник, технологийн үнэ өртөг, бүтээмжийн талаарх
                    мэдээлэл авна
                  </li>
                  <li>
                    - Бага зардлаар цаг хугацаа хэмнэн бизнесээ өргөжүүлнэ
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
