"use client";
import { useState } from "react";

const Page = () => {
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendClick = () => {
    const { email, subject, message } = formData;

    if (!email || !subject || !message) {
      alert("All fields are required!");
      return;
    }

    setIsSent(true);

    // Optional: Hide the message after a few seconds
    setTimeout(() => {
      setIsSent(false);
    }, 3000);
  };

  return (
    <div>
      <div className="container px-6 py-12 mx-auto flex flex-col justify-center items-start m-10">
        <div>
          <p className="font-medium text-blue-500 dark:text-blue-400">Contact us</p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Get in touch</h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">Our friendly team is always here to chat.</p>
        </div>
      </div>

      <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative w-[50%] justify-center mx-auto">
        <div className="z-10">
          <h5 className="text-3xl font-bold text-black m-4 text-center">Feedback</h5>
          <p className="text-[#000000] mb-4 w-full text-center">
            Got a technical issue? Want to send feedback about a beta feature? Let us know.
          </p>
        </div>
        <div>
          {isSent && <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>}

          <div className="flex flex-col">
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-[#F7FAFC] border border-[#33353F] placeholder-gray-600 text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-black block text-sm mb-2 font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="bg-[#F7FAFC] border border-[#33353F] placeholder-gray-600 text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-black block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="bg-[#F7FAFC] border border-[#33353F] placeholder-gray-600 text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="button"
              onClick={handleSendClick}
              className="bg-blue-400 hover:bg-white hover:border-blue-500 hover:border-2 hover:text-black text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
