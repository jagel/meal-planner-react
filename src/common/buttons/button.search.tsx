import Button from "@mui/material/Button"

export interface JglButtonProps{
    isLoading:boolean
}

export const JglButtonSearch = (props: JglButtonProps) => {
    return <Button type="submit">Search</Button>
}