import { Box } from "@mui/material";
import { headerStyle } from "../style/header.style";


const Header: React.FC = () => {
    return (
        <div>
            <Box sx={headerStyle.header}>
                <h1>Currency Converter</h1>
            </Box>
        </div>
    )
};

export default Header;