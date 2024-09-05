
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  maxWidth: 400,
  minWidth: 500,
  minHeight: 300,
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
});

export const LoginCard = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submission logic 
    console.log("Form submitted");
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Login
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            required
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
          />
          <TextField
            required
            type="text"
            label="Password"
            variant="outlined"
            fullWidth
          />

          <Button variant="contained" color="success" type="submit" fullWidth>
            Login
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

