import { useState } from "react";

const ContactDetails = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    const ct = e.currentTarget
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Message sent successfully! 🎉");
        ct?.reset();
      } else {
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setResult("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">LET'S BUILD TOGETHER</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              Get In Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-400">
                    SCO-3, Jaggi Garden, Naraingarh Road, Ambala City. PIN:
                    134003
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-400">+91-74044-21000 +91-89506-00043</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-400">
                    kaushikarchitectsandbuilders@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                  <i className="fas fa-clock text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Working Hours</h4>
                  <p className="text-gray-400">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8 h-64 bg-gray-800 rounded-lg flex ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d217.89743881708358!2d76.79642698328446!3d30.39221289236447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1759062388506!5m2!1sen!2sin"
                style={{ border: 0, width: "100%" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="contact-form">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              Send Us a Message
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-input"
                  name='name'
                />
                <input
                  type="hidden"
                  name="access_key"
                  value="dfa99fd2-6bec-4264-aca9-bf0b4e969070"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-input"
                  name="email"
                />
              </div>
              <input type="text" placeholder="Subject" className="form-input" name='subject' />
              <input type='phone' placeholder="Phone Number" className="form-input" name='phone'/>
              <textarea
                placeholder="Your Message"
                rows="6"
                className="form-input resize-none"
                name='message'
              ></textarea>

              <button
                type="submit"
                className="btn-primary w-full"
                disabled={loading}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>Send Message
                  </>
                )}
              </button>

              {result && <p className="text-center mt-2">{result}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactDetails;
