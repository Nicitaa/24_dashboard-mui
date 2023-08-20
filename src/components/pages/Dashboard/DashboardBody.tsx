import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useSlider } from "../../../hooks/useSlider";

export function DashboardBody() {

  const { handleMouseDown,handleMouseMove,handleTouchDown,handleTouchMove } = useSlider();


  return (
    <Stack sx={{ display:'flex',flexDirection:'row',columnGap:'1rem', justifyContent:'space-between',alignItems:'center',
    width:'100%', height:'250px', overflow:'hidden'}}>
      
      <Box sx={{maxWidth:400,height:'100%',display:'flex',flexDirection:'column',justifyContent:'start'}}>
        <Typography sx={{color:'hsl(var(--subTitle))',size:'14px'}}>
          Built by developers
        </Typography>
        <Typography variant="h6" sx={{color:'hsl(var(--title))'}}>
          Purity UI Dashboard
        </Typography>
        <Typography sx={{color:'hsl(var(--subTitle))',size:'14px'}}>
          From colors cards,typography to compkex elements you will find the full documentation
        </Typography>
        
      </Box>
      
      
      <Box sx={{display:'flex',flexDirection:'row',columnGap:'3rem',justifyContent:'space-between',alignItems:'center',
      width:'100%',height:'100%',overflow:'hidden',userSelect:'none'}}
       onMouseDown={handleMouseDown}
          onTouchStart={handleTouchDown}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}>
      <img style={{width:'450px',height:'100%',borderRadius:'12px',userSelect:'none',pointerEvents:'none'}} src="/MUI-dashboard.jpg" alt="MUI-dashboard.jpg" />

      <Box sx={{borderRadius:'12px',width:'450px',height:'100%',backgroundImage:'url("/business-communication.jpg")',
          backgroundSize: 'cover',backgroundPosition: 'center'}}>
       <Box sx={{position:'relative',display:'flex',width:'450px',flexDirection:'column',justifyContent:'space-between',height:'100%',padding:'1rem 0.5rem'}}>
        <Box>
         <Typography sx={{color:'hsl(var(--title))',size:'14px',left:0,top:'25%',userSelect:'none'}}>
          Work with Rockets
        </Typography>
        <Typography sx={{color:'hsl(var(--subTitle))',fontSize:'14px',userSelect:'none'}}>
          Wealth creation is an evolutionarily recent positive-sum game.
          It is all about who take the opportunity first.
        </Typography>
       </Box>
        <Button sx={{color:'hsl(var(--title))',display:'flex',flexDirection:'row',alignItems:'center', transition: 'transform 300ms',
        position:'absolute',bottom:'20%',size:'14px',textTransform:'none','&:hover': {backgroundColor:'transparent',transform: 'translateX(5px)'}}}>
          Read more&nbsp;<ArrowRightAltIcon/>
        </Button>
        </Box>     
       </Box>
      </Box>

    </Stack>
  )
}