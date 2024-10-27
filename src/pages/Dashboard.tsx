import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  BarChart2,
  BookOpen,
  Calendar,
  Clock,
  Star,
  Trophy,
  TrendingUp
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Track your progress and manage your skill certifications.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: <Trophy />, label: "Skills Certified", value: "12" },
            { icon: <Star />, label: "Average Score", value: "85%" },
            { icon: <Clock />, label: "Hours Practiced", value: "48" },
            { icon: <Award />, label: "Achievements", value: "8" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <BarChart2 className="w-5 h-5 mr-2 text-blue-600" />
                Recent Activities
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Completed JavaScript Assessment",
                    time: "2 hours ago",
                    score: "92%"
                  },
                  {
                    title: "Started React Fundamentals",
                    time: "Yesterday",
                    score: "In Progress"
                  },
                  {
                    title: "Earned TypeScript Certificate",
                    time: "3 days ago",
                    score: "88%"
                  }
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-gray-600">{activity.time}</p>
                    </div>
                    <span className="text-blue-600 font-medium">{activity.score}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Progress */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                Skill Progress
              </h2>
              <div className="space-y-4">
                {[
                  { skill: "JavaScript", progress: 85 },
                  { skill: "React", progress: 70 },
                  { skill: "TypeScript", progress: 75 }
                ].map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.skill}</span>
                      <span className="text-gray-600">{skill.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${skill.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Tests */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                Upcoming Tests
              </h2>
              <div className="space-y-4">
                {[
                  {
                    test: "Node.js Advanced",
                    date: "Tomorrow, 2:00 PM"
                  },
                  {
                    test: "React Native Basics",
                    date: "Mar 15, 10:00 AM"
                  },
                  {
                    test: "GraphQL Fundamentals",
                    date: "Mar 18, 3:30 PM"
                  }
                ].map((test, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg"
                  >
                    <p className="font-medium">{test.test}</p>
                    <p className="text-sm text-gray-600">{test.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Resources */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                Learning Resources
              </h2>
              <div className="space-y-4">
                {[
                  "JavaScript Best Practices Guide",
                  "React Performance Optimization",
                  "TypeScript Advanced Types"
                ].map((resource, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {resource}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;