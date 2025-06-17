import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box, 
  IconButton 
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import type { INews } from '../types';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

interface NewsCardProps {
  news: INews;
  onEdit: () => void;
  onDelete: () => void;
}

const NewsCard = ({ news, onEdit, onDelete }: NewsCardProps) => {
  return (
    <Card sx={{ mb: 3 }}>
      {news.imageUrl && (
        <CardMedia
          component="img"
          height="140"
          image={news.imageUrl}
          alt={news.title}
        />
      )}
      <CardContent sx={{minWidth: '250px'}}>
        <Typography gutterBottom variant="h5" component="div">
          {news.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {format(new Date(news.date), 'dd MMMM yyyy', { locale: ru })}
        </Typography>
        <Typography variant="body1" paragraph>
          {news.content}
        </Typography>
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={onEdit} color="primary">
            <EditIcon />
          </IconButton>
          <IconButton onClick={onDelete} color="error">
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default NewsCard;