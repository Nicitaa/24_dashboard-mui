import { useUser } from "@clerk/clerk-react"
import { Box, Button, Typography, styled } from "@mui/material"
import { useNavigate } from "react-router"

export function HomePage() {
  const navigate = useNavigate()

  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded || !isSignedIn) {
    return null
  }

  const CustomButton = styled(Button)(({}) => ({
    backgroundColor: "transparent",
    color: "#f9f9f9",
    padding: "10px 20px",
    borderRadius: "20px",
    textTransform: "capitalize",
    transition: "transform 300ms ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      borderColor: "gray",
    },
  }))

  return (
    <Box textAlign="center" sx={{ maxHeight: "calc(100vh - 65px);", overflow: "hidden" }}>
     <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
       <Typography variant="h4" mt={4}>
        Welcome {user.firstName}
      </Typography>
      <Typography variant="subtitle1" color="gray" mb={3}>
        Explore our powerful community with us!
      </Typography>
      <CustomButton
        variant="outlined"
        sx={{ borderRadius: "20px", border: "1px solid gray", marginBottom: "20px" }}
        onClick={() => navigate("/dashboard")}>
        Get started
      </CustomButton>
     </Box>
      <img src="/dashboard-preview.jpg" style={{ height: "auto", objectFit: "cover" }} />
    </Box>
  )
}
