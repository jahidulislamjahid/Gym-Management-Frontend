"use client";

import { useGetAllFeedBackQuery } from "@/Redux/features/feedBackApi/feedBackApi";
import About from "@/components/About/About";
import Appointment from "@/components/Appointment/Appointment";
import Banner from "@/components/Banner/Banner";
import BlogPage from "@/components/BlogPage/BlogPage";
import Faqs from "@/components/Faqs/Faqs";
import FeedBackForum from "@/components/Forms/FeedBackForum";
import HealthCare from "@/components/HealthCare/HealthCare";
import Hero from "@/components/Hero/Hero";
import UserReviews from "@/components/Reviews/Reviews";
import Services from "@/components/Services/Services";
import { FloatButton } from "antd";

export default function Home() {
  const { data: reviews, isLoading } = useGetAllFeedBackQuery(undefined);

  return (
    <div>
      <Hero />
      <Banner />
      <About />
      <Services />
      <Appointment />
      <HealthCare />
      <Faqs />
      <BlogPage />
      {!isLoading && reviews?.data && <UserReviews data={reviews?.data} />}
      <FeedBackForum />

      <FloatButton.BackTop type="primary" tooltip="Scroll to top" />
    </div>
  );
}
