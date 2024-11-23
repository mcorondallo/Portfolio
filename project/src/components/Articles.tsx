import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

interface Article {
  type: 'past' | 'upcoming';
  title: string;
  date: string;
  venue: string;
  content: string;
  image: string;
}

interface ArticlesProps {
  articles: Article[];
}

const INITIAL_DISPLAY_COUNT = 3;

const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  const [showAllUpcoming, setShowAllUpcoming] = useState(false);
  const [showAllPast, setShowAllPast] = useState(false);

  const upcomingEvents = articles.filter(article => article.type === 'upcoming');
  const pastEvents = articles.filter(article => article.type === 'past');

  const displayedUpcoming = showAllUpcoming 
    ? upcomingEvents 
    : upcomingEvents.slice(0, INITIAL_DISPLAY_COUNT);
  
  const displayedPast = showAllPast 
    ? pastEvents 
    : pastEvents.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <div className="py-20 bg-white/50" id="articles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-16">
          Event Stories
        </h2>

        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-primary mb-8">Upcoming Events</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {displayedUpcoming.map((article, index) => (
                <ArticleCard key={`upcoming-${index}`} article={article} />
              ))}
            </div>
            {upcomingEvents.length > INITIAL_DISPLAY_COUNT && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAllUpcoming(!showAllUpcoming)}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-primary border border-primary hover:bg-primary hover:text-white transition-all"
                >
                  {showAllUpcoming ? (
                    <>Show Less <ChevronUp className="ml-2 w-4 h-4" /></>
                  ) : (
                    <>Show More <ChevronDown className="ml-2 w-4 h-4" /></>
                  )}
                </button>
              </div>
            )}
          </div>
        )}

        {pastEvents.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-8">Past Events</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {displayedPast.map((article, index) => (
                <ArticleCard key={`past-${index}`} article={article} />
              ))}
            </div>
            {pastEvents.length > INITIAL_DISPLAY_COUNT && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAllPast(!showAllPast)}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-primary border border-primary hover:bg-primary hover:text-white transition-all"
                >
                  {showAllPast ? (
                    <>Show Less <ChevronUp className="ml-2 w-4 h-4" /></>
                  ) : (
                    <>Show More <ChevronDown className="ml-2 w-4 h-4" /></>
                  )}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img 
        src={article.image} 
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-primary/80 mb-3">
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {article.date}
          </span>
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {article.venue}
          </span>
        </div>
        <h4 className="text-xl font-semibold text-primary mb-3">{article.title}</h4>
        <p className="text-primary/90 mb-4">{article.content}</p>
        {article.type === 'upcoming' && (
          <a
            href="https://docs.google.com/spreadsheets/d/your-sheet-id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-primary hover:bg-opacity-90 transition-all"
          >
            Join This Event
          </a>
        )}
      </div>
    </article>
  );
};

export default Articles;