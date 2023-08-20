import { Breadcrumbs, Button, IconButton, InputBase, Link, Paper, Stack, Typography, styled } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

export function DashboardHeader() {

  const StyledButton = styled(Button)(({ theme }) => ({
    textTransform: 'capitalize',
    color: theme.palette.secondary.dark,
    background: 'none',
    '&:hover': {
      background: 'none',
    },
  }))

  return (
    <Stack direction='row' display='flex' justifyContent='space-between' >
      <Stack direction='column' >
        <Breadcrumbs aria-label="breadcrumb" sx={{color:'hsl(var(--title))'}}>
          <Link underline="hover" color="hsl(var(--title))" href="/">
            Pages
          </Link>
          <Link
            underline="hover"
            color="hsl(var(--title))"
            href="/"
          >
            Dashboard
          </Link>
        </Breadcrumbs>
        <Typography variant="h6" color="hsl(var(--title))">
          Dashboard
        </Typography>
      </Stack>


      <Stack direction='row' display='flex' justifyContent='space-between' alignItems='center' gap={2}>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', backgroundColor: "hsl(var(--foreground))",
          border:'1px solid hsl(var(--border-color))', width: 300, height: 30 }}

        >
          <IconButton sx={{ p: '10px' }} aria-label="menu">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1,color:'hsl(var(--title))' }}
            placeholder="Type here..."
            inputProps={{ 'aria-label': 'type here' }}
          />
        </Paper>

        <StyledButton
          variant="text"
          startIcon={<PersonIcon />}
          disabled={false}
          size="small"
          sx={{ textTransform: 'capitalize', color: 'hsl(var(--icon-color))' }}
        >Sign in</StyledButton>

        <IconButton sx={{ color: "hsl(var(--icon-color))" }}>
          <SettingsIcon />
        </IconButton>

        <IconButton sx={{ color: "hsl(var(--icon-color))" }}>
          <NotificationsIcon />
        </IconButton>

      </Stack>

    </ Stack>
  )
}