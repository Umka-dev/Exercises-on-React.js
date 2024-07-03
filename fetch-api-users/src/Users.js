import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from '@mui/material';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color='error'>{error}</Typography>;
  }

  return (
    <Container>
      <Typography variant='h4' gutterBottom>
        Users List
      </Typography>
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemText
              primary={user.name}
              secondary={user.email}
              secondaryTypographyProps={{ sx: { color: 'lightgray' } }}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Users;
