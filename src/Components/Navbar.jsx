"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";

function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

const navLinks = [
    { name: "HOME", href: "/" },
    {
        name: "RESEARCH",
        href: "/research",
        children: [
            {
                name: "LCG ATTENTION",
                href: "/research/#lcg",
            },
            {
                name: "CREDIT CARD FRAUD DETECTION",
                href: "/research/#card",
            },
            {
                name: "TOMATO LEAF DISEASE",
                href: "/research/#tomato",
            },
            {
                name: "NLP CHAKMA SENTIMENT ANALYSIS",
                href: "/research/#chakma",
            },
            {
                name: "BRAIN TUMOR CLASSIFICATION",
                href: "/research/#tumor",
            },
            {
                name: "REAL-TIME HOME SURVEILLANCE",
                href: "/research/#camera",
            },

        ]

    },

    {
        name: "PROJECTS",
        href: "/projects",
        children: [
            { name: "PERSONAL AI ASSISTANT", href: "/projects/#ai" },
            { name: "NLP CLASSIFICATION", href: "/projects/#nlp" },
            { name: "BRAIN MRI CLASSIFICATION", href: "/projects/#mri" },
            { name: "PGCB WEB SCRAPPING", href: "/projects/#pgcb" },
        ],
    },

    {
        name: "TEACHING",
        href: "/teaching",
        children: [
            {
                name: "DIGITAL LOGIC DESIGN",
                href: "/teaching/#dld",
            },
            {
                name: "MICROPROCESSOR, MICROCONTROLLER AND EMBEDDED SYSTEM",
                href: "/teaching/#micro",
            }
        ]
    }
];

const Navbar = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);
    const [expanded, setExpanded] = useState(null);

    // Handle sidebar opening with transition
    useEffect(() => {
        if (openSidebar) {
            setShouldRender(true);
            document.body.style.overflow = 'hidden';
        } else {
            // Delay unmounting to allow exit animation
            const timer = setTimeout(() => {
                setShouldRender(false);
            }, 300); // Match transition duration
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [openSidebar]);

    return (
        <header className="sticky top-0 z-50 bg-linear-to-r from-[#F2F2F2] via-[#D4D4D4] backdrop-blur-2xl">
            <nav className="container mx-auto px-4 md:px-6">
                <div className="h-16 md:h-20 flex items-center justify-center relative">

                    {/* DESKTOP NAV */}

                    <ul className="hidden md:flex items-center gap-10">
                        {navLinks.map((link, i) => (
                            <li key={i} className="relative group">
                                <Link
                                    href={link.href}
                                    className="font-semibold text-gray-700 transition hover:bg-gray-600 hover:text-white hover:rounded-lg hover:p-4"
                                >
                                    {link.name}
                                </Link>

                                {link.children && (
                                    <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-gray-700 text-white rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 
                                    group-hover:visible transition-all w-72 shadow-xl">
                                        {link.children.map((child, j) => (
                                            <Link
                                                key={j}
                                                href={child.href}
                                                className="block py-2 text-sm font-semibold hover:text-green-300 transition"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="hidden md:block absolute right-0">
                        <a href="/cv.pdf" download="Sabbir_Nirjon_CV.pdf">
                            <span className="btn  px-4 py-2 rounded-lg font-funnel font-semibold text-lg cursor-pointer hover:scale-105 bg-gray-700 text-white ">
                                Download CV
                            </span>
                        </a>
                    </div>

                    {/* MOBILE HEADER */}
                    <div className="md:hidden flex justify-between items-center w-full">
                        <Link
                            href="/"
                            className="font-bold text-gray-700 hover:text-black transition"
                        >
                            Sabbir Ahmed Nirjon
                        </Link>

                        <button
                            onClick={() => setOpenSidebar(true)}
                            className="p-2 text-gray-700 hover:text-black"
                        >
                            <Menu size={28} />
                        </button>
                    </div>

                </div>
            </nav>

            {/* MOBILE OVERLAY */}
            {shouldRender && (
                <div
                    className={cn(
                        "md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
                        openSidebar ? "opacity-100" : "opacity-0"
                    )}
                    onClick={() => setOpenSidebar(false)}
                />
            )}

            {/* MOBILE SIDE DRAWER */}
            {shouldRender && (
                <div
                    className={cn(
                        "md:hidden fixed top-0 right-0 h-full w-72 bg-[#2d3a3d] text-white shadow-xl transform transition-all duration-300 ease-in-out z-50",
                        openSidebar ? "translate-x-0" : "translate-x-full"
                    )}
                >
                    {/* Drawer Header */}
                    <div className="flex justify-between items-center px-4 h-16 border-b border-gray-500">
                        <h2 className="text-lg font-semibold">Menu</h2>
                        <button onClick={() => setOpenSidebar(false)}>
                            <X size={26} />
                        </button>
                    </div>

                    {/* Drawer Links */}
                    <ul className="flex flex-col gap-2 px-4 bg-[#2d3a3d]">
                        {navLinks.map((link, i) => (
                            <li key={i}>
                                {/* Parent Row */}
                                <div className="flex justify-between items-center w-full py-2 font-semibold hover:bg-white hover:text-[#2d3a3d]">
                                    <Link href={link.href} onClick={() => setOpenSidebar(false)}>
                                        {link.name}
                                    </Link>

                                    {link.children && (
                                        <button
                                            className="text-white"
                                            onClick={() =>
                                                setExpanded(expanded === i ? null : i)
                                            }
                                        >
                                            <ChevronRight
                                                className={cn(
                                                    "transition",
                                                    expanded === i && "rotate-90",
                                                    "text-white", "hover:text-gray-700"
                                                )}
                                            />
                                        </button>
                                    )}
                                </div>

                                {/* Child Links */}
                                {link.children && expanded === i && (
                                    <div className="ml-4 mt-2 flex flex-col gap-2">
                                        {link.children.map((child, j) => (
                                            <Link
                                                key={j}
                                                href={child.href}
                                                onClick={() => setOpenSidebar(false)}
                                                className="text-sm text-gray-300 hover:text-white py-1"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                        <div className="block md:hidden my-5 text-center">
                            <a href="/cv.pdf" download="Sabbir_Nirjon_CV.pdf">
                                <span className="btn  px-4 py-2 rounded-lg font-funnel font-semibold text-lg cursor-pointer hover:scale-105 bg-gray-700 text-white">
                                    Download CV
                                </span>
                            </a>
                        </div>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;