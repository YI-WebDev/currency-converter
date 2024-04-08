import React, { useState } from "react";
import { getLatestRates } from "../api/api";
import { Box, Button, Drawer, TextField } from '@mui/material';
import { mainStyle } from "../style/main.style";
import Header from "../pages/Header";
import Sidebar from "./Sidebar";

const Main: React.FC = () => {
    const drawerWidth = 160;
    const [base, setBase] = useState('');
    const [symbols, setSymbols] = useState('');
    const [amount, setAmount] = useState(0);
    const [rates, setRates] = useState<any>(null);

    const handleGetRates = async () => {
        try {
            const data = await getLatestRates(base, symbols, amount);
            setRates(data);
        } catch (error: any) {
            console.log(error);
            setRates("Error: " + error.message);
        };
    };

    return (
        <div>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Sidebar />
            </Drawer>
            <Header />
            <Box sx={mainStyle.Box}>
                <h1>Exchange Rates</h1>
                <TextField label="Base" value={base} onChange={e => setBase(e.target.value)} />
                <TextField label="Symbols" value={symbols} onChange={e => setSymbols(e.target.value)} />
                <TextField type="number" label="Amount" value={amount} onChange={e => setAmount(parseInt(e.target.value))} />
                <Button sx={mainStyle.button} onClick={handleGetRates}>Get Latest Rates</Button>
                {rates && (
                    <div>
                        <h2>Rates:</h2>
                        <pre>{JSON.stringify(rates, null, 2)}</pre>
                    </div>
                )}
            </Box>
        </div>
    )
};

export default Main;