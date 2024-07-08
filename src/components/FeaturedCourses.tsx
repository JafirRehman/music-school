'use client'
import Link from "next/link"
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,

}

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)


    return (
        <div className="py-12 bg-gray-900">
            <div className="w-[90%] mx-auto max-w-[1100px]">
                <div>
                    <div className="text-center">
                        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
                    </div>
                </div>
                <div className="my-20 flex flex-wrap gap-10 justify-center">
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className="flex">
                            <div className="">
                                <BackgroundGradient className=" rounded-[22px] bg-black flex flex-col text-center max-w-[330px] h-[200px] p-3 dark:bg-zinc-900">
                                    <p className="text-lg sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                    <p className="text-sm dark:text-neutral-400 text-white flex-grow">{course.description}</p>
                                    <Link href={`/courses/${course.slug}`} className="text-white">
                                        Learn More
                                    </Link>
                                </BackgroundGradient>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <Link href={"/courses"}>
                        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            View All Courses
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCourses



