import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Box } from '@mui/material';
import { style } from "../style/sidebar.style";

const Sidebar: React.FC = () => {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    p: 5,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: 150,
                }}
            />
            <List>
                <ListItem sx={style.text}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="HOME"
                    />
                </ListItem>
            </List>
        </div>
    );
};

export default Sidebar;