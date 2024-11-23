import React from 'react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <div className="py-20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl font-bold text-primary">
            Why Join Our Community?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-full mb-4 mx-auto" style={{ backgroundColor: '#493129' }}>
                {React.cloneElement(feature.icon as React.ReactElement, { className: 'h-6 w-6 text-white' })}
              </div>
              <h3 className="text-xl font-semibold text-primary text-center mb-2">{feature.title}</h3>
              <p className="text-primary text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;