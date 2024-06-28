import React from 'react';
import { City } from './City';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import { makeStyles } from '@mui/styles'; // Импортируем makeStyles из @mui/styles

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '600px', // Пример установки максимальной ширины контейнера
    margin: 'auto', // Центрирование контейнера по горизонтали
    padding: theme.spacing(2), // Пример использования отступов темы
  },
  list: {
    width: '100%', // 100% ширина списка
    backgroundColor: theme.palette.background.paper, // Фон списка из темы
    borderRadius: theme.shape.borderRadius, // Пример использования радиуса границы из темы
  },
}));

export const CityList = React.memo(({ list, onRemoveClick }) => {
  const classes = useStyles(); // Используем makeStyles для получения классов стилей

  console.log('List render');

  return (
    <Container className={classes.container}>
      <List className={classes.list}>
        {list.map((item) => (
          <City key={item} city={item} onRemoveClick={onRemoveClick} />
        ))}
      </List>
    </Container>
  );
});
