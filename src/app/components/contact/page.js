
// "use client";

// import { useState } from "react";
// import "./contact.css";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     country: "",
//     product: "",
//     message: "",
//   });

//   const [status, setStatus] = useState({
//     loading: false,
//     success: false,
//     error: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setStatus({
//       loading: true,
//       success: false,
//       error: "",
//     });

//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Failed to send message.");
//       }

//       setStatus({
//         loading: false,
//         success: true,
//         error: "",
//       });

//       setFormData({
//         name: "",
//         email: "",
//         company: "",
//         country: "",
//         product: "",
//         message: "",
//       });
//     } catch (error) {
//       setStatus({
//         loading: false,
//         success: false,
//         error:
//           error.message ||
//           "Something went wrong. Please try again later.",
//       });
//     }
//   };

//   return (
//     <section className="contact-section" id="contact">
//       <div className="contact-container">

//         {/* LEFT SIDE */}
//         <div className="contact-info">
//           <span className="contact-label">CONTACT US</span>

//           <h2>
//             Let's Build a
//             <br />
//             <em>Global Partnership.</em>
//           </h2>

//           <p className="contact-intro">
//           Looking for a reliable supplier of premium Indonesian craft products? Tell us about your requirements, and our team will get back to you shortly.
//           </p>

//           <div className="contact-details">
//             <div className="contact-detail-item">
//               <span>EMAIL</span>

//               <a href="mailto:info@landsnature.id">
//                 info@landsnature.id
//               </a>
//             </div>

//             <div className="contact-detail-item">
//               <span>BUSINESS</span>

//               <p>
//                 Manufacturer & Exporter
//               </p>
//             </div>

//             <div className="contact-detail-item">
//               <span>ORIGIN</span>

//               <p>Indonesia</p>
//             </div>
//           </div>

//           <div className="contact-decoration">
//             <span>LANDSNATURE</span>
//             <div></div>
//             <span>GLOBAL NUSANTARA</span>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="contact-form-wrapper">

//           <div className="contact-form-heading">
//             <span>BUSINESS INQUIRY</span>
//             <h3>Send us a message</h3>

//             <p>
//               Complete the form below and our team will contact you regarding
//               your product requirements.
//             </p>
//           </div>

//           <form className="contact-form" onSubmit={handleSubmit}>

//             <div className="contact-form-row">

//               <div className="contact-input-group">
//                 <label htmlFor="name">
//                   Full Name <span>*</span>
//                 </label>

//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="Your name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="contact-input-group">
//                 <label htmlFor="email">
//                   Email Address <span>*</span>
//                 </label>

//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="you@company.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//             </div>

//             <div className="contact-form-row">

//               <div className="contact-input-group">
//                 <label htmlFor="company">
//                   Company
//                 </label>

//                 <input
//                   type="text"
//                   id="company"
//                   name="company"
//                   placeholder="Company name"
//                   value={formData.company}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="contact-input-group">
//                 <label htmlFor="country">
//                   Country
//                 </label>

//                 <input
//                   type="text"
//                   id="country"
//                   name="country"
//                   placeholder="Your country"
//                   value={formData.country}
//                   onChange={handleChange}
//                 />
//               </div>

//             </div>

//             <div className="contact-input-group">
//               <label htmlFor="product">
//                 Product Interest
//               </label>

//               <select
//                 id="product"
//                 name="product"
//                 value={formData.product}
//                 onChange={handleChange}
//               >
//                 <option value="">
//                   Select a product
//                 </option>

//                 <option value="Pottery">
//                   Pottery
//                 </option>

//                 <option value="Bag">
//                   Bag
//                 </option>

//                 <option value="Woven bag">
//                   Woven bag
//                 </option>

//                 <option value="Bamboo wall or ceiling">
//                   Bamboo wall or ceiling
//                 </option>

//                 <option value="Other">
//                   Other 
//                 </option>
//               </select>
//             </div>

//             <div className="contact-input-group">
//               <label htmlFor="message">
//                 Message <span>*</span>
//               </label>

//               <textarea
//                 id="message"
//                 name="message"
//                 rows="7"
//                 placeholder="Tell us about the product, quantity, destination country, packaging, or other requirements..."
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="contact-submit-button"
//               disabled={status.loading}
//             >
//               {status.loading ? (
//                 "Sending..."
//               ) : (
//                 <>
//                   Send Inquiry
//                   <span>→</span>
//                 </>
//               )}
//             </button>

//             {status.success && (
//               <div className="contact-status contact-success">
//                 Thank you. Your inquiry has been sent successfully. Our team
//                 will contact you shortly.
//               </div>
//             )}

