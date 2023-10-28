import Image from "next/image";

const Team = () => {
    
  const imgData = [
    {
      id: 1,
      imgSrc: "/founder-1.png",
      text: "Founder",
      des: "Rosalina D. William"
    },
    {
      id: 2,
      imgSrc: "/founder-2.png",
      text: "Co. Founder",
      des: "Miranda H. Halim"
    },
    {
      id: 3,
      imgSrc: "/founder-3.png",
      text: "Founder",
      des: "Alex X. Xaiomi"
    },
    {
      id: 4,
      imgSrc: "/founder-4.png",
      text: "Founder",
      des: "D. William Carry"
    },
  ];

  return (
    <>
      {/* <div className="child-wrapper space-y-16 p-10 testb">
      <div className="text-center space-y-3">
        <p className="heading-2">Team</p>
        <p className="heading">Expert Co-Artist</p>
      </div>

     

      <div className="md:grid grid-cols-4 gap-6">







{imgData.map(({img, index}) => {
    <div className="relative" key={index}>
      <Image src={img} alt="founder" />
      </div>
})}




      <div className="relative">
      <Image src={founder1} alt="founder"/>
      </div>

      <div className="relative">
      <Image src={founder2} alt="founder"/>
      </div>
       
       <div className="relative">
       <Image src={founder3} alt="founder"/>
       </div>

       <div>
       <Image src={founder4} alt="founder"/>
       </div>
        
      
      </div>
    </div> */}

      <div className="testb child-wrapper">
        <div className="grid grid-cols-4 gap-10">
          {imgData.map(({ id, imgSrc, text, des }) => {
            return (
              <div className="mt-10" key={id}>
                <div className="relative col-span-1 testb h-[250px] w-[200px]">
                  <Image
                    className=" testb object-contain"
                    src={imgSrc}
                    alt="founder"
                    fill
                  />
                </div>

                <div>
                  <p>{text}</p>
                  <p>{des}</p>
                  <p className="">icon</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Team;
