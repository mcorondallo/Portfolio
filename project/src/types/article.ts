export interface Article {
  type: 'past' | 'upcoming';
  title: string;
  date: string;
  venue: string;
  content: string;
  image: string;
}