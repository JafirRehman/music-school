'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
        id: 1,
        name: 'Elena Briggs',
        designation: 'Vocal Coach',
        image: '/ours-images/Instructors/IA.jpg',
    },
    {
        id: 2,
        name: 'Marcus Reid',
        designation: 'Guitar Instructor',
        image: '/ours-images/Instructors/IB.jpg',
    },
    {
        id: 3,
        name: 'Julia Zhang',
        designation: 'Piano Teacher',
        image: '/ours-images/Instructors/IC.jpg',
    },
    {
        id: 4,
        name: 'Andre Gomez',
        designation: 'Drumming Expert',
        image: '/ours-images/Instructors/ID.jpg',
    },
];

function Instructors() {
    return (

        <div className="relative h-[40rem] overflow-hidden flex flex-col justify-center items-center">
            <WavyBackground className="max-w-4xl mx-auto flex flex-col justify-center items-center top-0">
                <h2 className="text-2xl md:text-4xl whitespace-nowrap lg:text-7xl text-white font-bold text-center">Meet Our Instructors</h2>
                <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
                <div className="flex flex-row items-center justify-center mb-10 mt-5 w-full">
                    <AnimatedTooltip items={instructors} />
                </div>
            </WavyBackground>
        </div>
    )
}

export default Instructors