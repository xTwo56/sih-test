
import { LoginCard } from '../components/loginCard';
import Box from '@mui/material/Box';

export default function Signup() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: '#c2deb6'
      }}>
      <LoginCard />
    </Box>
  );
}
