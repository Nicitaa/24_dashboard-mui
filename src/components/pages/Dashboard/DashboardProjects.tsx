import { Box, Grid, Stack, Typography } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export function DashboardProjects() {
  return (
<Grid container spacing={2}>

      <Grid item gap={2} xl={9} lg={8} md={9} sm={7} xs={0}>
       <Typography variant="h5">Projects</Typography>
      <Typography sx={{fontSize:'14px',color:'hsl(var(--subTitle))',display:'flex',alignItems:'center',columnGap:'0.25rem'}}>
        <CheckCircleIcon sx={{color:'hsl(var(--success))'}}/>30 done this month
        </Typography>
     </Grid>

    <Grid item xl={2} lg={3} md={3} sm={5} xs={12}>
      <Typography sx={{color:'hsl(var(--title))'}}>Orders overview</Typography>
      <Typography sx={{color:'hsl(var(--success))'}}>+30%&nbsp;<span style={{color:'hsl(var(--subTitle))'}}>this month</span></Typography>
    </Grid>

    </Grid>
  )
}