
export interface Creator {
  name: string;
  bio: string;
  mission: string;
  mrr: number;
  patronCount: number;
  goal: number;
}

export interface PatronTier {
  id: string;
  name: string;
  price: number;
  description: string;
  benefits: string[];
}

export interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  isPrivate: boolean;
  type: 'text' | 'image' | 'drop';
}

export interface IncomeData {
  month: string;
  mrr: number;
  patrons: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
