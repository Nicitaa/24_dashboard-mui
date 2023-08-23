import { Box, Grid, Stack, Typography } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import { styled } from "@mui/material/styles"
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress"

interface StackedItemsProps {
  imgUrl: string
  title: string
  subTitle: string
  date: Date | string | null
}



export function StackedItems({ imgUrl, title, subTitle, date }: StackedItemsProps) {
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
    return date.toLocaleString(undefined, options)
  }

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        columnGap: "1rem",
        alignItems: "center",
        width: "100%",
        transition: "filter 300ms, background-color 300ms",
        cursor: "pointer",
        "&:hover": {
          filter: "brightness(75%)",
          backgroundColor: "hsl(var(--foreground))",
        },
      }}>
      <img style={{ width: "48px", height: "48px" }} src={imgUrl} alt={title} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{whiteSpace:'pre',overflow:'hidden'}} variant="h6">{title}</Typography>
        <Typography sx={{ color: "hsl(var(--subTitle))",whiteSpace:'pre',overflow:'hidden' }}>{subTitle}</Typography>
        <Typography
          sx={{
            color: "hsl(var(--subTitle))",
            ...(date === "CANCELED" && { color: "red" }),
          }}>
          {date === "CANCELED" ? "Cancelled" : date instanceof Date ? formatDate(date) : ""}
        </Typography>
      </Box>
    </Stack>
  )
}

export function DashboardProjects() {
  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: 'hsl(var(--foreground-hover))',
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: 'hsl(var(--success))',
    },
  }))

  const projects = [
    {
      label: "HooBank",
      members: "1M+",
      budget: "$1,300,000",
      completion: 100,
      imgUrl: "/hooBank.png",
    },
        {
      label: "Gericht restaurant",
      members: "2",
      budget: "$12,000",
      completion: 50,
      imgUrl: "/gericht-restaurant.png",
    },
    {
      label: "Airbnb",
      members: "0",
      budget: "$0",
      completion: 99,
      imgUrl: "/airbnb.png",
    },
    {
      label: "Aer",
      members: "3",
      budget: "$6,000",
      completion: 60,
      imgUrl: "/aer.png",
    },
  ]

  return (
    <Stack>
      <Grid container spacing={2} gap={2} flexWrap="wrap"  >
      {/* Proejcts */}
      <Grid
        item
        gap={2}
        xl={8.8} //fix issue when I set 9 it not ignore gap={2}
        lg={7.5}
        md={12}
        sm={12}
        xs={12}
        sx={{ backgroundColor: "hsl(var(--foreground))", borderRadius: "8px", padding: "1rem" }}>
        <Box sx={{ marginBottom: "1rem" }}>
          <Typography variant="h5">Projects</Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "hsl(var(--subTitle))",
              display: "flex",
              alignItems: "center",
              columnGap: "0.25rem",
            }}>
            <CheckCircleIcon sx={{ color: "hsl(var(--success))" }} />
            30 done this month
          </Typography>
        </Box>
        <Stack>
          <Grid container sx={{ display: "flex", flexDirection: "row" }}>
            <Grid item xl={2} lg={3} md={3} sm={3} xs={3}>
              <Typography sx={{ textTransform: "uppercase", color: "hsl(var(--subTitle))", textAlign: "center" }}>
                Companies
              </Typography>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Typography sx={{ textTransform: "uppercase", color: "hsl(var(--subTitle))", textAlign: "center" }}>
                Members
              </Typography>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Typography sx={{ textTransform: "uppercase", color: "hsl(var(--subTitle))", textAlign: "center" }}>
                Budget
              </Typography>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3} sx={{marginLeft:'auto'}}>
              <Typography sx={{ textTransform: "uppercase", color: "hsl(var(--subTitle))", textAlign: "center" }}>
                Completion
              </Typography>
            </Grid>
          </Grid>

          <Stack className="scrollbar-container" sx={{ maxHeight:'200px',overflowY:'scroll', display: "flex",
           flexDirection: "column", rowGap: "0.5rem" }}>
            {projects.map(project => (
              <Grid
                container
                key={project.label}
                sx={{
                  transition: "filter 300ms, background-color 300ms",
                  cursor: "pointer",
                  padding: "1rem",
                  borderRadius: "4px",
                  "&:hover": {
                    filter: "brightness(75%)",
                    backgroundColor: "hsl(var(--foreground))",
                  },
                }}>
                <Grid item xl={2} lg={3} md={3} sm={3} xs={3} 
                sx={{ display: "flex", flexDirection: "row", columnGap: "0.5rem", alignItems: "center" }}>
                  <img src={project.imgUrl} style={{ width: "32px", height: "32px" }} />
                  <Typography sx={{ whiteSpace:'nowrap'}}>{project.label}</Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={3} xs={3} 
                sx={{ display: "flex", flexDirection: "row", justifyContent:'center',alignItems:'center'}}>
                  <Typography sx={{ textAlign: "center" }}>{project.members}</Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={3} xs={3}
                sx={{ display: "flex", flexDirection: "row", justifyContent:'center',alignItems:'center'}}>
                  <Typography sx={{ textAlign: "center" }}>{project.budget}</Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={3} xs={3}
                 sx={{ display: 'flex', justifyContent:'center',alignItems: 'center',marginLeft:'auto' }}>
                  <Box sx={{ flexGrow:1}}>
                    <BorderLinearProgress variant="determinate" value={project.completion} />
                  </Box>
                    <Typography sx={{width:'50px',textAlign:'center'}}>{project.completion}%</Typography>
                </Grid>
              </Grid>
            ))}
          </Stack>
        </Stack>
      </Grid>

      {/* Orders overviw */}
      <Grid
        item xl={3} lg={4} md={12} sm={12} xs={12}
        sx={{ maxHeight:'330px',backgroundColor: "hsl(var(--foreground))", borderRadius: "8px",paddingRight:'1rem'}}>
        <Typography sx={{ color: "hsl(var(--title))" }}>Orders overview</Typography>
        <Typography sx={{ color: "hsl(var(--success))" }}>
          +30%&nbsp;<span style={{ color: "hsl(var(--subTitle))" }}>this month</span>
        </Typography>
        <Box className="scrollbar-container"
          sx={{
            maxHeight:'250px',
            display: "flex",
            flexDirection: "column",
            rowGap: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            overflow:'hidden',
            overflowY:'auto',
          }}>
          <StackedItems imgUrl="/html.png" title="$2400 Design changes" subTitle="Change degign for..." date={null} />
          <StackedItems
            imgUrl="/css.png"
            title="New Order #4219423"
            subTitle="Explore new opportunities..."
            date={new Date("2021-12-21T11:21:00")}
          />
          <StackedItems
            imgUrl="/stripe.png"
            title="Server Payments for..."
            subTitle="Omtimize payments to make..."
            date={"CANCELED"}
          />
        </Box>
      </Grid>
    </Grid>
    </Stack>
  )
}
