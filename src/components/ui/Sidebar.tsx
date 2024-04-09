import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { Box } from '@mui/material';
import { style } from "../style/sidebar.style";

const Sidebar: React.FC = () => {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#1e1e1e',
                    height: '100vh',
                }}
            >
                <List sx={{ bottom: "200px", display: { xs: 'none', sm: 'block' } }}>
                    <ListItem sx={style.text}>
                        <ListItemIcon>
                            <CurrencyExchangeIcon sx={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Currency Converter"
                        />
                    </ListItem>
                    <ListItem sx={style.text}>
                        <ListItemIcon>
                            <PlaylistAddCheckIcon sx={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Todo List"
                        />
                    </ListItem>
                    <ListItem sx={style.text}>
                        <ListItemIcon>
                            <ColorLensIcon sx={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Color Picker"
                        />
                    </ListItem>
                </List>
            </Box>
        </div>
    );
};

export default Sidebar;