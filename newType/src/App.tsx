import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Star, Users, Target, Zap, Mail, Phone, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechVision",
      content: "Working with Nexus transformed our digital presence completely. Their attention to detail and innovative approach exceeded all expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, GrowthLab",
      content: "The team's expertise and professionalism are unmatched. They delivered a solution that perfectly aligned with our business goals.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, FutureFlow",
      content: "Exceptional service and outstanding results. Our conversion rates increased by 300% after implementing their recommendations.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-800">
              Nexus
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors duration-200">Home</a>
              <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors duration-200">Services</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors duration-200">About</a>
              <a href="#testimonials" className="text-slate-700 hover:text-blue-600 transition-colors duration-200">Testimonials</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors duration-200">Contact</a>
            </div>

            <button className="hidden lg:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-200 transform hover:scale-105">
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-slate-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-6 py-4 space-y-4">
              <a href="#home" className="block text-slate-700 hover:text-blue-600 transition-colors duration-200">Home</a>
              <a href="#services" className="block text-slate-700 hover:text-blue-600 transition-colors duration-200">Services</a>
              <a href="#about" className="block text-slate-700 hover:text-blue-600 transition-colors duration-200">About</a>
              <a href="#testimonials" className="block text-slate-700 hover:text-blue-600 transition-colors duration-200">Testimonials</a>
              <a href="#contact" className="block text-slate-700 hover:text-blue-600 transition-colors duration-200">Contact</a>
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              Transform Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500"> Digital Future</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-10 leading-relaxed">
              We craft exceptional digital experiences that drive growth, engage audiences, and deliver measurable results for forward-thinking businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                Start Your Journey
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive digital solutions tailored to your unique business needs and growth objectives.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Zap className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Digital Strategy</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Comprehensive digital transformation strategies that align with your business goals and drive sustainable growth.
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center">
                Learn More <ArrowRight className="ml-2" size={16} />
              </a>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
              <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors duration-300">
                <Target className="text-emerald-500 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Brand Development</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Creating compelling brand identities that resonate with your audience and differentiate you from competitors.
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center">
                Learn More <ArrowRight className="ml-2" size={16} />
              </a>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                <Users className="text-purple-600 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">User Experience</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Designing intuitive, engaging user experiences that convert visitors into loyal customers and brand advocates.
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center">
                Learn More <ArrowRight className="ml-2" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                About Nexus
              </h2>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                We're a team of passionate digital innovators dedicated to helping businesses thrive in the modern landscape. With over a decade of combined experience, we've helped hundreds of companies transform their digital presence.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our approach combines strategic thinking with creative execution, ensuring every project delivers both aesthetic excellence and measurable business results.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-slate-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-500 mb-2">98%</div>
                  <div className="text-slate-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl p-1">
                <div className="bg-white rounded-2xl p-8">
                  <img 
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Team collaboration" 
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>
              <blockquote className="text-2xl lg:text-3xl text-slate-700 font-medium mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div>
                <div className="font-semibold text-slate-800 text-xl">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-slate-600">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-slate-50 p-3 rounded-full shadow-lg transition-all duration-200"
            >
              <ChevronLeft className="text-slate-600" size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-slate-50 p-3 rounded-full shadow-lg transition-all duration-200"
            >
              <ChevronRight className="text-slate-600" size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your digital presence? Get in touch with us today and let's discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-6 py-4 bg-slate-700 text-white rounded-xl border border-slate-600 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-6 py-4 bg-slate-700 text-white rounded-xl border border-slate-600 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 bg-slate-700 text-white rounded-xl border border-slate-600 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                />
                <textarea
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 bg-slate-700 text-white rounded-xl border border-slate-600 focus:border-blue-500 focus:outline-none transition-colors duration-200 resize-none"
                />
                <button className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105">
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-xl">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-slate-300">hello@nexusdigital.com</p>
                  <p className="text-slate-300">support@nexusdigital.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-500 p-3 rounded-xl">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-slate-300">+1 (555) 123-4567</p>
                  <p className="text-slate-300">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 p-3 rounded-xl">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-slate-300">123 Innovation Street</p>
                  <p className="text-slate-300">San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="text-3xl font-bold text-white mb-4">
                Nexus
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Transforming businesses through innovative digital solutions. We're your partner in creating exceptional digital experiences that drive growth and success.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 cursor-pointer">
                  <span className="text-white font-semibold">f</span>
                </div>
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 cursor-pointer">
                  <span className="text-white font-semibold">t</span>
                </div>
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 cursor-pointer">
                  <span className="text-white font-semibold">in</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Digital Strategy</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Brand Development</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">User Experience</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Web Development</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Our Team</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Careers</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 Nexus Digital. All rights reserved. Built with precision and passion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;