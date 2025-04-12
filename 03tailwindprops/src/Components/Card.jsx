import React from "react";

function Card({Username, btnText}) {
    
  return (
    <div>
        <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto mt-10">
            <img className="h-40 w-30 ml-25 rounded-xl mb-0" src="\src\assets\harshimage.jpg" alt="Harsh" />
            <h1 className="text-black text-xl font-bold">Name: {Username}</h1>
            <h2 className="text-xl font-bold mb-4">Card Title</h2>
            <p className="text-gray-900 text-2xl mb-4">
            This is a simple card component using Tailwind CSS.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            {btnText || "Click Me"} 
            </button>
        </div>
    </div>
  );
}

export default Card;
