import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";

const Sponsor = () => {
  const [clicked, setClicked] = useState(true);
  const [clicked2, setClicked2] = useState(true);
  const [clicked3, setClicked3] = useState(true);
  const [clicked4, setClicked4] = useState(true);
  const [clicked5, setClicked5] = useState(true);

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
          <b className="text-black text-[24px]">10 ???????? ????????????</b>

          <p className="text-black w-[16rem] md:w-[50rem] lg:w-[55rem] text-center">
            ???Coal Mongolia??? ???????????????? ???????????????? ????????????????, ?????????????? ???????????????????? ????????
            ?????????? ???????????? ??????????????, ?????????????????? ???? ???????????? ?????????? ???????????????? ??????????????
            ?????????????? ???????????????? ??????????, ???????? ???????????? ?????????????????? ????????????????????, ????????????????
            ??????????????, ????????????????, ???????????? ?????????????????????? ????????????????????, ?????????? ?????? ??????????
            ???????????????? ???????????????? ???????????????? ???????????????? ???????????????? ?????????????????? ??????????????????
            2011 ?????????? ?????? ?????? ?????????????????? ???????????? ???????????????????????????? ?????????? ??????????.
          </p>
        </div>
      </div>
      <div className="flex flex-col mx-5  lg:flex-row  text-black gap-10 mt-10">
        <div className="bg-[#e8eaed] md:w-[20rem] lg:w-[25rem]  gap-y-6 py-10 px-2 flex flex-col justify-center items-center">
          <b className="text-[25px]">????????????????</b>
          <p className="text-center">
            10 ???????? ???????????????? ???Coal Mongolia-2022??? ???? ??????????????????????? ????????????????? ??????????
            ?????? ???????????? ??????????????????????????.
          </p>
          <div className=" text-white bg-black h-12 px-6 flex items-center gap-1">
            <h1>??????????????????????</h1>
            <BsFillArrowRightCircleFill size={"15"} />
          </div>
        </div>
        <div className="bg-[#e8eaed] md:w-[20rem] lg:w-[25rem] gap-y-4 py-10 px-2 flex flex-col justify-center items-center">
          <b className="text-[25px]">??????????????????</b>
          <p className="text-center">
            10 ???????? ???????????????? ???Coal Mongolia-2022??? ???? ??????????????????????? ????????????????? ??????????
            ?????? ???????????? ??????????????????????????.
          </p>
          <div className=" text-white bg-black h-12 px-6 flex items-center gap-1">
            <h1>??????????????????????</h1>
            <BsFillArrowRightCircleFill size={"15"} />
          </div>
        </div>
        <div className="bg-[#e8eaed] md:w-[20rem] lg:w-[25rem] gap-y-4 py-10 px-2 flex flex-col justify-center items-center">
          <b className="text-[25px]">????????????????????</b>
          <p className="text-center">
            10 ???????? ???????????????? ???Coal Mongolia-2022??? ???? ??????????????????????? ????????????????? ??????????
            ?????? ???????????? ??????????????????????????.
          </p>
          <div className=" text-white bg-black h-12 px-6 flex items-center gap-1">
            <h1>??????????????????????</h1>
            <BsFillArrowRightCircleFill size={"15"} />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center my-10 text-black">
        <h1 className="px-4 lg:px-0">
          2011 ?????????? ???????? ???????????????????? ?????????????? 17,256 ??????????, ?????????????????????? ??????????
          Coal Mongolia-?? ???????????????? ??????????.
        </h1>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center gap-20">
        <div className="text-black grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          <div className="flex flex-col items-center lg:items-start">
            <b className="text-[62px] text-[#012f4d]">7084</b>
            <h1>???????? ???????????? ??????????, ??????????????????????</h1>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <b className="text-[62px] text-[#012f4d]">527</b>
            <h1>?????????????????? ???????????????? ??????????????</h1>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <b className="text-[62px] text-[#012f4d]">55%</b>
            <h1>???????? ?????????? ??????????????????</h1>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <b className="text-[62px] text-[#012f4d]">79%</b>
            <h1>?????????????????? ????????????????</h1>
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
          <b className="text-[26px]">???????????????? ??????????</b>
          <div className="lg:w-[54rem] p-4">
            <div
              onClick={clicked ? unclick : click}
              className=" border-b p-4 relative cursor-pointer"
            >
              <h1 className="z-10">?????? ???????????? ???????????????? ???????? ???? ?????</h1>
              <div
                className={
                  clicked
                    ? `transition-all duration-700 -mt-10 -translate-y-16 opacity-[0] z-0`
                    : `transition-all duration-700 mt-8 `
                }
              >
                10 ?????? ???????????????? ???Coal Mongolia-2022??? ???? ??????????????????????? ?????????????????
                ?????????? ?????? 2022 ?????? 9-?? ?????????? 7-8 ????????????????, ???????????????? ??????????????????????
                ?????????? ?????????????? ?????????? ???????? ???????????????? ???????????? ??????????????????????????.
              </div>
            </div>
            <div
              onClick={clicked2 ? unclick2 : click2}
              className=" border-b p-4 relative cursor-pointer"
            >
              <h1>?????? ???????????? ???????????????? ???????????? ???? ????????????</h1>
              <div
                className={
                  clicked2
                    ? `transition-all duration-700 -mt-[11rem] -translate-y-16 opacity-[0] z-0`
                    : `transition-all duration-700 mt-8`
                }
              >
                ???????????? ?????????? ?????????? ?????????????? ???????????? ???????? ???????????????? ???????? ??????????????
                ?????????????????? ?????????? ???????????????? ?????????? ?????????? ???????????? , ???????????????? ????????????????
                ???????????????????? ??????????????, ?????????? ???????????????????? ?????????????? ???????????????? ????????????????
                ?????????? ?????????????? ?????? ???????????????? ?????? ???????????????? ???????????? ?????????? ???? ????????????????
                ???????????? ?????? ?????????? ???????? ?????????? ?????????????? ???????????? ?????????? ?????????????????? .
                ???????????????????? ???????????? ???????????????? ???????????????? ???????????????? ???????????? ???????? ????????????
                ???????? ???????????????????????? ????????????????????-?????????????????????????? ??????????????????????????
                ?????????????????????? ?????????? ?????? ????????, ???????????? ???????????????????? ????????????????
                ???????????????????????? ?????????????? ??????????. ???????? ?????? ???????????????? ????????????????????
                ???????????????????????? ???????????? ?????????????? ????????????????????, ??????????????????????-????????????????
                ?????????? ???????????????? ?????????????????? ???????????????? ???????????? ???????????????????? ???? ??????????????
                ???????????????????? ???????????? ???????????????? ??????????.
              </div>
            </div>
            <div
              onClick={clicked3 ? unclick3 : click3}
              className="border-b p-4 relative cursor-pointer"
            >
              <h1>???????????????? ???????????? ????????????????????????</h1>
              <div
                className={
                  clicked3
                    ? `transition-all duration-700 -mt-[8.5rem] -translate-y-16 opacity-[0] z-0`
                    : `transition-all duration-700 mt-8`
                }
              >
                ???????????????? ?????????????? ???????????? ?????????????????????????? ??????????????? ?????????? ?????????????????????,
                ?????????????? ???????????? ?????????????????????????? ??????????????? ?????????? ?????????????????????, ??????????????
                ?????????? ????????????, ???????????????????? ?????????????????? ?????????? ?????????????? ???????????????? ??????
                ?????????????? ????????????????, ????????????????, ???????????? ?????????????????????? ???????????????? ??????????
                ???????????????????? ?????????????? www.ccbdcc.com ???????? ??????????-???? ?????????? ???????? ????????
                ?????????????? ?????? ?????????????? ???????????????? ?????? ?????????????? ????????????????, ????????????????,
                ???????????? ?????????????????????? ???????????????? ?????????? ???????????????????? ??????????????
                www.yimei180.com ???????? ??????????-???? ?????????? ?????????? ???????????????????? ??????????????
                ?????? ?????????????? ??????????.
              </div>
            </div>
            <div
              onClick={clicked4 ? unclick4 : click4}
              className="border-b p-4 relative cursor-pointer"
            >
              <h1>???????????????? ?????? ?????????????? ?????</h1>
              <div
                className={
                  clicked4
                    ? `transition-all duration-700 -mt-[11rem] -translate-y-16 opacity-[0] z-0`
                    : `transition-all duration-700 mt-8`
                }
              >
                <ul>
                  <li>
                    - ?????????????? ???????????? ????????????, ?????? ?????????????????????? ???????????? ??????????,
                    ??????????????????????
                  </li>
                  <li>- ???????????????? ???????????????? ??????????????????</li>
                  <li>- ?????????????? ????????????????????, ????????, ???????????????????? ??????????????????????????</li>
                  <li>- ???????????? ?????????????????????? ??????????????????, ?????????????? ????????????????????????</li>
                  <li>
                    ?????????? ??????????????????, ????????????????????, ??????????????????????????, ??????????????????????????
                    ??????????????????
                  </li>
                  <li>
                    - ????????????????, ???????????? ?????????????????????? ?????????????????? -?????????????????? ??????????
                    ????????????????????, ???????????? ??????????????????
                  </li>
                  <li>- ???????????? ???????????????????? ??????????????????</li>
                  <li>- ???????????? ??????????????????, ???????????????? ???????????????????? ?????????????????? ??.??</li>
                </ul>
              </div>
            </div>
            <div
              className="border-b p-4 cursor-pointer z-10 relative"
              onClick={clicked5 ? unclick5 : click5}
            >
              <h1>???????????????? ?????????????????????? ???????? ?????? ???????????? ???????? ?????</h1>
              <div
                className={
                  clicked5
                    ? `transition-all duration-700 -mt-[11rem] -translate-y-16 opacity-[0] z-0`
                    : `transition-all duration-700 mt-8`
                }
              >
                <ul>
                  <li>
                    - ???????????????? ?????????????????????? ???????? ?????????? ???????????? ?????????????????? ????????????????,
                    ???????????? ?????????????????? ????????????????
                  </li>
                  <li>
                    - ???????????????? ???????????????? ?????? ????????, ?????????? ?????? ?????????????????? ????????????
                    ?????????????? ???????????? ???????????????????? ???????? ?????????????? ??????????????
                  </li>
                  <li>
                    - ???????????????? ??????????????, ??????????????????, ???????? ?????????????? ?????????????? ????????????????
                    ????????
                  </li>
                  <li>- ?????????????? ???????????????????? ???????????????????? ??????????????????</li>
                  <li>- ???????????????????????? ??????????????????????</li>
                  <li>
                    - ???????? ????????????, ?????????????????????? ?????? ??????????, ???????????????????? ??????????????
                    ???????????????? ????????
                  </li>
                  <li>
                    - ???????? ???????????????? ?????? ?????????????? ???????????? ???????????????? ????????????????????
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
