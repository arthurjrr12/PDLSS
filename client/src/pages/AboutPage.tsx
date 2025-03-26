const AboutPage = () => {
  return (
    <section className="container mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-4xl font-bold font-heading mb-8">About Us</h1>
      
      <div className="bg-white rounded-xl shadow-md p-8 mb-12">
        <p className="text-lg mb-6">
          Welcome to Physics Digital Learning Support System, where we bridge the gap between physics education and real-world careers. Our platform is designed to provide students with an interactive and engaging approach to learning physics by connecting concepts with practical applications in various industries, from engineering and healthcare to technology and space exploration.
        </p>
        
        <p className="text-lg mb-6">
          We believe that physics is more than just equations—it is the foundation of innovation and problem-solving in today's fast-evolving job market. Through our digital learning system, students gain access to interactive modules, career-focused lessons, and real-world problem-solving scenarios that prepare them for future careers in STEM fields.
        </p>
        
        <p className="text-lg mb-6">
          Our mission is to empower learners with industry-relevant physics knowledge, making science education more meaningful, accessible, and career-driven. Whether you are a high school student exploring career paths or a professional seeking to enhance your physics skills, our platform offers a dynamic learning experience tailored to your needs.
        </p>
        
        <p className="text-lg font-bold">
          Join us as we revolutionize physics education and help shape the future of tomorrow's workforce!
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="h-48">
            <img 
              src="https://images.unsplash.com/photo-1594729095022-e2f6d2eece9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80" 
              alt="Our Approach" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 font-heading">Our Approach</h3>
            <p className="text-[#6E7687]">
              We use STEMIFIED INSTRUCTION, a teaching methodology that integrates Science, Technology, Engineering, and Mathematics into interactive, project-based learning experiences that reflect real-world applications.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="h-48">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80" 
              alt="Our Team" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 font-heading">Our Team</h3>
            <p className="text-[#6E7687]">
              Our platform is developed by a dedicated team of physicists, educators, career counselors, and technologists committed to transforming how physics is taught and applied to future careers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
