import Image from 'next/image';
import React from 'react';

const TeachingPage = () => {
    return (
        <div className="max-w-[1300px] mx-auto px-4 md:px-0">

            {/* SIDEBAR — visible only on md+ */}
            <aside className="hidden md:flex flex-col justify-start gap-8 w-64 fixed mt-10">
                <h1 className="text-[#6B7770] text-3xl font-bold uppercase mb-5">
                    Courses
                </h1>
                <div>
                    <p>
                        <a href="#dld" className="text-xl text-[#6B7770] font-bold uppercase pb-2 block">
                            Digital Logic Design                                </a>
                    </p>
                </div>
                <hr className='w-10/12 border border-[#6B7770]' />
                <div>
                    <p>
                        <a href="#micro" className="text-xl text-[#6B7770] font-bold uppercase pb-2 block">
                            Microprocessor, Microcontroller and Embedded System
                        </a>
                    </p>
                </div>
                <hr className='w-10/12 border border-[#6B7770]' />
                <div>
                    <p>
                        <a href="#archive" className="text-xl text-[#6B7770] font-bold uppercase pb-2 block">
                            Archive
                        </a>
                    </p>
                    <div className='text-lg text-gray-600 leading-relaxed'>
                        <p>
                            <a href="" className="block">
                                CSE2323 & CSE2324
                            </a>
                        </p>
                        <p>
                            <a href="" className="block">
                                CSE3523 & CSE3524
                            </a>
                        </p>
                    </div>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="md:ml-80 md:w-[calc(100%-288px)]">
                <div className="md:pt-10 text-[#6B7770]">
                    <h1 id='dld' className='text-3xl md:text-5xl uppercase font-bold mb-10 scroll-mt-24'>
                        Digital Logic Design
                    </h1>
                    {/* machine */}
                    <div className='mb-10 '>
                        <div className='flex flex-col md:flex-row justify-center gap-8 items-start'>
                            <div className='md:w-8/12'>
                                <p className='text-lg'>
                                    Digital Logic Design is a foundational concept in ECE, focusing on the design and analysis of digital systems. These systems operate using binary or hex to process and represent information. Digital logic is essential for creating devices ranging from simple calculators to complex computing systems.
                                </p>

                            </div>
                            <Image
                                src="/teaching/du.png"
                                alt="Bayes"
                                width={500}
                                height={500}
                                className="w-full h-full object-cover mb-4 border-2 border-[#006376] rounded-lg"
                            />
                        </div>
                        <p className='text-lg mt-8'>
                            This course covers topics such as:
                        </p>
                        <ul className='list-disc pl-4 space-y-2 mt-10'>
                            <li> Boolean algebra, Logic gates</li>
                            <li> Binary codes, Error correcting codes</li>
                            <li> K-map, don't care, SOP, POS</li>
                            <li> Combinational Circuit design, MUX-DEMUX, Encoder-decoder, Adders</li>
                            <li> Clocked sequential circuit design, Latch, flip-flop, Counters, Registers</li>
                            <li> Memory, RAM, ROM, PLA, PAL</li>
                        </ul>
                    </div>
                    {/* complexity */}
                    <div id='micro' className='mb-10 scroll-mt-24'>
                        <h2 className='text-3xl md:text-5xl font-semibold uppercase mb-10'>Microprocessor, Microcontroller and Embedded System</h2>
                        <div>
                            <p className='text-lg leading-relaxed'>
                                The 8086 microprocessor employs a segmented memory architecture, dividing memory into segments (Code, Data, Stack, and Extra). Each segment is addressed using a segment register and an offset, enabling efficient memory management. It supports pipelining, where instruction fetching, decoding, and execution occur in parallel, improving performance.

                            </p>
                            <p className='text-lg leading-relaxed'>
                                The 8051 is often referred to as a System on a Chip (SoC) because it integrates several components into a single chip, including a CPU, memory, I/O ports, timers, and more. Its notable features are Memory, timers, I/O Ports,
                                Serial Communication, Interrupts, Oscillator
                            </p>

                        </div>
                        <div className='flex flex-col md:flex-row justify-center gap-8 items-start my-10'>
                            <div className='text-lg leading-relaxed'>
                                <p className='text-lg mt-8'>
                                    This course covers the followings:
                                </p>
                                 <ul className='list-disc pl-4 space-y-2 mt-10'>
                                    <li> 8086 microprocessor evolution, architecture, and programming</li>
                                    <li> Memory segmentation, physical address</li>
                                    <li> Registers, flags, addressing, logic and arithmatic operations</li>
                                    <li> 8051 Microcontroller, I/O interfacing, IOT, Embedded System</li>
                                </ul>
                            </div>
                            <Image
                                src="/teaching/mio.png"
                                alt="Complexity"
                                width={300}
                                height={300}
                                className="w-full h-full object-cover mb-4 border-2 border-[#006376] rounded-lg"
                            />
                        </div>
                    </div>

                </div>
            </main>

        </div>
    );
};
export default TeachingPage;