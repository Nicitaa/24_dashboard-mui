import { Box, Card, Stack, Typography } from "@mui/material"

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1"
import PersonIcon from "@mui/icons-material/Person" //user
import PersonPinIcon from "@mui/icons-material/PersonPin" //client
import AccountBoxIcon from "@mui/icons-material/AccountBox"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import QueryStatsIcon from "@mui/icons-material/QueryStats"
import { SvgIconProps } from "@mui/material"

import { useSlider } from "../../../hooks/useSlider"

interface CardProps {
  title: string
  value: string | number
  percentage: string
  icon: React.ComponentType<SvgIconProps>
}

const ListItem: React.FC<CardProps> = ({ title, value, percentage, icon: Icon }) => {
  const color = percentage.includes("-") ? "hsl(var(--danger))" : "hsl(var(--success))"
  return (
    <Card
      sx={{
        minWidth: 200,
        maxHeight: 50,
        backgroundColor: "hsl(var(--foreground))",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem 1rem",
        userSelect: "none",
      }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{ color: "hsl(var(--subTitle))" }}>{title}</Typography>
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <Typography variant="h6" sx={{ color: "hsl(var(--title))" }}>
            {value}&nbsp;
          </Typography>
          <Typography sx={{ color, paddingTop: "2px", fontSize: "14px" }}>{percentage}</Typography>
        </Box>
      </Box>
      <Icon />
    </Card>
  )
}

const lifeListItems = [
  {
    label: "Today's money",
    value: "$53,000",
    percentage: "+55%",
    icon: AccountBalanceWalletIcon,
  },
  {
    label: "Today's users",
    value: "2300",
    percentage: "+35%",
    icon: PersonPinIcon,
  },
  {
    label: "Today's clients",
    value: "300",
    percentage: "+4%",
    icon: PersonIcon,
  },
  {
    label: "Today's new users",
    value: "100",
    percentage: "-38%",
    icon: AccountBoxIcon,
  },
  {
    label: "Today's new clients",
    value: "14",
    percentage: "-23%",
    icon: PersonAddAlt1Icon,
  },
  {
    label: "Today's sales",
    value: "$531,000",
    percentage: "+25%",
    icon: AttachMoneyIcon,
  },
  {
    label: "Total sales",
    value: "$1,253,000",
    percentage: "+0.3%",
    icon: QueryStatsIcon,
  },
]

export function DashboardLifeList() {
  const { handleMouseDown, handleMouseMove, handleTouchDown, handleTouchMove } = useSlider()

  return (
    <Stack
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchDown}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      sx={{
        display: "flex",
        flexDirection: "row",
        columnGap: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        overflow: "hidden",
      }}>
      {lifeListItems.map(lifeListItem => (
        <ListItem
          title={lifeListItem.label}
          value={lifeListItem.value}
          percentage={lifeListItem.percentage}
          icon={lifeListItem.icon}
        />
      ))}
    </Stack>
  )
}
