'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full min-h-screen bg-[#1A3C36] flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-5 text-white">MAKE AN APPOINTMENT!</h2>
      <form className="w-full max-w-[1100px] mx-auto px-8 py-20 space-y-14">
        <input
          type="text"
          name="name"
          placeholder="NAME"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-transparent border-b-1 border-[#7ED6C1] text-[#7ED6C1] placeholder-[#7ED6C1] uppercase focus:outline-none py-1 "
        />

        <input
          type="email"
          name="email"
          placeholder="EMAIL"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-transparent border-b-1 border-[#7ED6C1] text-[#7ED6C1] placeholder-[#7ED6C1] uppercase focus:outline-none py-1 "
        />

        <input
          type="tel"
          name="phone"
          placeholder="PHONE"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-transparent border-b-1 border-[#7ED6C1] text-[#7ED6C1] placeholder-[#7ED6C1] uppercase focus:outline-none py-1 "
        />

        <textarea
          name="message"
          placeholder="TELL US ABOUT YOUR PROJECT"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-transparent border-b-1 border-[#7ED6C1] text-[#7ED6C1] placeholder-[#7ED6C1] uppercase focus:outline-none py-1  resize-none"
        />
      </form>
    </div>
  );
}

// "use client";

// export default function Contact() {
//   return (
//     <section
//       id="contactus"
//       className="bg-[#1A3C36] min-h-screen py-16 px-4 md:px-20 text-white"
//     >
//       <h2 className="text-4xl font-bold mb-10">GET IN TOUCH!</h2>

//       <div className="grid md:grid-cols-2 gap-10">

//         <form className="space-y-6">
//           <input
//             type="text"
//             placeholder="NAME"
//             className="w-full px-4 py-3 rounded bg-white text-black placeholder:text-gray-600 focus:outline-none"
//           />
//           <input
//             type="email"
//             placeholder="EMAIL"
//             className="w-full px-4 py-3 rounded bg-white text-black placeholder:text-gray-600 focus:outline-none"
//           />
//           <input
//             type="tel"
//             placeholder="PHONE"
//             className="w-full px-4 py-3 rounded bg-white text-black placeholder:text-gray-600 focus:outline-none"
//           />
//           <textarea
//             placeholder="TELL US ABOUT YOUR PROJECT"
//             rows={5}
//             className="w-full px-4 py-3 rounded bg-white text-black placeholder:text-gray-600 focus:outline-none"
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-[#7ED6C1] text-[#1A3C36] font-semibold px-6 py-3 rounded hover:bg-white transition"
//           >
//             MAKE AN APPOINTMENT
//           </button>
//         </form>

//         <div>
//           <h2 className="text-4xl font-bold mb-6">Address</h2>
//           <div className="w-full h-[295px]">
//             <iframe
//               title="office-location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13610.786168113401!2d74.3496938!3d31.5203696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904dd7bcb0b65%3A0x70f4a4d08c9e2603!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1623925317922!5m2!1sen!2s"
//               width="100%"
//               height="100%"
//               allowFullScreen
//               loading="lazy"
//               style={{ border: 0 }}
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
