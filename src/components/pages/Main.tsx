import React, { useState } from "react";
import { getLatestRates } from "../api/api";
import { Box, Button, Drawer } from '@mui/material';
import { mainStyle, StyledTextField } from "../style/main.style";
import Header from "../pages/Header";
import Sidebar from "./Sidebar";

const Main: React.FC = () => {
    const drawerWidth = 200;
    const [base, setBase] = useState('');
    const [symbols, setSymbols] = useState('');
    const [amount, setAmount] = useState(0);
    const [rates, setRates] = useState<any>(null);
    const [error, setError] = useState("")

    const handleGetRates = async () => {
        try {
            if (base && symbols !== "") {
                const data = await getLatestRates(base, symbols, amount);
                setRates(data);
            } else {
                setError("Please enter both base and symbols");
            }
        } catch (error: any) {
            console.log(error);
            setRates("Error: " + error.message);
        };
    };

    return (
        <>
            <Drawer
                variant="permanent"
                anchor="left"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Sidebar />
            </Drawer>
            <Header />
            <Box sx={mainStyle.Box}>
                <h1>Exchange Rates</h1>
                <StyledTextField
                    helperText="example: USD, JPY, GBP..."
                    required
                    label="FROM"
                    value={base}
                    onChange={e => {
                        setBase(e.target.value);
                        setError("");
                    }} />
                <StyledTextField
                    helperText="example: USD, JPY, GBP..."
                    required label="TO"
                    value={symbols}
                    onChange={e => setSymbols(e.target.value)} />
                <StyledTextField
                    type="number"
                    label="Amount"
                    value={amount}
                    onChange={e => setAmount(parseInt(e.target.value))} />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Button sx={mainStyle.button} onClick={handleGetRates}>Get Latest Rates</Button>
                {rates && (
                    <div>
                        <h2>Rates:</h2>
                        <pre>{JSON.stringify(rates, null, 2)}</pre>
                    </div>
                )}
            </Box>
        </>
    )
};

export default Main;