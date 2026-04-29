import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaEnvelope, FaResearchgate, FaLinkedin } from "react-icons/fa";
const HeroSection = () => {
    return (
        <section id="home" className="py-12 md:py-5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">

                    {/* Profile Card */}
                    <div
                        className="flex flex-col items-center text-center lg:sticky lg:top-32 animate-slide-in-right"
                        style={{ animationDelay: "0.2s" }}
                    >
                        {/* Profile Image */}
                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-linear-to-br from-muted to-muted/50 r shadow-lg flex items-center justify-center overflow-hidden">
                            <Image
                                src="/profile.jpg"
                                alt="Profile"
                                width={200}
                                height={200}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Name and Title */}
                        <div className="mt-6 space-y-1">
                            <h1 className="text-2xl md:text-3xl font-heading font-bold tracking-wide text-foreground">
                                Saif Sabbir
                            </h1>
                            <p className="text-sm text-muted-foreground">Adjunct Lecturer</p>
                            <p className="text-sm text-muted-foreground">Department of Computer Science & Engineering</p>
                            <p className="text-sm text-muted-foreground">
                                International Islamic University, Chittagong
                            </p>
                            <p className="text-sm text-muted-foreground">Kumira, Chattogram-4318, Bangladesh</p>
                            <p className="text-sm text-muted-foreground">Email: <span className="text-blue-600 underline">saifsabbir.cuet18@gmail.com</span></p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 mt-6">
                            <a target="_blank" href="https://www.researchgate.net/profile/Saif-Sabbir" className="social-icon" aria-label="Facebook">
                                <FaResearchgate className="hover:text-gray-600" size={40} />
                            </a>
                            <a target="_blank" href="https://github.com/Sabbir-Saif" className="social-icon" aria-label="GitHub">
                                <FaGithubSquare className="hover:text-gray-600" size={40} />
                            </a>
                            <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=saifsabbir2k18@gmail.com" className="social-icon" aria-label="Email">
                                <FaEnvelope className="hover:text-gray-600" size={40} />
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/saif-sabbir-23a6531b8" className="social-icon" aria-label="GitHub">
                                <FaLinkedin className="hover:text-gray-600" size={40} />
                            </a>
                        </div>
                    </div>

                    {/* Bio Content */}
                    <div className="lg:col-span-2 space-y-6 animate-fade-in md:max-w-11/12 text-center md:text-start">
                        <p className="text-lg leading-8 text-foreground/90 ">
                            I am an adjunct faculty member in the{" "}
                            <a href="#" className="text-link">
                                Computer Science and Engineering Department
                            </a>{" "}
                            at{" "}
                            <a href="#" className="text-link">
                                International Islamic University, Chittagong
                            </a>
                            . I graduated from Chittagong University of Engineering & Technology in June 2024 with B.Sc degree in
                            Electrical and Electronic Engineering. My research interest follows deep learning, image processing, computer vision and natural language processing. Currently, I am working with real-time video analysis, image classification and segmentation methods, deep learning and transfer learning models etc. Additionally, I also dream for transitioning the current healthcare system with AI-driven smooth
                            disease diagnosis, drug discovery and surveillance of patients. I believe that having the opportunity to work with leading researchers from various disciplines in ECE and CS may help me shaping this goal.
                        </p>

                        <p className="text-lg leading-8 text-text-highlight text-[#0000FF]">
                            I am looking for a fully funded PhD position as a <span className="font-bold"> Graduate Research Assistant/Teaching Assistant</span> in USA.
                            I am interested to join <span className="font-bold">the PhD program in ECE/CS department</span> of a reputed university with possible funding facilities.
                        </p>

                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
