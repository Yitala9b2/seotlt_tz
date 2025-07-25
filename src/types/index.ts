export interface INews {
  id: string;
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
}

export type NewsFormData = Omit<INews, 'id' | 'date'>;