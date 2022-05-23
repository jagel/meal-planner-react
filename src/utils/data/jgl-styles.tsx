import { SxProps, Theme } from "@mui/material/styles"

  export const Planner_Colors : Record<string,React.CSSProperties> = {
    Header:{textAlign:'center', backgroundColor: '#237a99', color: 'white'},
    BoxContainer:{}
}

export const SX_Properties : Record<string,SxProps<Theme>> = {
  BoxMainContainer:{display:'flex', flexDirection:'column', justifyContent:'space-between', gap:'15px', marginBottom:'10px'}
}