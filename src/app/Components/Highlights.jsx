import Image from 'next/image';
import React from 'react';

const Highlights = () => {
    return (
        <div className=''>
            <div className="flex items-center gap-4 mx-5 md:max-w-[1300px] md:mx-auto my-10 md:my-3">
                <hr className="flex-1 border-[#6B7770] border-2" />
                <div className="text-4xl font-semibold text-[#6B7770]">Highlights</div>
                <hr className="flex-1 border-[#6B7770] border-2" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:max-w-[1300px] lg:mx-auto gap-15 md:gap-10 mx-5 my-10 md:my-4 ">
                {/* card1 */}
                <div className='flex flex-col justify-center items-center gap-8'>
                    {/* image */}
                    <div className='md:h-70 md:w-70  flex flex-col justify-center items-center'>
                        <Image
                            src="/home/Picture1.png"
                            alt="hapcompass"
                            width={200}
                            height={200}
                            className="w-full h-full object-contain hover:scale-115 transition-all duration-300 mb-4"
                        />
                        <div className='text-2xl font-semibold text-[#6B7770]'>LCG Attention</div>
                    </div>
                    {/* description */}
                    <div>
                        <p className='text-[#6B7770] leading-8 max-w-10/12 md:max-w-full mx-auto text-center md:text-start'>
                            LCG Attention model is a novel deep neural network which fuses an attention enhanced CNN layer with another attention enhanced LSTM. The model is validated across the five different regional datasets achieving 0.98 - 0.99 r2score outperforming sota models. It is primarily benchmarked for load forecasting, a time-series application and can be pioneered for other forecasting methods and NLP.
                        </p>
                    </div>
                </div>
                {/* card 2 */}
                <div className='flex flex-col justify-center items-center gap-8'>
                    {/* image */}
                    <div className='md:h-70 md:w-70  flex flex-col justify-center items-center my-8 md:my-0'>
                        <Image
                            src="/home/Picture2.png"
                            alt="Biisq"
                            width={200}
                            height={200}
                            className="w-full h-full object-contain hover:scale-115 transition-all duration-300 mb-8 md:mb-4"
                        />
                        <div className='text-2xl font-semibold text-[#6B7770]'>Leaf disease classification</div>
                    </div>
                    {/* description */}
                    <div>
                        <p className='text-[#6B7770] leading-8 max-w-10/12 md:max-w-full mx-auto text-center md:text-start'>
                            A hybrid deep learning-based architecture is
                            established using CNN with attention mechanisms,residual connections, and transfer learning to classify and detect 10 different diseases
                            in tomato leaves. This model demonstrates the potential of channel and spatial attention to identify irregularities in leaves, as proven through its
                            99.69% accuracy in the tomato leaf image dataset.
                        </p>
                    </div>
                </div>
                {/* card 3 */}
                <div className='flex flex-col justify-center items-center gap-8'>
                    {/* image */}
                    <div className='md:h-50 md:w-60 flex flex-col justify-center items-center md:mb-5'>
                        <Image
                            src="/home/mri.png"
                            alt="cse5825"
                            width={90}
                            height={40}
                            className="w-full h-full object-contain hover:scale-115 transition-all duration-300 mb-4"
                        />
                        <div className='text-2xl font-semibold text-[#6B7770]'>Brain Tumor Segmentation</div>
                    </div>
                    {/* description */}
                    <div>
                        <p className='text-[#6B7770] leading-8 max-w-10/12 md:max-w-full mx-auto text-center md:text-start'>
                            <strong>Brain MRI segmentation</strong> is a highly used annotated dataset for brain tumor classification and segmentation. Currently, I am applying different transfer learning methods like ResNet, EfficientNet, MobileNet for classification. Besides, I am exploring the adaptibility of different U-Net variants including robust downsampler like ResNet, MobileNet V3 etc. and attention blocks as upsampler.
                        </p>
                    </div>
                </div>
                {/* card 4 */}
                <div className='flex flex-col justify-center items-center gap-8'>
                    {/* image */}
                    <div className='md:h-70 md:w-70  flex flex-col justify-center items-center'>
                        <Image
                            src="/home/language.png"
                            alt="explore"
                            width={200}
                            height={200}
                            className="w-full h-full object-contain hover:scale-115 transition-all duration-300 mb-8"
                        />
                        <div className='text-2xl font-semibold text-[#6B7770] text-center md:text-start'>Sentiment Classification on Chakma Language</div>
                    </div>
                    {/* description */}
                    <div>
                        <p className='text-[#6B7770] leading-8 max-w-10/12 md:max-w-full mx-auto text-center md:text-start'>
                            Chakma, an ethnic language from Bangladesh, was largely unexplored in sentiment classification. Considering this as an opportunity, I created a raw Chakma dataset with sentiment identification, then applied BERT and incorporated early fusion with Word2Vec embedding. I collected chakma text from social media, chakma peers etc. and identified the sentiment. My model achieved 80 - 85% accuracy among several bert classifiers. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Highlights;