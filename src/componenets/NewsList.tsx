import { useState } from 'react';
import { Box, Button, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NewsCard from './NewsCard';
import NewsForm from './NewsForm';
import type { INews, NewsFormData } from '@/types';
import useNews from '../hooks/useNews';

const NewsList = () => {
  const { news, addNews, editNews, deleteNews } = useNews();
  const [formOpen, setFormOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<INews | null>(null);

  const handleAdd = (data: NewsFormData) => {
    addNews(data);
  };

  const handleEdit = (data: NewsFormData) => {
    if (editingNews) {
      editNews(editingNews.id, data);
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Вы уверены, что хотите удалить эту новость?')) {
      deleteNews(id);
    }
  };

  return (
    <Container sx={{ py: 4 }}>
      <Box display="flex" justifyContent="center" alignItems="center" mt={4} mx="auto" width="100%" mb={4}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            setEditingNews(null);
            setFormOpen(true);
          }}
        >
          Добавить новость
        </Button>
      </Box>

      <Box display="grid" gridTemplateColumns={{
          xs: '1fr', // 1 колонка на очень маленьких экранах
          sm: 'repeat(2, 1fr)', // 2 колонки на маленьких экранах
          md: 'repeat(3, 1fr)', // 3 колонки на средних экранах
          lg: 'repeat(4, 1fr)' // 4 колонки на больших экранах
        }} sx={{gap: '2em'}}>

        {news.map(item => (
        <NewsCard
          key={item.id}
          news={item}
          onEdit={() => {
            setEditingNews(item);
            setFormOpen(true);
          }}
          onDelete={() => handleDelete(item.id)}
        />
      ))}
      </Box>

      

      <NewsForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={editingNews ? handleEdit : handleAdd}
        initialData={editingNews}
      />
    </Container>
  );
};

export default NewsList;