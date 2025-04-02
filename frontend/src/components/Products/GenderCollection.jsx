import React from "react";
import img1 from "../../assets/mens-collection.webp";
import img2 from "../../assets/womens-collection.webp";
import { Link } from "react-router-dom";

const GenderCollection = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 lg:px-0 text-center">
      {/* Section Heading */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Discover Your Signature Style
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Curated Collections for Men & Women - Elevate Your Wardrobe
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Women's Collection */}
        <div className="relative w-full">
          <img
            src={img2}
            alt="Women's Collection"
            className="w-full min-h-[500px] md:h-[600px] lg:h-[700px] object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-white bg-opacity-90 p-4 rounded-md shadow-md">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
              Timeless Elegance
            </h2>
            <p className="text-gray-700 text-sm mb-2">
              Discover chic and trendy fashion designed for modern women.
            </p>
            <Link
              to="/collections/all?gender=women"
              className="text-gray-900 font-medium hover:underline"
            >
              Shop Women's Collection →
            </Link>
          </div>
        </div>

        {/* Men's Collection */}
        <div className="relative w-full">
          <img
            src={img1}
            alt="Men's Collection"
            className="w-full min-h-[500px] md:h-[600px] lg:h-[700px] object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-white bg-opacity-90 p-4 rounded-md shadow-md">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
              Bold & Sophisticated
            </h2>
            <p className="text-gray-700 text-sm mb-2">
              Elevate your wardrobe with styles crafted for confidence.
            </p>
            <Link
              to="/collections/all?gender=men"
              className="text-gray-900 font-medium hover:underline"
            >
              Shop Men's Collection →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollection;
