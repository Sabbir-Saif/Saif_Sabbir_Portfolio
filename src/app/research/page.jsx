import Image from 'next/image';
import React from 'react';

const ResearchPage = () => {
    return (
        <div className="max-w-[1300px] mx-auto px-4 md:px-0">

            {/* SIDEBAR — visible only on md+ */}
            <aside className="hidden md:flex flex-col justify-start gap-6 w-64 fixed mt-1">
                <h1 className="text-[#6B7770] text-3xl font-bold uppercase mb-5">
                    Research Works
                </h1>
                <div>
                    <p>
                        <a href="" className="text-xl text-[#6B7770] font-bold uppercase pb-2 block">
                            Published works
                        </a>
                    </p>
                    <div className='text-lg text-gray-600  leading-relaxed'>
                        <p>
                            <a href="#lcg" className=" block hover:text-black">
                                LCG Attention
                            </a>
                        </p>
                        <p>
                            <a href="#card" className=" block hover:text-black">
                                Credit Card Fraud Detection
                            </a>
                        </p>
                        <p>
                            <a href="#tomato" className=" block hover:text-black">
                                Tomato leaf disease
                            </a>
                        </p>
                    </div>
                </div>
                <hr className='w-10/12 border border-[#6B7770]' />
                <div>
                    <p>
                        <a href="#chakma" className="text-xl text-[#6B7770] font-bold uppercase pb-2 block">
                            Works Under Review
                        </a>
                    </p>
                    <div className='text-lg text-gray-600 leading-relaxed'>
                        <p>
                            <a href="#chakma" className=" block hover:text-black">
                                NLP Chakma Sentiment Analysis <br />
                            </a>
                        </p>

                    </div>
                </div>
                <hr className='w-10/12 border border-[#6B7770]' />
                <div>
                    <p>
                        <a href="#tumor" className="text-xl text-[#6B7770] font-bold uppercase pb-2 block">
                            Ongoing Research
                        </a>
                    </p>
                    <div className='text-lg text-gray-600 leading-relaxed'>
                        <p>
                            <a href="#tumor" className="block hover:text-black">
                                Brain Tumor Classification and Segmentation
                            </a>
                        </p>
                        <p>
                            <a href="#camera" className="block hover:text-black">
                                Real-time home surveillence and object detection with YOLOv8 and ESP32 Cam
                            </a>
                        </p>
                    </div>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="md:ml-80 md:w-[calc(100%-288px)]">
                <div className="md:pt-10 text-[#6B7770]">
                    <h1 className='text-3xl md:text-5xl uppercase font-bold mb-10'>
                        Research Projects
                    </h1>
                    {/* LCG */}
                    <div id='lcg' className='mb-10 scroll-mt-24'>
                        <h2 className='text-xl md:text-2xl font-semibold uppercase mb-5'>LCG Attention for Load Forecasting</h2>
                        <div className='flex flex-col md:flex-row justify-center gap-8 items-start'>
                            <div>
                                <p className='text-lg'>
                                    LCG Attention model is a novel deep neural network which fuses an attention enhanced CNN layer with another attention enhanced LSTM. The model is validated using historical load data from the Chattogram district and other benchmark public datasets. Results show that it outperforms several state-of-the-art methods, setting a newbenchmark for regional short-term load prediction. It is primarily benchmarked for load forecasting, a time-series application and can be pioneered for other forecasting methods and NLP.
                                    Overall methodology involves data preprocessing, increasing the number of features by using time-lag and statsmodels, feature importance calculation, data splitting, LCG Attention model, and model evaluation, respectively.
                                </p>
                                <p className='mt-10'>
                                    <span className='text-lg font-bold'>Publication Url</span>
                                </p>
                                <ul className='list-disc pl-4 text-gray-600 underline space-y-2'>
                                    <li><a href="https://ieeexplore.ieee.org/document/11172259">[manuscript] A Novel Hybrid Approach for Load Forecasting: Multi-Head Attention Integrated LCG Model with Statistical Outlier Management</a></li>
                                </ul>
                            </div>
                            <Image
                                src="/research/new.png"
                                alt="hapcompass"
                                width={1000}
                                height={1000}
                                className="w-full h-full object-cover mb-4  border-2 border-[#006376] rounded-lg"
                            />
                        </div>
                    </div>
                    {/* Credit card fraud detection */}
                    <div id='card' className='mb-10 scroll-mt-24'>
                        <h2 className='text-xl md:text-2xl font-semibold uppercase mt-12 mb-2'>Credit card fraud detection</h2>
                        <p className='text-lg'>
                            This research investigates the use of machine learning algorithms, such as the Random Forest Classiﬁer, in the development of predictive models for the detection of credit card fraud. The model improves on previous attempts through the combination of secured datasets of anonymized transaction records and a variety of features such as average transaction volume and frequency patterns. The model was built and tested in a dataset that had unbalanced classes where the number of money-related transactions was signiﬁcantly greater than that of fraudulent transactions. The model’s predictive power was boosted by incorporating synthetic oversampling through SMOTE and other advanced preprocessing methods with AUC-ROC statistics of 0.95 being recorded. It also achieves an accuracy of 0.93 and an F1 score of 0.93 indicating strong performance of accurately distinguishing between genuine and distorted transactions.
                        </p>
                        <p className='mt-10'>
                            <span className='text-lg font-bold'>Publication Url</span>
                        </p>
                        <ul className='list-disc pl-4 text-gray-600 underline space-y-2'>
                            <li><a href="https://ieeexplore.ieee.org/document/11070257">[manuscript]Integrating Machine Learning and SMOTE Framework: An Effective Credit Card Fraud Detection System</a></li>
                        </ul>
                        <Image
                            src="/research/now.png"
                            alt="hapcompass"
                            width={500}
                            height={1200}
                            className="w-full h-full object-cover my-4 border-2 border-[#006376] rounded-lg"
                        />
                    </div>
                    {/* tomato */}
                    <div id='tomato' className='mb-10 scroll-mt-24'>
                        <h2 className='text-xl md:text-2xl font-semibold uppercase mt-12 mb-2'>Tomato Leaf Disease Classification with Transfer Learning</h2>
                        <p className='text-lg mb-10'>
                            A hybrid deep learning-based architecture is
                            established including a Convolutional Neural Network
                            (CNN) with attention mechanisms (Squeeze and Excitation, Spatial),
                            residual connections, and transfer learning to classify and detect diseases
                            in tomato leaves. This model demonstrates the potential of channel and
                            spatial attention to identify irregularities in leaves, as proven through its
                            99.69% accuracy in the Plant Village tomato leaf dataset. This innovative method enables the development of solutions that are more reliable
                            and simplified, which could be advantageous to both producers and agricultural practitioners in the future.
                        </p>
                        <p className='mt-10'>
                            <span className='text-lg font-black'>Accepted and Presented in Conference, will be available online soon</span>
                        </p>

                        <div className='flex flex-col md:flex-row gap-5 justify-center items-start'>
                            <p className='text-lg'>
                            </p>
                            <Image
                                src="/home/Picture2.png"
                                alt="hapcompass"
                                width={300}
                                height={300}
                                className="md:w-140 md:h-80 w-full h-full object-cover md:object-contain mt-8 border-2 border-[#006376] rounded-lg"
                            />
                        </div>
                    </div>
                    {/* chakma */}
                    <div id='chakma' className='mb-10 scroll-mt-24 md:mt-20'>
                        <h2 className='text-xl md:text-2xl font-semibold uppercase mt-12 mb-2'>NLP Chakma Sentiment Analysis</h2>
                        <div className='flex flex-col md:flex-row gap-5 md:gap-10 justify-center items-start'>
                            <div className='md:w-1/2'>
                                <p className='text-lg mb-10'>
                                    Natural Language Processing (NLP) is one of the trending topics in AI. Text
                                    classification, text completion, and sentiment analysis have been carried out for various
                                    languages, including English, Bengali, and Spanish. However, there are still languages
                                    where the potential of NLP is unexplored. The Chakma dialect, spoken by a significant
                                    ethnic group in the Chittagong Hill Tracts of Bangladesh, is one such area. This study
                                    makes a novel contribution by assessing sentiment classification in the Chakma language
                                    for the first time. A Chakma language dataset is formed by collecting some frequently
                                    used texts from social media networks and Chakma peers. It contains more than 8000
                                    text samples with three different labels: positive, negative, and neutral. To classify this
                                    low-resource language effectively, several Bert-based classifiers are fine-tuned and
                                    validated using accuracy metrics and confusion metrics. Among the classifiers,
                                    bert-base-uncased obtained 0.85 accuracy and 0.46 validation loss, surpassing the others.
                                    This study will work as a pioneer for other low-resource ethnic languages that are still
                                    unexplored in this domain.
                                </p>
                            </div>

                            <div className='flex-1'>
                                <p className='text-lg'>
                                </p>
                                <Image
                                    src="/research/chakma.jpg"
                                    alt="hapcompass"
                                    width={1200}
                                    height={1200}
                                    className="w-full h-full object-cover mb-4  border-2 border-[#006376] rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                    {/* tumor */}
                    <div id='tumor' className='mb-10 scroll-mt-24 '>
                        <h2 className='text-xl md:text-2xl font-semibold uppercase mt-12 mb-2 md:mb-4'>Brain Tumor Classification and <br /> Segmentation</h2>
                        <div className='flex flex-col md:flex-row gap-5 md:gap-10 justify-start items-start'>
                            <div className='md:w-1/2'>
                                <p className='text-lg md:mb-10'>
                                    <strong>Brain MRI segmentation</strong> is a highly used annotated dataset for brain tumor classification and segmentation. Currently, I am applying different transfer learning methods like ResNet, EfficientNet, MobileNet for classification. Besides, I am exploring the adaptibility of different U-Net variants including robust downsampler like ResNet, MobileNet V3 etc. and attention blocks as upsampler.
                                </p>
                            </div>

                            <div className='flex-1'>
                                <p className='text-lg'>
                                </p>
                                <Image
                                    src="/home/mri.png"
                                    alt="hapcompass"
                                    width={1200}
                                    height={1200}
                                    className="md:w-full md:h-80  md:object-contain object-cover mb-4 border-2 border-[#006376] rounded-lg md:py-2"
                                />
                            </div>
                        </div>
                    </div>
                    {/* cam */}
                    <div id='camera' className='mb-10 scroll-mt-24'>
                        <h2 className='text-xl md:text-2xl font-semibold uppercase mt-12 mb-2'>Real-time home surveillence and object detection with YOLOv8 and ESP32 Cam </h2>
                        <p className='text-lg mb-10'>
                            I am guiding a group of students on a Computer Vision project titled ESP-32 cam based home surveillance and
                            object detection with OpenCV and YOLOv3.
                        </p>
                        <div className='flex flex-col md:flex-row gap-5 justify-center items-start'>
                            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                                <iframe
                                    src="https://drive.google.com/file/d/1Cdb4qsjaqmwJopLzPlXioOtevUyd2WLl/preview"
                                    className="absolute top-0 left-0 w-full h-full md:h-80 rounded-4xl"
                                    allow="autoplay"
                                    allowFullScreen
                                ></iframe>
                            </div>

                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default ResearchPage;
