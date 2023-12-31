import Image from "next/image";
import aboutImageTwo from "../../../public/assists/a5.png";
import aboutImageOne from "../../../public/assists/a6.png";

const About = () => {
  return (
    <div className="common md:flex w-full justify-between md:py-[200px] my-[30px] items-center border-b-2">
      <div className="flex flex-col md:flex-row gap-[50px]">
        <Image
          src={aboutImageOne}
          alt="Picture of the author"
          width={500}
          height={500}
          className="rounded-xl md:w-[300px] md:h-[600px]  md:-mt-[50px] "
        />

        <Image
          src={aboutImageTwo}
          alt="Picture of the author"
          width={500}
          height={500}
          className="rounded-xl md:w-[300px] md:h-[600px]   "
        />
      </div>

      {/* About Section */}
      <div className="font-inter my-[20px] md:my-0 flex flex-col h-[400px] justify-around md:w-[400px]">
        <p className="text-primary md:text-[20px] text-[16px] font-semibold">
          ABOUT Furious Fitness
        </p>
        <p className="font-poppins md:text-[45px] text-[35px] md:w-[550px]">
          We Collaborate for Better Health
        </p>
        <p className="md:w-[500px] text-gray-[400px] font-poppins text-gray-500">
          The benefits of Memberships are that it allows sellers to quickly qualify
          or disqualify opportunities.
        </p>

        <div className="flex w-full gap-5 my-[10px]">
          <button className="appointmentButton">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
