import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Subscribe = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sm6lc21",
        "template_mz95p8e",
        form.current,
        "vkxSW2LB99fB8u6f-",
      )
      .then(() => {
        alert("Subscribed successfully! 🎉");
        form.current.reset();
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
        alert("Something went wrong!");
      });
  };

  return (
    <div
      id="ContactUs"
      data-aos="zoom-in"
      className="mb-20 bg-slate-700 dark:bg-gray-800 text-white"
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>

          <form ref={form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 text-black rounded-md mb-3"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Enter your Gmail"
              className="w-full p-3 text-black rounded-md"
              required
              pattern="[a-zA-Z0-9._%+\-]+@gmail\.com"
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
