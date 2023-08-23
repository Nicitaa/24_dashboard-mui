import { useLocation, useNavigate } from "react-router"

import { useClerk, useUser } from "@clerk/clerk-react"
import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  Typography,
  Box,
  FormControlLabel,
  FormGroup,
  Switch,
  styled,
} from "@mui/material"

import InfoIcon from "@mui/icons-material/Info"
import LogoutIcon from "@mui/icons-material/Logout"

import HomeIcon from "@mui/icons-material/Home"
import AssessmentIcon from "@mui/icons-material/Assessment"
import Person2Icon from "@mui/icons-material/Person2"
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded"
import KeyRoundedIcon from "@mui/icons-material/KeyRounded"
import useDarkMode from "../store/darkModeStore"

export function Navbar() {
  const { user } = useUser()

  const navigate = useNavigate()
  const location = useLocation()
  const mode = useDarkMode()
  const { signOut } = useClerk()

  const handleLogout = async () => {
    try {
      await signOut()
      // Handle any additional logout logic or redirection if needed
    } catch (error) {
      // Handle error if logout fails
      console.error("Logout failed:", error)
    }
  }

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff",
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff",
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }))

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      style={{ backgroundColor: "hsl(var(--background))", color: "hsl(var(--foreground))" }}>
      <Toolbar sx={{ justifyContent: "space-around" }}>
        <Box
          sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}
          onClick={() => navigate("/")}>
          <img style={{ width: "2rem", height: "2rem", marginRight: "0.5rem" }} src="/favicon.ico" />
          <Typography variant="h6" sx={{ paddingTop: "8px", fontWeight: "700" ,display: { xs: "none", sm: "block"}}}>
            UI DASHBOARD
          </Typography>
        </Box>
        <Stack sx={{ display: { xs: "none", md: "block" } }} direction="row">
          <Button
            startIcon={<HomeIcon />}
            size="large"
            color="inherit"
            sx={{ textTransform: "uppercase" }}
            style={
              location.pathname === "/"
                ? { backgroundColor: "hsl(var(--foreground) / 0.4)", color: "hsl(var(--title))" }
                : { color: "hsl(var(--title))" }
            }
            onClick={() => navigate("/")}>
            Home
          </Button>
          <Button
            startIcon={<AssessmentIcon />}
            size="large"
            color="inherit"
            sx={{ textTransform: "uppercase" }}
            style={
              location.pathname === "/dashboard"
                ? { backgroundColor: "hsl(var(--foreground) / 0.4)", color: "hsl(var(--title))" }
                : { color: "hsl(var(--title))" }
            }
            onClick={() => navigate("/dashboard")}>
            Dashboard
          </Button>
          <Button
            startIcon={<Person2Icon />}
            size="large"
            color="inherit"
            sx={{ textTransform: "uppercase" }}
            style={
              location.pathname === "/profile"
                ? { backgroundColor: "hsl(var(--foreground) / 0.4)", color: "hsl(var(--title))" }
                : { color: "hsl(var(--title))" }
            }
            onClick={() => navigate("/profile")}>
            Profile
          </Button>
          {!user && (
            <Button
              startIcon={<AccountCircleRoundedIcon />}
              size="large"
              color="inherit"
              sx={{ textTransform: "uppercase" }}
              onClick={() => navigate("/register")}>
              Sign up
            </Button>
          )}
          {!user && (
            <Button
              startIcon={<KeyRoundedIcon />}
              size="large"
              color="inherit"
              sx={{ textTransform: "uppercase" }}
              onClick={() => navigate("/login")}>
              Sign in
            </Button>
          )}
          {user && (
            <Button
              startIcon={<InfoIcon />}
              size="large"
              color="inherit"
              sx={{ textTransform: "uppercase" }}
              style={
                location.pathname === "/about-us"
                  ? { backgroundColor: "hsl(var(--foreground) / 0.4)", color: "hsl(var(--title))" }
                  : { color: "hsl(var(--title))" }
              }
              onClick={() => navigate("/about-us")}>
              About us
            </Button>
          )}
        </Stack>
        <Stack direction="row">
          <FormGroup>
            <FormControlLabel
              control={<MaterialUISwitch checked={mode.isDarkMode} onChange={mode.toggleDarkMode} />}
              label=""
            />
          </FormGroup>
          <Button onClick={handleLogout} endIcon={<LogoutIcon />}>
            Logout
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
