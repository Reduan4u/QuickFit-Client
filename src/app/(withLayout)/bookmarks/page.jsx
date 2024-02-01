import React from 'react';

const page = () => {

    const data = [
        {
            id: 1,
            image: 'https://quick-fit-client.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F52gpnBGQ%2Frsz-nutrition.jpg&w=1920&q=75',
            title: 'Mindful Eating Practices',
            description: 'Mindful eating is a holistic approach to nourishing the body that goes beyond mere consumption, emphasizing awareness.',
          },  {
            id: 2,
            image: 'https://quick-fit-client.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F52gpnBGQ%2Frsz-nutrition.jpg&w=1920&q=75',
            title: 'Mindful Eating Practices',
            description: 'Mindful eating is a holistic approach to nourishing the body that goes beyond mere consumption, emphasizing awareness.',
          },  {
            id: 3,
            image: 'https://quick-fit-client.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F52gpnBGQ%2Frsz-nutrition.jpg&w=1920&q=75',
            title: 'Mindful Eating Practices',
            description: 'Mindful eating is a holistic approach to nourishing the body that goes beyond mere consumption, emphasizing awareness.',
          },
       
      ];
    

    return (
    //    <div>
    //          <div className="max-w-sm rounded overflow-hidden shadow-lg">
    //   <img className="w-full h-48 object-cover" src="https://quick-fit-client.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F52gpnBGQ%2Frsz-nutrition.jpg&w=1920&q=75" alt="title" />
    //   <div className="px-6 py-4">
    //     <div className="font-bold text-xl mb-2">Mindful Eating Practices</div>
    //     <p className="text-gray-700 text-base">Mindful eating is a holistic approach to nourishing the body that goes beyond mere consumption, emphasizing awareness, gratitude, and intentional choices. This practice encourages individuals to be fully present during meals, savoring each bite and cultivating a deeper connection with the eating experience. </p>
    //   </div>
    //   <div className="px-6 pt-4 pb-2">
    //     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    //       Read More
    //     </button>
    //   </div>
    // </div>

    // <div className="max-w-sm rounded overflow-hidden shadow-lg">
    //   <img className="w-full h-48 object-cover" src="https://quick-fit-client.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F52gpnBGQ%2Frsz-nutrition.jpg&w=1920&q=75" alt="title" />
    //   <div className="px-6 py-4">
    //     <div className="font-bold text-xl mb-2">Mindful Eating Practices</div>
    //     <p className="text-gray-700 text-base">Mindful eating is a holistic approach to nourishing the body that goes beyond mere consumption, emphasizing awareness, gratitude, and intentional choices. This practice encourages individuals to be fully present during meals, savoring each bite and cultivating a deeper connection with the eating experience. </p>
    //   </div>
    //   <div className="px-6 pt-4 pb-2">
    //     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    //       Read More
    //     </button>
    //   </div>
    // </div>


    //    </div>

    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">My Bookmarks</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      
        <div  className="p-4 border border-gray-200 rounded-md hover:shadow-md">
        <img className="w-full h-48 object-cover" src="https://quick-fit-client.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F52gpnBGQ%2Frsz-nutrition.jpg&w=1920&q=75" alt="title" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Mindful Eating Practices</h2>
            <p className="text-gray-600 mb-4">Mindful eating is a holistic approach to nourishing the body that goes beyond mere consumption, emphasizing awareness.</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">Read More</button>
          </div>
        </div>
        <div  className="p-4 border border-gray-200 rounded-md hover:shadow-md">
        <img className="w-full h-48 object-cover" src="https://quick-fit-client.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F52gpnBGQ%2Frsz-nutrition.jpg&w=1920&q=75" alt="title" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Mindful Eating Practices</h2>
            <p className="text-gray-600 mb-4">Mindful eating is a holistic approach to nourishing the body that goes beyond mere consumption, emphasizing awareness.</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">Read More</button>
          </div>
        </div>
        
        
        <div  className="p-4 border border-gray-200 rounded-md hover:shadow-md">
        <img className="w-full h-48 object-cover" src="https://quick-fit-client.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F52gpnBGQ%2Frsz-nutrition.jpg&w=1920&q=75" alt="title" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Mindful Eating Practices</h2>
            <p className="text-gray-600 mb-4">Mindful eating is a holistic approach to nourishing the body that goes beyond mere consumption, emphasizing awareness.</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">Read More</button>
          </div>
        </div>
        
    </div>
  </div>

    );
};

export default page;