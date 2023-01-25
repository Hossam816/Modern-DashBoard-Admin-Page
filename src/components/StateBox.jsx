import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
const StateBox = ({ title, subTitle, icon, progress, increase }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box width="100%" m="0 30px">
            <Box display="flex" justifyContent="space-between">
                <Box>
                    { icon }
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={ { color: colors.gray[ 100 ] } }
                    >
                        { title }
                    </Typography>
                </Box>
                <Box>
                    <ProgressCircle progress={ progress } />
                </Box>
            </Box>

            <Box display="flex" justifyContent="space-between">
                <Typography
                    variant="h6"
                    sx={ { color: colors.greenAccent[ 500 ] } }
                >
                    { subTitle }
                </Typography>
                <Typography
                    variant="h5"
                    fontWeight="italic"
                    sx={ { color: colors.greenAccent[ 200 ] } }
                >
                    { increase }
                </Typography>
            </Box>
        </Box>
    );
};

export default StateBox;
