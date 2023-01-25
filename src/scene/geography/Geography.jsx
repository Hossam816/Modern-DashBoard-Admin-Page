import React from 'react';
import { Box, colors } from '@mui/material';
import Header from "../../components/Header";
import GEoChart from '../../components/GEoChart';

const Geography = () => {
    return (
        <Box m="20px">
            <Header title="GEO Chart" subTitle="Simple GEO Chart" />
            <Box height="75vh" border={ `1.5px solid ${colors.grey[ 600 ]}` } borderRadius="4px">
                <GEoChart />
            </Box>
        </Box>
    );
};

export default Geography;