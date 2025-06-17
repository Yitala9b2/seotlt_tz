import { useState, useEffect } from 'react';
import type { INews, NewsFormData  } from '@/types';

const useNews = () => {
  const [news, setNews] = useState<INews[]>([]);
  
  useEffect(() => {
    const storedNews = localStorage.getItem('news');
    if (storedNews) {
      setNews(JSON.parse(storedNews));
    }
  }, []);

  const saveNews = (items: INews[]) => {
    setNews(items);
    localStorage.setItem('news', JSON.stringify(items));
  };

  const addNews = (data: NewsFormData) => {
    const newNews: INews = {
      ...data,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    };
    saveNews([newNews, ...news]);
  };

  const editNews = (id: string, data: NewsFormData) => {
    const updatedNews = news.map(item => 
      item.id === id 
        ? { ...item, ...data } 
        : item
    );
    saveNews(updatedNews);
  };

  const deleteNews = (id: string) => {
    saveNews(news.filter(item => item.id !== id));
  };

  return { news, addNews, editNews, deleteNews };
};

export default useNews;