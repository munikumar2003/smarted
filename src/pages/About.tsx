import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Target, Users, Heart } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90" />
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            About SkillRank
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Empowering professionals to showcase their true potential through innovative skill validation.
          </motion.p>
        </div>
      </section>
      {/* Welcome Section */}
<section className="py-12 bg-gray-50">
  <div className="container mx-auto px-4 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-bold mb-4 text-blue-600"
    >
      🌟 Welcome to SkillRank – Where Skills Get Recognized! 🌟
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-lg max-w-3xl mx-auto mb-8 text-gray-700"
    >
      At SkillRank, we empower students and professionals to measure, rank, and showcase their skills with confidence. Our platform provides rigorous skill-based examinations designed to help you stand out in today’s competitive job market.
    </motion.p>

    {/* How it Works Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-left max-w-3xl mx-auto space-y-4 text-gray-600"
    >
      <h3 className="text-2xl font-semibold text-center text-blue-500 mb-4">🚀 How it Works:</h3>
      <p><strong>1. Test Your Skills:</strong> Take examinations tailored to the industry you want to excel in.</p>
      <p><strong>2. Earn Your Rank:</strong> Based on your performance, receive a rank that truly reflects your expertise.</p>
      <p><strong>3. Showcase to Recruiters:</strong> Proudly display your rank certificate on your resume or LinkedIn profile and get noticed by top recruiters.</p>
    </motion.div>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="text-lg max-w-3xl mx-auto mt-8 text-gray-700"
    >
      Whether you're a student looking to land your dream job or a professional wanting to validate your expertise, SkillRank is your trusted partner to help you get recognized for what you do best.
    </motion.p>

    {/* Why SkillRank Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="text-left max-w-3xl mx-auto mt-8 text-gray-600"
    >
      <h3 className="text-2xl font-semibold text-center text-blue-500 mb-4">💡 Why SkillRank?</h3>
      <ul className="list-disc list-inside">
        <li>Industry-specific assessments designed by experts.</li>
        <li>Trusted rank certificates that recruiters value.</li>
        <li>A platform for both students and professionals to grow and succeed.</li>
      </ul>
    </motion.div>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
      className="text-lg max-w-3xl mx-auto mt-8 text-gray-700"
    >
      Join us and take the next step in showcasing your skills to the world!
    </motion.p>
  </div>
</section>

      
      {/* Mission & Vision */}
      <section ref={ref} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To revolutionize the way skills are validated and recognized in the professional world. We believe in creating opportunities through transparent and reliable skill assessment.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To build a world where every professional has the opportunity to showcase their true potential, regardless of their background or formal education.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Excellence",
                description: "We strive for excellence in every assessment we create."
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Accuracy",
                description: "Our evaluations are precise and reliable."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Inclusivity",
                description: "We believe in equal opportunities for all."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Passion",
                description: "We're passionate about helping people succeed."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How does SkillRank work?",
                answer: "SkillRank uses advanced AI algorithms to assess your skills through comprehensive tests. Once completed, you receive a verified certificate that you can share with potential employers."
              },
              {
                question: "Are the certificates recognized by employers?",
                answer: "Yes, our certificates are recognized by thousands of companies worldwide. We work closely with industry leaders to ensure our assessments meet their standards."
              },
              {
                question: "How often should I update my skills?",
                answer: "We recommend updating your skill assessments every 6-12 months to stay current with industry standards and showcase your growth."
              },
              {
                question: "Can I retake assessments?",
                answer: "Yes, you can retake assessments after a 30-day cooling period to demonstrate your improvement."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
