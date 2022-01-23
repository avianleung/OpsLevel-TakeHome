import React, { useEffect, useState } from 'react'

// MUI components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function MissingPriorityList(props) {
  const { sortedPriorityList, maxPriority } = props

  const [missingPriorityList, setMissingPriorityList] = useState([])

  useEffect(() => {
    findMissingNumbers(sortedPriorityList, maxPriority)
  }, [sortedPriorityList, maxPriority]);

  // Find missing numbers from a sorted array of numbers
  function findMissingNumbers(numbers, maxValue) {
    const missingNumbers = []

    let number = 1
    let index = 0

    while (number <= maxValue) {
      if (number  < numbers[index]) {
        missingNumbers.push(number)
      }
      if (number === numbers[index]) {
        index++
      }
      number++
    }
    setMissingPriorityList(missingNumbers)
  }

  return (
    <Card sx={{ width: 185 }}>
      <CardContent>
        <Grid container spacing={2} direction='column' alignItems='center'>
          <Grid item>
            <Typography variant="button" component="div" sx={{ fontWeight: 'bold' }}>
              Missing Priorities
            </Typography>
          </Grid>
          {missingPriorityList?.map((number, index) => (
            <Grid key={number} item>
              {number}
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default MissingPriorityList;