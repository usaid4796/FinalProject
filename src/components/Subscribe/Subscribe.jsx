import React from "react";

const Subscribe = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    window.location.reload(); 
  };

  return (
    <div id="ContactUs"
      data-aos="zoom-in"
      className="mb-20 bg-slate-700 dark:bg-gray-800 text-white "
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              data-aos="fade-up"
              type="email"
              placeholder="Enter your Gmail"
              className="w-full p-3 text-black rounded-md"
              required
              pattern="[a-zA-Z0-9._%+-]+@gmail\.com"
              title="Please enter a valid Gmail address"
            />
            <button
              type="submit"
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
