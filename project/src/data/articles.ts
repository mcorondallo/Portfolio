import { Article } from '../types/article';

export const articles: Article[] = [
  {
    type: 'upcoming',
    title: "Spring Brunch Celebration at Café Medina",
    date: "April 20, 2024",
    venue: "Café Medina",
    content: "Join us for our special spring celebration! We'll be enjoying Medina's famous Belgian waffles and Mediterranean-inspired brunch dishes.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000"
  },
  {
    type: 'past',
    title: "Cozy Winter Brunch at Jam Cafe",
    date: "March 15, 2024",
    venue: "Jam Cafe",
    content: "What an amazing morning! 15 brunch lovers gathered for hearty comfort food and great conversations. The chicken and waffles were a hit!",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&q=80&w=2000"
  },
  // Add more articles here
];