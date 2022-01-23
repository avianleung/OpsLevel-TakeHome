import React, { useEffect, useState } from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function AddToDo(props) {
  const { priorityList, toDoList, setToDoList, setPriorityList, maxPriority, setMaxPriority } = props

  const [item, setItem] = useState('')
  const [priority, setPriority] = useState('')

  useEffect(() => {
  }, []);

  function addToList() {
    if (item && Number(priority) && Number.isInteger(Number(priority)) && priority > 0) {
      if (!priorityList.includes(priority) || priorityList.length === 0) {
        const toDoListArray = [...toDoList]
        toDoListArray.push({ item, priority })
        setToDoList(toDoListArray)
      
        const priorityListArray = [...priorityList]
        priorityListArray.push(parseInt(priority))
        setPriorityList(priorityListArray)
      
        if (priority > maxPriority) {
          setMaxPriority(parseInt(priority))
        }
      }
    }
  }

  return (
    <Card>
      <CardContent sx={{ display: 'flex', justifyContent:'center' }}>
        <Stack spacing={2} direction="row">
        <TextField 
            id="item" 
            label="To Do"
            variant="standard" 
            value={item}
            onChange={(e) => setItem(e.target.value)}
        />
        <TextField 
            id="priority"
            label="Priority"
            variant="standard" 
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
        />
        <Button 
            variant="text"
            onClick={() => addToList()}
        >
            Add To List
        </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default AddToDo;