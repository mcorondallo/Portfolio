import React from 'react';
import { Calendar, Users, ExternalLink, Heart, Clock } from 'lucide-react';
import Header from './components/Header';
import Features from './components/Features';
import PhotoAlbum from './components/PhotoAlbum';
import Footer from './components/Footer';

function App() {
  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Weekly Planning",
      description: "Share your availability and organize meetups easily"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Friend Updates",
      description: "Keep track of who's around and who's traveling"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Special Events",
      description: "Plan and track bigger gatherings and celebrations"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Schedule",
      description: "Meet whenever works best for the group"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'rgb(227,192,184)' }}>
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <img 
                src="https://i.ibb.co/cFjLpr7/c5260887-0183-4c6a-a35a-654f560fb9a9.jpg" 
                alt="The Brunch Club Logo"
                className="h-48 w-auto"
              />
            </div>
            <h1 className="text-5xl font-extrabold text-primary mb-8">
              The Brunch Club
            </h1>
            <p className="text-xl text-primary mb-12 max-w-2xl mx-auto">
              A weekly planner for friends in Amsterdam to stay connected, share schedules, and make the most of our time together.
            </p>
            <a
              href="https://docs.google.com/spreadsheets/d/1FXHL7C5SUdvNerJCzVoCVt_eFwxu-knSxh2jtWD4Kt0/edit#gid=125114042"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-xl font-semibold rounded-lg text-white bg-primary hover:bg-opacity-90 transition-all"
            >
              Open Weekly Planner
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-4">Weekly Planning</h3>
              <ul className="space-y-4 text-primary">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  Fill in your weekly availability in the shared planner
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  Mark your travel dates and holidays to keep everyone informed
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  Check others' schedules to find the perfect time to meet
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">4.</span>
                  Coordinate spontaneous meetups or plan bigger events
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-4">Event Planning</h3>
              <ul className="space-y-4 text-primary">
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  Use the planner to organize special events and gatherings
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  Track RSVPs and attendance easily
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  See who was invited and who has responded
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  Keep everyone in the loop about upcoming activities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Features features={features} />
      <PhotoAlbum />
      <Footer />
    </div>
  );
}

export default App;