"use client"

import SectionHeading from '@/components/Common/SectionHeading';
import Image from 'next/image';
import { React, useState } from 'react';

const MotivationForGetFIt = () => {

    const [showContent, setShowContent] = useState(false);

    const handleReadMore = () => {
        setShowContent(!showContent);
    };

    return (
        <div>
            <div>
                <SectionHeading title={"Motivation"}></SectionHeading>

                <div className=''>

                    {/* First Recipe */}

                    <div className='flex-1'>
                        <div className=" mx-auto">

                        </div>

                        <div className="max-w-3xl mx-auto  bg-white rounded overflow-hidden shadow-lg my-4">

                            <div className=" font-bold text-left text-2xl mb-2">How to deal with Emotional Eating</div>

                            <Image className="w-full h-48 object-cover"
                                src="https://healthflex.plethorathemes.com/health-coach/wp-content/uploads/sites/3/2016/02/eating-donut-1024x513.jpg"
                                alt={"title"}
                                width={500}
                                height={500} />
                            <div className="px-6 py-4">

                                <p className="text-gray-500 text-sm">Published on 23-03-1699</p>

                                <p className="text-gray-700 text-base mb-2">Find your balance in a holistic way</p>

                                {showContent && <div className="text-gray-700">
                                    <div>

                                        <div>
                                            <p>Dealing with emotional eating involves developing self-awareness, adopting healthier coping mechanisms, and fostering a positive relationship with food. It is crucial to recognize and understand the triggers that lead to emotional eating, such as stress, boredom, or sadness. When faced with such emotions, consider alternative ways to address them, such as engaging in physical activity, practicing mindfulness or meditation, or seeking support from friends and family. <br /> <br /> Establishing a balanced and mindful approach to eating, where meals are viewed as nourishment rather than emotional comfort, can also be beneficial. Creating a supportive environment by keeping healthier food options readily available and avoiding excessive availability of trigger foods is another effective strategy. Seeking professional help, such as therapy or counseling, can provide valuable insights and guidance in managing emotional eating patterns. Ultimately, the key lies in cultivating a mindful and compassionate approach to both emotions and eating habits.</p> <br />
                                            <div>
                                                <p> In addition to addressing emotional eating triggers and adopting healthier coping mechanisms, it is essential to cultivate a positive mindset around food and self-image. Avoid labeling certain foods as Good or bad and instead focus on building a balanced and sustainable diet that includes a variety of nutrient-rich foods. Practice intuitive eating by listening to your body is hunger and fullness cues rather than relying on external factors. Establishing regular eating patterns with well-balanced meals and snacks can help stabilize blood sugar levels and prevent impulsive eating. <br /> <br /> Surround yourself with a supportive network of friends and family who understand your goals and can provide encouragement. Finally, be patient with yourself. Changing emotional eating habits takes time and effort, so celebrate small victories and learn from setbacks without falling into self-criticism. By fostering a holistic and positive approach to both emotional well-being and nutrition, you can develop healthier habits that contribute to a more balanced and fulfilling life.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>}

                                <button
                                    className="text-blue-500 hover:underline focus:outline-none"
                                    onClick={handleReadMore}
                                >
                                    {showContent ? 'Read Less' : 'Read More'}
                                </button>



                            </div>
                        </div>
                    </div>

                    {/* Second Recipe */}

                    <div className='mt-8'>
                        <div className=" mx-auto">

                        </div>

                        <div className="max-w-3xl mx-auto  bg-white rounded overflow-hidden shadow-lg my-4">

                            <div className=" font-bold text-left text-2xl mb-2">Lose Weight by coming to terms with the way you see yourself!</div>

                            <Image className="w-full h-48 object-cover"
                                src="https://healthflex.plethorathemes.com/health-coach/wp-content/uploads/sites/3/2016/02/success-story-person.jpg"
                                alt={"title"}
                                width={500}
                                height={500} />
                            <div className="px-6 py-4">

                                <p className="text-gray-500 text-sm">Published on 23-03-1699</p>

                                <p className="text-gray-700 text-base mb-2">For a Healthy Leaving!</p>

                                {showContent && <div className="text-gray-700">
                                    <div>

                                        <div>

                                            <div>
                                                <p>Dealing with emotional eating involves developing self-awareness, adopting healthier coping mechanisms, and fostering a positive relationship with food. It is crucial to recognize and understand the triggers that lead to emotional eating, such as stress, boredom, or sadness. When faced with such emotions, consider alternative ways to address them, such as engaging in physical activity, practicing mindfulness or meditation, or seeking support from friends and family. <br /> <br /> Establishing a balanced and mindful approach to eating, where meals are viewed as nourishment rather than emotional comfort, can also be beneficial. Creating a supportive environment by keeping healthier food options readily available and avoiding excessive availability of trigger foods is another effective strategy. Seeking professional help, such as therapy or counseling, can provide valuable insights and guidance in managing emotional eating patterns. Ultimately, the key lies in cultivating a mindful and compassionate approach to both emotions and eating habits.</p> <br />
                                                <div>
                                                    <p> In addition to addressing emotional eating triggers and adopting healthier coping mechanisms, it is essential to cultivate a positive mindset around food and self-image. Avoid labeling certain foods as good or bad and instead focus on building a balanced and sustainable diet that includes a variety of nutrient-rich foods. Practice intuitive eating by listening to your body is hunger and fullness cues rather than relying on external factors. Establishing regular eating patterns with well-balanced meals and snacks can help stabilize blood sugar levels and prevent impulsive eating. <br /> <br /> Surround yourself with a supportive network of friends and family who understand your goals and can provide encouragement. Finally, be patient with yourself. Changing emotional eating habits takes time and effort, so celebrate small victories and learn from setbacks without falling into self-criticism. By fostering a holistic and positive approach to both emotional well-being and nutrition, you can develop healthier habits that contribute to a more balanced and fulfilling life.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>}

                                <button
                                    className="text-blue-500 hover:underline focus:outline-none"
                                    onClick={handleReadMore}
                                >
                                    {showContent ? 'Read Less' : 'Read More'}
                                </button>



                            </div>
                        </div>
                    </div>


                    {/* Third Recipe */}

                    <div className='mt-8'>
                        <div className=" mx-auto">

                        </div>

                        <div className="max-w-3xl mx-auto  bg-white rounded overflow-hidden shadow-lg my-4">

                            <div className=" font-bold text-left text-2xl mb-2">How to prepare for a marathon</div>

                            <Image className="w-full h-48 object-cover"
                                src="https://healthflex.plethorathemes.com/health-coach/wp-content/uploads/sites/3/2016/02/blog_article_1-1024x684.jpg"
                                alt={"title"}
                                width={500}
                                height={500} />
                            <div className="px-6 py-4">

                                <p className="text-gray-500 text-sm">Published on 23-03-1699</p>

                                <p className="text-gray-700 text-base mb-2">Diet and exercise routine tips and tricks!</p>

                                {showContent && <div className="text-gray-700">
                                    <div>

                                        <div>

                                            <div>
                                                <p>Dealing with emotional eating involves developing self-awareness, adopting healthier coping mechanisms, and fostering a positive relationship with food. It is crucial to recognize and understand the triggers that lead to emotional eating, such as stress, boredom, or sadness. When faced with such emotions, consider alternative ways to address them, such as engaging in physical activity, practicing mindfulness or meditation, or seeking support from friends and family. <br /> <br /> Establishing a balanced and mindful approach to eating, where meals are viewed as nourishment rather than emotional comfort, can also be beneficial. Creating a supportive environment by keeping healthier food options readily available and avoiding excessive availability of trigger foods is another effective strategy. Seeking professional help, such as therapy or counseling, can provide valuable insights and guidance in managing emotional eating patterns. Ultimately, the key lies in cultivating a mindful and compassionate approach to both emotions and eating habits.</p> <br />
                                                <div>
                                                    <p> In addition to addressing emotional eating triggers and adopting healthier coping mechanisms, it is essential to cultivate a positive mindset around food and self-image. Avoid labeling certain foods as good or bad and instead focus on building a balanced and sustainable diet that includes a variety of nutrient-rich foods. Practice intuitive eating by listening to your body is hunger and fullness cues rather than relying on external factors. Establishing regular eating patterns with well-balanced meals and snacks can help stabilize blood sugar levels and prevent impulsive eating. <br /> <br /> Surround yourself with a supportive network of friends and family who understand your goals and can provide encouragement. Finally, be patient with yourself. Changing emotional eating habits takes time and effort, so celebrate small victories and learn from setbacks without falling into self-criticism. By fostering a holistic and positive approach to both emotional well-being and nutrition, you can develop healthier habits that contribute to a more balanced and fulfilling life.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>}

                                <button
                                    className="text-blue-500 hover:underline focus:outline-none"
                                    onClick={handleReadMore}
                                >
                                    {showContent ? 'Read Less' : 'Read More'}
                                </button>



                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default MotivationForGetFIt;