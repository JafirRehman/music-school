
function Footer() {

    return (
        <footer className="bg-black text-gray-400 py-5 xl:py-20">
            <div className="w-[90%] flex-wrap max-w-6xl text-white text-[0.6rem] notmobile:text-[0.8rem] mx-auto flex justify-between lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[70%] md:max-w-[20%] ">
                    <h2 className="font-semibold mb-4">About Us</h2>
                    <p className="mb-4">
                        Music School is a premier institution dedicated to teaching the art
                        and science of music. We nurture talent from the ground up,
                        fostering a vibrant community of musicians.
                    </p>
                </div>
                <div>
                    <h2 className="font-semibold mb-4">Quick Links</h2>
                    <ul>
                        <li>
                            <a
                                href="/"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/courses"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Courses
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contactus"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-semibold mb-4">Contact Us</h2>
                    <p>Multan, Pakistan</p>
                    <p>Email: info@musicschool.com</p>
                    <p>Phone: 0000-0000000</p>
                </div>
            </div>
            <p className="text-center text-xs pt-8">© 2024 Music School. All rights reserved.</p>
        </footer>
    )
}

export default Footer