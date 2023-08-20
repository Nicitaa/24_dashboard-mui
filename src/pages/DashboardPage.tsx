import { Grid } from "@mui/material";
import { Sidebar } from "../components/Sidebar";
import { DashboardBody, DashboardCharts, DashboardHeader, DashboardLifeList, DashboardProjects } from "../components/pages/Dashboard";

export function Dashboard() {
  return (
    <Grid container spacing={2}>

      <Grid item xl={2} lg={3} md={3} sm={5} xs={12}>
        <Sidebar />
      </Grid>

      <Grid item direction='column' gap={2} xl={10} lg={9} md={9} sm={7} xs={0} sx={{ padding: '0px 20px',display:'flex',rowGap:'2rem' }}>
        <DashboardHeader />
        <DashboardLifeList />
        <DashboardBody />
        <DashboardCharts />
        <DashboardProjects />
      </Grid>
    </Grid>
  )
}