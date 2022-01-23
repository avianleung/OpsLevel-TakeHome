import React, { Fragment } from 'react'

// MUI components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function ToDoList(props) {
    const { priorityList, toDoList, setToDoList, setPriorityList, maxPriority, setMaxPriority } = props

  function removeItem(index) {
    const toDoListArray = [...toDoList]
    const priorityListArray = [...priorityList]

    if (priorityListArray[index] === maxPriority) {
        if (priorityListArray.length > 1) {
          setMaxPriority(priorityListArray[index-1])
        } else {
          setMaxPriority(0)
        }
    }

    toDoListArray.splice(index, 1)
    priorityListArray.splice(index, 1)
    setToDoList(toDoListArray)
    setPriorityList(priorityListArray)
  }

  return (
    <Card sx={{ width: 600 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>  
          <Grid item xs={3}>
            <Typography variant="button" component="div" sx={{ fontWeight: 'bold' }}>
              Priority
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="button" component="div" sx={{ fontWeight: 'bold' }}>
              Item
            </Typography>
          </Grid>
          {toDoList?.sort((a, b) => a.priority - b.priority)?.map((item, index) => (
            <Fragment key={item.priority}>
              <Grid item xs={1}>
              <IconButton
                style={{ padding: 0 }}
                onClick={() => removeItem(index)}
                >
                <RemoveCircleOutlineIcon fontSize='small' />
              </IconButton>
              </Grid> 
              <Grid item xs={3}>
                {item.priority}
              </Grid>
              <Grid item xs={8}>
                {item.item}
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ToDoList;