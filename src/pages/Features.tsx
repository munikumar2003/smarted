import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Brain,
  Trophy,
  Users,
  BarChart3,
  Shield,
  Globe,
  Zap,
  BadgeCheck,
  Building,
  GraduationCap,
  Briefcase,
  Star,
} from 'lucide-react';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Assessments",
      description: "Advanced algorithms adapt to your skill level in real-time for accurate evaluation."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Verified Certificates",
      description: "Blockchain-backed certificates that prove your expertise with tamper-proof validation."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Recognition",
      description: "Certificates recognized by leading companies and institutions worldwide."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Progress",
      description: "Track your improvement with detailed analytics and performance metrics."
    },
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "Industry Standards",
      description: "Tests aligned with current industry requirements and best practices."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Skill Analytics",
      description: "Comprehensive insights into your strengths and areas for improvement."
    }
  ];

  const testimonials = [
    {
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120",
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "TechCorp",
      content: "SkillRank helped me validate my expertise and land my dream job. The AI-powered assessments are incredibly accurate!"
    },
    {
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120&h=120",
      name: "David Miller",
      role: "HR Director",
      company: "Global Innovations",
      content: "As a recruiter, SkillRank certificates give me confidence in candidates' abilities. It's revolutionized our hiring process."
    },
    {
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120&h=120",
      name: "Emily Rodriguez",
      role: "UX Designer",
      company: "Creative Studios",
      content: "The platform's comprehensive skill assessment helped me identify gaps and improve my design capabilities significantly."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Features that Empower Your Success
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 mb-8"
            >
              Discover how SkillRank's innovative features help you showcase your expertise and advance your career.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Companies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">For Organizations</h2>
            <p className="text-gray-600">
              Streamline your hiring process and validate candidate skills with our enterprise solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building className="w-8 h-8" />,
                title: "Enterprise Dashboard",
                description: "Manage and track candidate assessments from a centralized platform."
              },
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Custom Assessments",
                description: "Create tailored tests that match your organization's specific requirements."
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Talent Pool",
                description: "Access a pool of pre-verified candidates with validated skill certificates."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Showcase Your Skills?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who trust SkillRank for skill validation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            Get Started Now
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Features;