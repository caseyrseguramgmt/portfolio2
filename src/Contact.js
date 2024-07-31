import React from 'react';

function Contact() {
  return (
    <div className="text-center py-8">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <p className="mt-4 text-lg">This is the contact page.</p>
      <form className="mt-8 max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-left font-bold mb-2" htmlFor="name">Name</label>
          <input className="w-full px-3 py-2 border rounded" type="text" id="name" name="name" />
        </div>
        <div className="mb-4">
          <label className="block text-left font-bold mb-2" htmlFor="email">Email</label>
          <input className="w-full px-3 py-2 border rounded" type="email" id="email" name="email" />
        </div>
        <div className="mb-4">
          <label className="block text-left font-bold mb-2" htmlFor="message">Message</label>
          <textarea className="w-full px-3 py-2 border rounded" id="message" name="message" rows="4"></textarea>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
