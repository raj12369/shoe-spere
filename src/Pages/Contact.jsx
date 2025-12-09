import React from "react";
function Contact() {
  return (
    <div className="py-16 px-8 text-center">
      <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
      <form className="max-w-md mx-auto mt-8 space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border rounded-md p-2" />
        <input type="email" placeholder="Your Email" className="w-full border rounded-md p-2" />
        <textarea placeholder="Message" className="w-full border rounded-md p-2 h-28"></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;