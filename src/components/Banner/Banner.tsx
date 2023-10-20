/* eslint-disable @next/next/no-img-element */
import React from "react";
import doctor from "../../../public/assists/a4.png";
import Care from "../../../public/assists/a3.png";
import Phone from "../../../public/assists/a3.png";
import Image from "next/image";

const Banner = () => {
  const BannerData = [
    {
      title: "Expert Trainers",
      description:
        "Our trainers are highly qualified and experienced in their respective fields.",
      image: doctor,
    },
    {
      title: "Personal training",
      description: "We are available for for any personal fitness trainig.",
      image: Care,
    },
    {
      title: "Female Security",
      description:
        "Extra security for female members and seperate exercise hall for male and female",
      image: Phone,
    },
  ];

  return (
    <div className="common bg-primary flex flex-col md:flex-row md:gap-3 gap-10  justify-between py-[50px] text-white font-inter border-b-2 border-t-2  border-blue-200">
      {BannerData.map((data, i) => (
        <div className="flex items-center gap-4 px-[20px]" key={i}>
          <Image
            src={data.image}
            alt="Picture of the author"
            width={80}
            height={80}
            className="bg-white rounded-full"
          />

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-[20px]">{data.title}</h3>
            <p>{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
