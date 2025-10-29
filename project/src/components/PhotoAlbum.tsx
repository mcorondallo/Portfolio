import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Album {
  title: string;
  date: string;
  link: string;
  coverImage: string;
}

const albums: Album[] = [
  // Add your Google Photos album links here
  {
    title: "Summer Gatherings 2023",
    date: "Summer 2023",
    link: "#", // Replace with actual Google Photos album link
    coverImage: "https://images.unsplash.com/photo-1515041219749-89347f83291a?auto=format&fit=crop&q=80&w=2000"
  },
  // Add more albums as needed
];

const PhotoAlbum: React.FC = () => {
  return (
    <div className="py-20 bg-white/50" id="photos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-16">
          Photo Albums
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <a
              key={index}
              href={album.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative aspect-video">
                <img 
                  src={album.coverImage}
                  alt={album.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-primary mb-1 flex items-center">
                  {album.title}
                  <ExternalLink className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                </h3>
                <p className="text-primary/80 text-sm">{album.date}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-primary text-lg">
            More photos coming soon! Add your Google Photos albums to share memories with the group.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoAlbum;