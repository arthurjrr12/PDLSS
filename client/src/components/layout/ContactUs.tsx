const ContactUs = () => {
  return (
    <section className="bg-[#f8f9fa] py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading mb-4">Contact Us</h2>
          <p className="text-lg text-[#6E7687] max-w-3xl mx-auto">
            Have questions about our Physics Digital Learning Support System? We're here to help!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center mb-6">
              <img 
                src="/assets/stem-logo.png" 
                alt="STEM School Logo" 
                className="h-16 mr-4"
              />
              <h3 className="text-2xl font-bold font-heading">STEM School</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#b980ff]/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <i className="fas fa-map-marker-alt text-[#b980ff]"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Address</h4>
                  <p className="text-[#6E7687]">Mambugan, Antipolo City</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#b980ff]/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <i className="fas fa-envelope text-[#b980ff]"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-[#6E7687]">daize100@yahoo.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#b980ff]/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <i className="fas fa-phone text-[#b980ff]"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <p className="text-[#6E7687]">+639691786753</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-[#b980ff] shadow-lg">
              <img 
                src="/assets/profile-photo.png"
                alt="Profile Photo" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold font-heading mb-2">Physics Teacher</h3>
            <p className="text-[#6E7687] text-center">
              Dedicated to making physics education accessible and engaging for all students.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-md p-8">
          <h3 className="text-xl font-bold font-heading mb-6">Send Us a Message</h3>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#6E7687] mb-2">Your Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b980ff]"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-[#6E7687] mb-2">Your Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b980ff]"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-[#6E7687] mb-2">Subject</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b980ff]"
                placeholder="Enter subject"
              />
            </div>
            
            <div>
              <label className="block text-[#6E7687] mb-2">Message</label>
              <textarea 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b980ff] h-32"
                placeholder="Enter your message"
              ></textarea>
            </div>
            
            <div className="flex justify-end">
              <button 
                type="submit" 
                className="px-6 py-3 bg-[#b980ff] text-white rounded-md font-medium hover:bg-[#b980ff]/90 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;