import React, { useEffect, useState } from 'react'

import './App.css';

// MUI components
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// React components
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList'
import MissingPriorityList from './components/MissingPriorityList';

function App() {

  const [toDoList, setToDoList] = useState([])
  const [priorityList, setPriorityList] = useState([])
  const [maxPriority, setMaxPriority] = useState(0)

  function sortArray(array) {
    return array?.sort((a, b) => a - b)
  }

  return (
    <Container sx={{ paddingTop: '3vw' }}>
      <Typography variant="h3" component="div" sx={{ paddingBottom: '2vw' }}>
        To Do List
      </Typography>
      <Stack spacing={10} direction='row'>
        <Stack spacing={5} direction='column'>
        <AddToDo 
          toDoList={toDoList}
          setToDoList={setToDoList}
          priorityList={priorityList}
          setPriorityList={setPriorityList}
          maxPriority={maxPriority}
          setMaxPriority={setMaxPriority}
        />
        <ToDoList
          toDoList={toDoList}
          setToDoList={setToDoList}
          priorityList={priorityList}
          setPriorityList={setPriorityList}
          maxPriority={maxPriority}
          setMaxPriority={setMaxPriority}
        />
        </Stack>
        <MissingPriorityList
          sortedPriorityList={sortArray(priorityList)}
          maxPriority={maxPriority}
        />
        </Stack>
    </Container>
  );
}

export default App;