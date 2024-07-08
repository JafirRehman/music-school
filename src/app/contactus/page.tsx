'use client';

import React, { FormEvent, useState } from 'react';
import { BackgroundBeams } from "@/components/ui/background-beams";

function MusicSchoolContactUs() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`email : ${email} \n message : ${message}`);
    };

    return (
        <div className="min-h-screen bg-gray-900 relative py-12 pt-32">
            <BackgroundBeams className='absolute w-full top-0 left-0 right-0 bottom-0 z-0' />
            <div className="max-w-[1200px] w-[90%] relative mx-auto z-10">
                <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
                    Contact Us
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
                    We&apos;re here to help with any questions about our courses,
                    programs, or events. Reach out and let us know how we can assist you
                    in your musical journey.
                </p>
                <form onSubmit={handleSubmit} className=" space-y-4 mt-4 notmobile:w-[80%] md:w-[60%] max-w-[600px] mx-auto">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-black placeholder:text-neutral-700"
                        required
                    />
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message"
                        className=" rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-black placeholder:text-neutral-700"
                        rows={5}
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default MusicSchoolContactUs;