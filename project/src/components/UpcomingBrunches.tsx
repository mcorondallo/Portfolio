import React from 'react';
import { MapPin, Clock, Users } from 'lucide-react';

interface Brunch {
  date: string;
  time: string;
  venue: string;
  address: string;
  spots: number;
  image: string;
}

interface UpcomingBrunchesProps {
  brunches: Brunch[];
}

const UpcomingBrunches: React.FC<UpcomingBrunchesProps> = ({ brunches }) => {
  return (
    <div className="py-12 bg-white" id="upcoming">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Upcoming Brunches
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Join us at these carefully selected venues for great food and company
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {brunches.map((brunch, index) => (
            <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={brunch.image} alt={brunch.venue} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <p className="ml-2 text-sm text-gray-500">
                      {brunch.date} at {brunch.time}
                    </p>
                  </div>
                  <div className="mt-2">
                    <h3 className="text-xl font-semibold text-gray-900">{brunch.venue}</h3>
                    <div className="mt-3 flex items-center">
                      <MapPin className="h-5 w-5 text-gray-400" />
                      <p className="ml-2 text-sm text-gray-500">{brunch.address}</p>
                    </div>
                    <div className="mt-3 flex items-center">
                      <Users className="h-5 w-5 text-gray-400" />
                      <p className="ml-2 text-sm text-gray-500">{brunch.spots} spots available</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="https://docs.google.com/spreadsheets/d/your-sheet-id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    Reserve Your Spot
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingBrunches;