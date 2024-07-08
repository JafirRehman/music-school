import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses"
import StickyScroll from "@/components/StickyScroll";
import {InfiniteMovingCardsDemo} from '@/components/TestimonialCards'
import UpcomingWebinars from '@/components/Webinars'
import Instructors from "@/components/Instructors";
export default function Home() {
  return (
    <>
      <HeroSection/>
      <FeaturedCourses/>
      <StickyScroll />
      <InfiniteMovingCardsDemo/>
      <UpcomingWebinars/>
      <Instructors/>
    </>
  );
}
