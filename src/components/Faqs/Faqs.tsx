"use client";
import { useGetFaqQuery } from "@/Redux/features/faqApi/faqApi";
import Image from "next/image";
import FaqComponent from "./FaqComponent";

const Faqs = () => {
  const { data, isLoading } = useGetFaqQuery(undefined);

  const items = data?.map((item: any) => ({
    key: item?.faqId,
    label: item?.faqTitle,
    children: <p>{item?.faqDescription}</p>,
  }));

  return (
    <div className="common md:flex gap-10 items-center mb-[60px]">
      <Image
        src="https://img.freepik.com/free-photo/beautiful-young-sports-people-are-holding-bottles-water-smiling-during-break_496169-2696.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
        className="rounded-xl md:w-[550px] md:h-[660px] border-2 "
      />

      {/* FAQS */}
      <div className="font-inter my-[20px] md:my-0 flex flex-col md:h-[400px] justify-around max-w-[1000px]">
        <p className="text-primary md:text-[20px] text-[16px] font-semibold">
          ABOUT Furious Fitness
        </p>
        <p className="font-poppins md:text-[45px] text-[35px] md:w-[550px]">
          We Collaborate for Better Fitness
        </p>
        <p className="md:w-[500px] text-gray-[400px] font-poppins text-gray-500">
          The benefits of Fitness are that it allows sellers to quickly qualify
          or disqualify opportunities.
        </p>

        <FaqComponent size="large" itemData={items} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Faqs;
