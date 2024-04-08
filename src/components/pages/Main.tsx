import React, { useState } from "react";
import { getLatestRates } from "../api/api";
import { Button, TextField } from '@mui/material';

const Main: React.FC = () => {
    const [base, setBase] = useState('USD');
    const [symbols, setSymbols] = useState('JPY');
    const [rates, setRates] = useState<any>(null);

    const handleGetRates = async () => {
        try {
            const data = await getLatestRates(base, symbols);
            setRates(data.rates.JPY);
        } catch (error: any) {
            console.log(error);
            setRates("Error: " + error.message);
        };
    };

    return (
        <div className="main">
            <h1>Exchange Rates</h1>
            <TextField label="Base" value={base} onChange={e => setBase(e.target.value)} />
            <TextField label="Symbols" value={symbols} onChange={e => setSymbols(e.target.value)} />
            <Button onClick={handleGetRates}>Get Latest Rates</Button>
            {rates && (
                <div>
                    <h2>Rates:</h2>
                    <pre>{JSON.stringify(rates, null, 2)}</pre>
                </div>
            )}
        </div>
    )
};

export default Main;