import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Award, Brain, Trophy, Users, Check, ArrowUpRight, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.coverr.co/videos/coverr-typing-on-computer-keyboard-1584/1080p.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center justify-center space-x-2"
            style={{marginTop: "120px"}}
          >
            <Sparkles className="w-6 h-6 text-yellow-300" />
            <span className="text-yellow-300 font-medium">The Future of Skill Assessment</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Prove Your Skills,
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-pink-500 text-transparent bg-clip-text">
              Unlock Opportunities
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300"
          >
            Join over 50,000+ professionals who trust SkillRank to validate their expertise and connect with top opportunities worldwide.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              to="/login"
              className="group px-8 py-4 bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-400 hover:to-pink-400 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 w-64 sm:w-auto"
            >
              Start Free Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button
              onClick={() => {/* Add video modal logic */}}
              className="group px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full font-semibold text-lg transition-all flex items-center gap-3 w-64 sm:w-auto"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400"
          >
            {['Trusted by 500+ Companies', 'ISO Certified', '99.9% Accuracy', '24/7 Support'].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section ref={ref} className="py-24 bg-gradient-to-b from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Path to Success
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Three simple steps to validate your skills and advance your career
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12" />,
                title: "Take Assessment",
                description: "Complete industry-specific tests designed by experts",
                color: "from-blue-500 to-purple-500"
              },
              {
                icon: <Trophy className="w-12 h-12" />,
                title: "Get Certified",
                description: "Receive detailed analysis and official certification",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Connect & Grow",
                description: "Access exclusive job opportunities and networking",
                color: "from-green-500 to-teal-500"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                variants={fadeInUp}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${step.color} transform transition-all duration-300 ${
                  hoveredCard === index ? 'scale-105' : ''
                }`}
              >
                <div className="absolute inset-0 bg-black/20 rounded-2xl" />
                <div className="relative z-10">
                  <div className="mb-6">{step.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-200">{step.description}</p>
                  <ArrowUpRight className={`w-6 h-6 mt-4 transition-opacity duration-300 ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Certified Users", icon: <Users className="w-8 h-8" /> },
              { number: "200+", label: "Skill Tests", icon: <Brain className="w-8 h-8" /> },
              { number: "1000+", label: "Companies", icon: <Award className="w-8 h-8" /> },
              { number: "95%", label: "Success Rate", icon: <Trophy className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex justify-center mb-4 text-blue-600">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Showcase Your Skills?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who trust SkillRank for skill validation.
              Get started today and unlock your potential!
            </p>
            <Link
              to="/login"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors group"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
