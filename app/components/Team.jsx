import Image from "next/image";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineBehance } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const Team = () => {
  const imgData = [
    {
      id: 1,
      imgSrc: "/founder-1.png",
      text: "Founder",
      des: "Rosalina D. William",
    },
    {
      id: 2,
      imgSrc: "/founder-2.png",
      text: "Co. Founder",
      des: "Miranda H. Halim",
    },
    {
      id: 3,
      imgSrc: "/founder-3.png",
      text: "Founder",
      des: "Alex X. Xaiomi",
    },
    {
      id: 4,
      imgSrc: "/founder-4.png",
      text: "Founder",
      des: "D. William Carry",
    },
  ];

  return (
    <div className="child-wrapper space-y-3 p-5">
      <div className="text-center space-y-3">
        <p className="heading-2">Team</p>
        <p className="heading">Expert Co-Artist</p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        {imgData.map(({ id, imgSrc, text, des }) => {
          const isEvenId = id % 2 === 0;

          return (
            <div
              className={`group mx-auto col-span-1 ${
                isEvenId ? "lg:mt-16" : "lg:mb-10"
              }`}
              key={id}
            >
              <div className="relative h-[250px] w-[160px]">
                <Image
                  className="object-contain selector"
                  src={imgSrc}
                  alt="founder"
                  fill
                />
              </div>

              <div className="text-center space-y-2">
                <p className=" text-zinc-300 text-sm">{text}</p>
                <p className="text-lg font-semibold">{des}</p>
                <div className="opacity-0 text-xl text-zinc-400 group-hover:opacity-100 flex gap-4 pt-4 transition delay-600 ease-linear">
                  <BiLogoFacebook />
                  <AiOutlineTwitter />
                  <AiOutlineBehance />
                  <AiFillYoutube />
                  <BiLogoLinkedin />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
