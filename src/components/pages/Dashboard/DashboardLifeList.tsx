import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Person3Icon from '@mui/icons-material/Person3';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSlider } from "../../../hooks/useSlider";
import { formatCurrency } from "../../../utils/currencyFormatter";

export function DashboardLifeList() {

  const { handleMouseDown,handleMouseMove,handleTouchDown,handleTouchMove } = useSlider();


  return (

    <Stack  onMouseDown={handleMouseDown}
          onTouchStart={handleTouchDown}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
    sx={{ display:'flex',flexDirection:'row',columnGap:'1rem', justifyContent:'space-between',alignItems:'center',width:'100%',overflow:'hidden'}}>

      <Card sx={{ minWidth:200,maxHeight:50 ,backgroundColor:'hsl(var(--foreground))',
      display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:'0.5rem 1rem'}} >
    <Box sx={{display:'flex',flexDirection:'column'}}>
      <Typography sx={{color:'hsl(var(--subTitle))'}}>Today's Money</Typography>
      <Box sx={{ display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Typography variant="h6" sx={{color:'hsl(var(--title))'}}>{formatCurrency(53000)}&nbsp;</Typography>
        <Typography sx={{color:'hsl(var(--success))'}}>+55%</Typography>
      </Box>
    </Box>
      <AccountBalanceWalletIcon sx={{color:'hsl(var(--icon-color))'}}/>
    </Card>

      <Card sx={{ minWidth:200,maxHeight:50 ,backgroundColor:'hsl(var(--foreground))',
      display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:'0.5rem 1rem'}} >
    <Box sx={{display:'flex',flexDirection:'column'}}>
      <Typography sx={{color:'hsl(var(--subTitle))'}}>Today's Users</Typography>
      <Box sx={{ display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Typography variant="h6" sx={{color:'hsl(var(--title))'}}>2,300&nbsp;</Typography>
        <Typography sx={{color:'hsl(var(--success))'}}>+55%</Typography>
      </Box>
    </Box>
      <PersonAddIcon sx={{color:'hsl(var(--icon-color))'}}/>
    </Card>

      <Card sx={{ minWidth:200,maxHeight:50 ,backgroundColor:'hsl(var(--foreground))',
      display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:'0.5rem 1rem'}} >
    <Box sx={{display:'flex',flexDirection:'column'}}>
      <Typography sx={{color:'hsl(var(--subTitle))'}}>New Clients</Typography>
      <Box sx={{ display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Typography variant="h6" sx={{color:'hsl(var(--title))'}}>+3,052&nbsp;</Typography>
        <Typography sx={{color:'hsl(var(--danger))'}}>-14%</Typography>
      </Box>
    </Box>
      <AccountBalanceWalletIcon sx={{color:'hsl(var(--icon-color))'}}/>
    </Card>

      <Card sx={{ minWidth:200,maxHeight:50 ,backgroundColor:'hsl(var(--foreground))',
      display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:'0.5rem 1rem'}} >
    <Box sx={{display:'flex',flexDirection:'column'}}>
      <Typography sx={{color:'hsl(var(--subTitle))'}}>Total Sales</Typography>
      <Box sx={{ display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Typography variant="h6" sx={{color:'hsl(var(--title))'}}>{formatCurrency(173000)}&nbsp;&nbsp;</Typography>
        <Typography sx={{color:'hsl(var(--success))'}}>-8%</Typography>
      </Box>
    </Box>
      <ShoppingCartIcon sx={{color:'hsl(var(--icon-color))'}}/>
    </Card>
    
      <Card sx={{ minWidth:200,maxHeight:50 ,backgroundColor:'hsl(var(--foreground))',
      display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:'0.5rem 1rem'}} >
    <Box sx={{display:'flex',flexDirection:'column'}}>
      <Typography sx={{color:'hsl(var(--subTitle))'}}>Today's Money</Typography>
      <Box sx={{ display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Typography variant="h6" sx={{color:'hsl(var(--title))'}}>$ 173,000&nbsp;</Typography>
        <Typography sx={{color:'hsl(var(--success))'}}>+55%</Typography>
      </Box>
    </Box>
      <ShoppingCartIcon sx={{color:'hsl(var(--icon-color))'}}/>
    </Card>

            <Card sx={{ minWidth:200,maxHeight:50 ,backgroundColor:'hsl(var(--foreground))',
      display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:'0.5rem 1rem'}} >
    <Box sx={{display:'flex',flexDirection:'column'}}>
      <Typography sx={{color:'hsl(var(--subTitle))'}}>Today's Money</Typography>
      <Box sx={{ display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Typography variant="h6" sx={{color:'hsl(var(--title))'}}>{formatCurrency(53000)}&nbsp;</Typography>
        <Typography sx={{color:'hsl(var(--success))'}}>+55%</Typography>
      </Box>
    </Box>
      <AccountBalanceWalletIcon sx={{color:'hsl(var(--icon-color))'}}/>
    </Card>

      <Card sx={{ minWidth:200,maxHeight:50 ,backgroundColor:'hsl(var(--foreground))',
      display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:'0.5rem 1rem'}} >
    <Box sx={{display:'flex',flexDirection:'column'}}>
      <Typography sx={{color:'hsl(var(--subTitle))'}}>Today's Users</Typography>
      <Box sx={{ display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Typography variant="h6" sx={{color:'hsl(var(--title))'}}>2,300&nbsp;</Typography>
        <Typography sx={{color:'hsl(var(--success))'}}>+55%</Typography>
      </Box>
    </Box>
      <PersonAddIcon sx={{color:'hsl(var(--icon-color))'}}/>
    </Card>

      <Card sx={{ minWidth:200,maxHeight:50 ,backgroundColor:'hsl(var(--foreground))',
      display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:'0.5rem 1rem'}} >
    <Box sx={{display:'flex',flexDirection:'column'}}>
      <Typography sx={{color:'hsl(var(--subTitle))'}}>New Clients</Typography>
      <Box sx={{ display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Typography variant="h6" sx={{color:'hsl(var(--title))'}}>+3,052&nbsp;</Typography>
        <Typography sx={{color:'hsl(var(--danger))'}}>-14%</Typography>
      </Box>
    </Box>
      <AccountBalanceWalletIcon sx={{color:'hsl(var(--icon-color))'}}/>
    </Card>

      <Card sx={{ minWidth:200,maxHeight:50 ,backgroundColor:'hsl(var(--foreground))',
      display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:'0.5rem 1rem'}} >
    <Box sx={{display:'flex',flexDirection:'column'}}>
      <Typography sx={{color:'hsl(var(--subTitle))'}}>Total Sales</Typography>
      <Box sx={{ display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Typography variant="h6" sx={{color:'hsl(var(--title))'}}>{formatCurrency(173000)}&nbsp;&nbsp;</Typography>
        <Typography sx={{color:'hsl(var(--success))'}}>-8%</Typography>
      </Box>
    </Box>
      <ShoppingCartIcon sx={{color:'hsl(var(--icon-color))'}}/>
    </Card>
    
      <Card sx={{ minWidth:200,maxHeight:50 ,backgroundColor:'hsl(var(--foreground))',
      display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:'0.5rem 1rem'}} >
    <Box sx={{display:'flex',flexDirection:'column'}}>
      <Typography sx={{color:'hsl(var(--subTitle))'}}>Today's Money</Typography>
      <Box sx={{ display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Typography variant="h6" sx={{color:'hsl(var(--title))'}}>$ 173,000&nbsp;</Typography>
        <Typography sx={{color:'hsl(var(--success))'}}>+55%</Typography>
      </Box>
    </Box>
      <ShoppingCartIcon sx={{color:'hsl(var(--icon-color))'}}/>
    </Card>
    
    </Stack>
  )
}