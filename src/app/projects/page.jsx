import React from 'react';

const ProjectPage = () => {
    return (
        <div className="max-w-[1300px] mx-auto px-4 md:px-0">

            {/* SIDEBAR — visible only on md+ */}
            <aside className="hidden md:flex flex-col justify-start gap-8 w-64 fixed mt-10">
                <h1 className="text-[#6B7770] text-3xl font-bold uppercase mb-5">
                    Projects
                </h1>
                <div>
                    <p>
                        <a href="#ai" className="text-xl text-[#6B7770] font-bold uppercase pb-2 block">
                            Personal AI Assistant
                        </a>
                    </p>

                </div>
                <hr className='w-10/12 border border-[#6B7770]' />
                <div>
                    <p>
                        <a href="#nlp" className="text-xl text-[#6B7770] font-bold uppercase pb-2 block">
                            NLP Classification
                        </a>
                    </p>
                </div>
                <hr className='w-10/12 border border-[#6B7770]' />
                <div>
                    <p>
                        <a href="#mri" className="text-xl text-[#6B7770] font-bold uppercase pb-2 block">
                            Brain MRI Classification
                        </a>
                    </p>
                </div>
                <hr className='w-10/12 border border-[#6B7770]' />
                <div>
                    <p>
                        <a href="#pgcb" className="text-xl text-[#6B7770] font-bold uppercase pb-2 block">
                            PGCB Web Scrapping
                        </a>
                    </p>
                </div>
                
            </aside>

            {/* MAIN CONTENT */}
            <main className="md:ml-80 md:w-[calc(100%-288px)]">
                <div className="md:pt-10 text-[#6B7770]">
                    <h1 className='text-3xl md:text-5xl uppercase font-bold mb-10'>
                        Projects
                    </h1>
                    <div>
                        <p className='text-lg mb-15'>
                            You can check on my projcts from the following GitHub respository link provided here:
                        </p>
                        <ul className='list-disc pl-4 space-y-3 text-lg'>
                            <li>Personal AI Assistant project using Python libraries  <span className='underline text-gray-600'><a href="https://github.com/Sabbir-Saif/Personal_AI_Assistant" target='_blank'>[github-respository]</a></span> </li>
                            <li>NLP text classification model using bert classifier  <span className='underline text-gray-600'><a href="https://github.com/Sabbir-Saif/Bert-based-NLP-Text-Classification-model" target='_blank'>[github-respository]</a></span> </li>
                            <li>Brain MRI Image Classification using Transfer Learning <span className='underline text-gray-600'><a href="https://github.com/Sabbir-Saif/Medical-Image-Analysis-with-Transfer-Learning" target='_blank'>[github-respository]</a></span> </li>
                        </ul>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default ProjectPage;