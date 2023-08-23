import { Grid, useMediaQuery, useTheme } from "@mui/material"
import { Sidebar } from "../components/Sidebar"
import {
  DashboardBody,
  DashboardCharts,
  DashboardHeader,
  DashboardLifeList,
  DashboardProjects,
} from "../components/pages/Dashboard"

export function Dashboard() {

   const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  
  return (
    <Grid container spacing={2} sx={{ marginBottom: "2rem",paddingLeft: isMdScreen ? '1rem' : 'initial'  }}>
      <Grid item xl={2} lg={3} md={3} sx={{ display: isMdScreen ? "none" : "initial"}}>
        <Sidebar />
      </Grid>

      <Grid
        item
        gap={2}
        xl={10}
        lg={9}
        md={9}
        sm={12}
        xs={12}
        sx={{ padding: "0px 20px", display: "flex", flexDirection: "column", rowGap: "2rem" }}>
        <DashboardHeader />
        <DashboardLifeList />
        <DashboardBody />
        <DashboardCharts />
        <DashboardProjects />
      </Grid>
    </Grid>
  )
}