//             {status.error && (
//               <div className="contact-status contact-error">
//                 {status.error}
//               </div>
//             )}

//           </form>
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import "./contact.css";

export default function Contact({ isHome = false }) {
const [formData, setFormData] = useState({
name: "",
email: "",
company: "",
country: "",
product: "",
message: "",
});

const [status, setStatus] = useState({
loading: false,
success: false,
error: "",
});

const handleChange = (e) => {
const { name, value } = e.target;


setFormData((prev) => ({
  ...prev,
  [name]: value,
}));


};

const handleSubmit = async (e) => {
e.preventDefault();


setStatus({
  loading: true,
  success: false,
  error: "",
});

try {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to send message.");
  }

  setStatus({
    loading: false,
    success: true,
    error: "",
  });

  setFormData({
    name: "",
    email: "",
    company: "",
    country: "",
    product: "",
    message: "",
  });
} catch (error) {
  setStatus({
    loading: false,
    success: false,
    error:
      error.message ||
      "Something went wrong. Please try again later.",
  });
}


};

const contactContent = ( <section className="contact-section" id="contact"> <div className="contact-container">

    {/* LEFT SIDE */}
    <div className="contact-info">
      <span className="contact-label">CONTACT US</span>

      <h2>
        Let's Build a
        <br />
        <em>Global Partnership.</em>
      </h2>

      <p className="contact-intro">
        Looking for a reliable supplier of premium Indonesian craft
        products? Tell us about your requirements, and our team will
        get back to you shortly.
      </p>

      <div className="contact-details">

        <div className="contact-detail-item">
          <span>EMAIL</span>

          <a href="mailto:info@landsnature.id">
            info@landsnature.id
          </a>
        </div>

        <div className="contact-detail-item">
          <span>BUSINESS</span>

          <p>
            Manufacturer & Exporter
          </p>
        </div>

        <div className="contact-detail-item">
          <span>ORIGIN</span>

          <p>Indonesia</p>
        </div>

      </div>

      <div className="contact-decoration">
        <span>LANDSNATURE</span>
        <div></div>
        <span>GLOBAL NUSANTARA</span>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="contact-form-wrapper">

      <div className="contact-form-heading">
        <span>BUSINESS INQUIRY</span>

        <h3>
          Send us a message
        </h3>

        <p>
          Complete the form below and our team will contact you
          regarding your product requirements.
        </p>
      </div>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <div className="contact-form-row">

          <div className="contact-input-group">
            <label htmlFor="name">
              Full Name <span>*</span>
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-input-group">
            <label htmlFor="email">
              Email Address <span>*</span>
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

        </div>

        <div className="contact-form-row">

          <div className="contact-input-group">
            <label htmlFor="company">
              Company
            </label>

            <input
              type="text"
              id="company"
              name="company"
              placeholder="Company name"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="contact-input-group">
            <label htmlFor="country">
              Country
            </label>

            <input
              type="text"
              id="country"
              name="country"
              placeholder="Your country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="contact-input-group">
          <label htmlFor="product">
            Product Interest
          </label>

          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
          >
            <option value="">
              Select a product
            </option>

            <option value="Pottery">
              Pottery
            </option>

            <option value="Woven Bag">
              Woven Bag
            </option>

            <option value="Bamboo Wall or Ceiling">
              Bamboo Wall or Ceiling
            </option>

            <option value="Rattan Crafts">
              Rattan Crafts
            </option>

            <option value="Other">
              Other
            </option>
          </select>
        </div>

        <div className="contact-input-group">
          <label htmlFor="message">
            Message <span>*</span>
          </label>

          <textarea
            id="message"
            name="message"
            rows="7"
            placeholder="Tell us about the product, quantity, destination country, packaging, or other requirements..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="contact-submit-button"
          disabled={status.loading}
        >
          {status.loading ? (
            "Sending..."
          ) : (
            <>
              Send Inquiry
              <span>→</span>
            </>
          )}
        </button>

        {status.success && (
          <div className="contact-status contact-success">
            Thank you. Your inquiry has been sent successfully.
            Our team will contact you shortly.
          </div>
        )}

        {status.error && (
          <div className="contact-status contact-error">
            {status.error}
          </div>
        )}

      </form>
    </div>

  </div>
</section>


);

// Homepage → Contact section only
if (isHome) {
return contactContent;
}

// Contact page → Navbar + Contact + Footer
return (
<> <Navbar />


  <main>
    {contactContent}
  </main>

  <Footer />
</>


);
}
