import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
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
                <List>
                    <ListItem sx={style.text}>
                        <ListItemIcon>
                            <HomeIcon sx={{color: "white"}}/>
                        </ListItemIcon>
                        <ListItemText
                            primary="HOME"
                        />
                    </ListItem>
                </List>
            </Box>
        </div>
    );
};

export default Sidebar;