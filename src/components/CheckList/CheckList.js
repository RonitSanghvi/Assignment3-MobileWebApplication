import React, { useState } from 'react';
import { Button, TextField, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from '../Header';

const Checklist = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem.trim()]);
      setNewItem('');
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
        <Header />
        <Typography variant="h4" gutterBottom color='white'> Check List </Typography>
        <div className='Horizontal-line' />
        <div className="checklist-container">
            <TextField
                label="Add new item"
                variant="outlined"
                value={newItem}
                className='checklist-textfield'
                onChange={(e) => setNewItem(e.target.value)}
                fullWidth
            />
            <Button variant="contained" color="primary" onClick={handleAddItem} size='large'> Add New Data</Button>
            <List>
                {items.map((item, index) => (
                <ListItem key={index} className='checklist-listitem'>
                    <ListItemText primary={item} />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" onClick={() => handleDeleteItem(index)}>
                            <DeleteIcon style={{color:'white'}} />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                ))}
            </List>
        </div>
    </div>
  );
};

export default Checklist;
