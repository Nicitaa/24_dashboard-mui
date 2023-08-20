import { useState } from "react";

import {
  Box, Button, Card, CardActions, CardContent, Container, ListItemButton, ListItemIcon, ListItemText, Stack,
  Typography, styled, useMediaQuery, useTheme
} from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';

import BarChartIcon from '@mui/icons-material/BarChart';
import PaymentIcon from '@mui/icons-material/Payment';
import KeyIcon from '@mui/icons-material/Key';
import Person2Icon from '@mui/icons-material/Person2';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import HomeIcon from '@mui/icons-material/Home';

export function Sidebar() {

  const [selectedIndex, setSelectedIndex] = useState(0);


  const handleListItemClick = (

    index: number,
  ) => {
    setSelectedIndex(index);
  };

  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"))
  const isDarkMode = theme.palette.mode === 'dark'

  const height = isMdScreen
    ? "calc(100vh - 128px)" // Height for screens >= md breakpoint
    : "calc(100vh - 120px)"; // Height for screens < md breakpoint

  const StyledButton = styled(Button)(({ theme }) => ({
    '&:hover': {
      backgroundColor: 'hsl(var(--foreground))',
    },
  }))


const ListItemButtonStyled = styled(ListItemButton)(
  ({ theme }) => ({
    transition: 'filter 300ms, background-color 300ms', // Add transition duration
    '&:hover': {
      filter: 'brightness(75%)',
      backgroundColor: 'hsl(var(--foreground))',
    },
  })
);
  

  return (
    <Container >
      <Stack direction='column' justifyContent='space-between' sx={{ height, paddingBottom: '64px' }}>

        <Box justifyContent='space-between' gap={8} flexDirection='column' sx={{ display: 'flex' }}>
          <Stack direction='column'>
            <ListItemButtonStyled
              selected={selectedIndex === 0}
              onClick={() => handleListItemClick(0)}>
              <ListItemIcon>
                <HomeIcon sx={{ color: "hsl(var(--icon-color))" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButtonStyled>
            <ListItemButtonStyled
              selected={selectedIndex === 1}
              onClick={() => handleListItemClick(1)}>
              <ListItemIcon>
                <BarChartIcon sx={{ color: "hsl(var(--icon-color))" }} />
              </ListItemIcon>
              <ListItemText primary="Tables" />
            </ListItemButtonStyled>
            <ListItemButtonStyled
              selected={selectedIndex === 2}
              onClick={() => handleListItemClick(2)}>
              <ListItemIcon>
                <PaymentIcon sx={{ color: "hsl(var(--icon-color))" }} />
              </ListItemIcon>
              <ListItemText primary="Billing" />
            </ListItemButtonStyled>
            <ListItemButtonStyled
              selected={selectedIndex === 3}
              onClick={() => handleListItemClick(3)}>
              <ListItemIcon>
                <KeyIcon sx={{ color: "hsl(var(--icon-color))" }} />
              </ListItemIcon>
              <ListItemText primary="RTL" />
            </ListItemButtonStyled>
          </Stack>

          <Box>
            <Typography sx={{ textTransform: 'uppercase' }}>Account pages</Typography>
            <Stack direction='column'>
              <ListItemButtonStyled>
                <ListItemIcon>
                  <Person2Icon sx={{ color: "hsl(var(--icon-color))" }} />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButtonStyled>
              <ListItemButtonStyled>
                <ListItemIcon>
                  <ExitToAppIcon sx={{ color: "hsl(var(--icon-color))" }} />
                </ListItemIcon>
                <ListItemText primary="Sign in" />
              </ListItemButtonStyled>
              <ListItemButtonStyled>
                <ListItemIcon>
                  <PersonAddAltSharpIcon sx={{ color: "hsl(var(--icon-color))" }} />
                </ListItemIcon>
                <ListItemText primary="Sign up" />
              </ListItemButtonStyled>
            </Stack>
          </Box>
        </Box>

        <Card sx={{ backgroundColor: isDarkMode ? 'hsl(var(--foreground))' : 'hsl(var(--foreground))' }} >
          <CardContent sx={{ borderRadius: '12px' }}>
            <Box sx={{
              width: '30px', height: '30px', backgroundColor: 'hsl(var(--foreground))', borderRadius: '12px', display: 'flex',
              justifyContent: 'center', alignItems: 'center', marginBottom: '10px'
            }}>
              <HelpIcon/>
            </Box>
            <Typography variant="h5"
              sx={{ color: 'hsl(var(--title))' }}>
              Need help?
            </Typography>
            <Typography sx={{ color: 'hsl(var(--title))' }}>
              Please check our docs
            </Typography>
          <CardActions sx={{paddingLeft:'0',paddingRight:'0'}}>
            <StyledButton variant="contained" fullWidth
              sx={{ textTransform: 'uppercase', backgroundColor: 'hsl(var(--background))', color: 'hsl(var(--title))' }}>
              Documentation</StyledButton>
          </CardActions>
        </CardContent>
        </Card>

      </Stack>
    </Container >
  )
}