"use client"

import SectionHeading from '@/components/Common/SectionHeading';
import Image from 'next/image';
import { React, useState } from 'react';

const RecipesForEatBetter = () => {

    const [showContent, setShowContent] = useState(false);

    const handleReadMore = () => {
        setShowContent(!showContent);
    };


    return (
        <div className="mt-8 mx-auto">
            <SectionHeading title={"Recipes"}></SectionHeading>

            <div className=''>

                {/* First Recipe */}

                <div className='flex-1'>
                    <div className=" mx-auto">
                        
                    </div>

                    <div className="max-w-3xl mx-auto  bg-white rounded overflow-hidden shadow-lg my-4">

                    <div className=" font-bold text-left text-2xl mb-2">Mussels Marinara di Amore</div>

                        <Image className="w-full h-48 object-cover"
                            src="https://healthflex.plethorathemes.com/health-coach/wp-content/uploads/sites/3/2016/03/Mussels-Marinara-di-Amore-1024x768.jpg"
                            alt={"title"}
                            width={500}
                            height={500} />
                        <div className="px-6 py-4">

                            <p className="text-gray-500 text-sm">Published on 23-03-1699</p>

                            <p className="text-gray-700 text-base mb-2">Mussels and linguine in a spicy tomato broth are very flavorful...</p>

                            {showContent && <div className="text-gray-700">
                                <div>

                                    <div>
                                        <h2 className="font-bold text-2xl mb-4">Greek Salad Recipe</h2>

                                        <div>
                                            <h3 className="font-bold text-xl mb-2">Ingredients</h3>
                                            <ul className="list-decimal ml-6 mb-4">
                                                <li>1 clove garlic</li>
                                                <li>3 tablespoons olive oil</li>
                                                <li>3 tablespoons red wine vinegar</li>
                                                <li>1 teaspoon dried oregano</li>
                                                <li>kosher salt and freshly ground black pepper to taste</li>
                                                <li>4 cups roughly chopped ripe tomatoes, I used cherry tomatoes</li>
                                                <li>2 cups roughly chopped cucumbers, I used Persian cucumbers</li>
                                                <li>2 red or yellow peppers, cut into chunks</li>
                                                <li>1/2 red onion, thinly sliced</li>
                                                <li>8 ounces feta, drained and crumbled</li>
                                                <li>freshly ground black pepper to taste</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-xl mb-2">Instructions</h3>
                                            <ol className="list-decimal ml-6">
                                                <li>
                                                    In a small bowl, whisk together all the ingredients for the vinaigrette. Season the
                                                    vinaigrette with salt and pepper and set it aside.
                                                </li>
                                                <li>
                                                    In a large bowl, combine all of the vegetables and gently toss together. Pour the Greek
                                                    vinaigrette over the vegetables, and again, gently toss to coat them. Crumble the feta
                                                    over the salad and then very gently toss the cheese into the vegetables.
                                                </li>
                                                <li>
                                                    Taste and adjust for more freshly ground black pepper if desired. Serve immediately at
                                                    room temperature, or chill before serving.
                                                </li>
                                            </ol>
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

                    <div className=" font-bold text-left text-2xl mb-2">Avocado and Tuna Tapas</div>

                        <Image className="w-full h-48 object-cover"
                            src="https://healthflex.plethorathemes.com/health-coach/wp-content/uploads/sites/3/2016/03/avogado-tapas-1024x683.jpg"
                            alt={"title"}
                            width={500}
                            height={500} />
                        <div className="px-6 py-4">

                            <p className="text-gray-500 text-sm">Published on 23-03-1699</p>

                            <p className="text-gray-700 text-base mb-2">This recipe is great for experimenting with a variety of different vegetables, spices, and vinegars....</p>

                            {showContent && <div className="text-gray-700">
                                <div>

                                <div>
      <h2 className="font-bold text-2xl mb-4">Greek Salad Recipe</h2>

      <div>
        <h3 className="font-bold text-xl mb-2">Ingredients</h3>
        <ul className="list-decimal ml-6 mb-4">
          <li>1 clove garlic</li>
          <li>3 tablespoons olive oil</li>
          <li>3 tablespoons red wine vinegar</li>
          <li>1 teaspoon dried oregano</li>
          <li>kosher salt and freshly ground black pepper to taste</li>
          <li>4 cups roughly chopped ripe tomatoes, I used cherry tomatoes</li>
          <li>2 cups roughly chopped cucumbers, I used Persian cucumbers</li>
          <li>2 red or yellow peppers, cut into chunks</li>
          <li>1/2 red onion, thinly sliced</li>
          <li>8 ounces feta, drained and crumbled</li>
          <li>freshly ground black pepper to taste</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-xl mb-2">Instructions</h3>
        <ol className="list-decimal ml-6">
          <li>
            In a small bowl, whisk together all the ingredients for the vinaigrette. Season the
            vinaigrette with salt and pepper and set it aside.
          </li>
          <li>
            In a large bowl, combine all of the vegetables and gently toss together. Pour the Greek
            vinaigrette over the vegetables, and again, gently toss to coat them. Crumble the feta
            over the salad and then very gently toss the cheese into the vegetables.
          </li>
          <li>
            Taste and adjust for more freshly ground black pepper if desired. Serve immediately at
            room temperature, or chill before serving.
          </li>
        </ol>
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

                    <div className=" font-bold text-left text-2xl mb-2">Greek Villager’s Salad</div>

                        <Image className="w-full h-48 object-cover"
                            src="https://healthflex.plethorathemes.com/health-coach/wp-content/uploads/sites/3/2016/02/greek-salad-1024x683.jpg"
                            alt={"title"}
                            width={500}
                            height={500} />
                        <div className="px-6 py-4">

                            <p className="text-gray-500 text-sm">Published on 23-03-1699</p>

                            <p className="text-gray-700 text-base mb-2">I tried to recreate the best Greek Salad I have ever had.Serve with crusty bread to soak up the wonderful juice at the bottom of the salad bowls. If available please use fresh herbs..</p>

                            {showContent && <div className="text-gray-700">
                                <div>

                                    <div>
                                        <h2 className="font-bold text-2xl mb-4">Greek Salad Recipe</h2>

                                        <div>
      <h2 className="font-bold text-2xl mb-4">Greek Salad Recipe</h2>

      <div>
        <h3 className="font-bold text-xl mb-2">Ingredients</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>For the Greek Vinaigrette</li>
          <ul className="list-inside ml-6">
            <li>1 clove garlic</li>
            <li>3 tablespoons olive oil</li>
            <li>3 tablespoons red wine vinegar</li>
            <li>1 teaspoon dried oregano</li>
            <li>kosher salt and freshly ground black pepper to taste</li>
          </ul>
          <li>For the Salad</li>
          <ul className="list-inside ml-6">
            <li>4 cups roughly chopped ripe tomatoes, I used cherry tomatoes</li>
            <li>2 cups roughly chopped cucumbers, I used Persian cucumbers</li>
            <li>2 red or yellow peppers, cut into chunks</li>
            <li>1/2 red onion, thinly sliced</li>
            <li>8 ounces feta, drained and crumbled</li>
            <li>freshly ground black pepper to taste</li>
          </ul>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-xl mb-2">Instructions</h3>
        <ol className="list-decimal ml-6">
          <li>
            In a small bowl, whisk together all the ingredients for the vinaigrette. Season the
            vinaigrette with salt and pepper and set it aside.
          </li>
          <li>
            In a large bowl, combine all of the vegetables and gently toss together. Pour the Greek
            vinaigrette over the vegetables, and again, gently toss to coat them. Crumble the feta
            over the salad and then very gently toss the cheese into the vegetables.
          </li>
          <li>
            Taste and adjust for more freshly ground black pepper if desired. Serve immediately at
            room temperature, or chill before serving.
          </li>
        </ol>
      </div>
    </div>

                                        <div>
                                            <h3 className="font-bold text-xl mb-2">Instructions</h3>
                                            <ol className="list-decimal ml-6">
                                                <li>
                                                    In a small bowl, whisk together all the ingredients for the vinaigrette. Season the
                                                    vinaigrette with salt and pepper and set it aside.
                                                </li>
                                                <li>
                                                    In a large bowl, combine all of the vegetables and gently toss together. Pour the Greek
                                                    vinaigrette over the vegetables, and again, gently toss to coat them. Crumble the feta
                                                    over the salad and then very gently toss the cheese into the vegetables.
                                                </li>
                                                <li>
                                                    Taste and adjust for more freshly ground black pepper if desired. Serve immediately at
                                                    room temperature, or chill before serving.
                                                </li>
                                            </ol>
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
    );
};

export default RecipesForEatBetter;