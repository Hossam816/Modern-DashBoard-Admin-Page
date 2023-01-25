import React from "react";
import Header from "../../components/Header";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import GEoChart from "../../components/GEoChart";
import BarChart from "../../components/BarChart";
import StateBox from "../../components/StateBox";
import ProgressCircle from "../../components/ProgressCircle";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

const DashBoard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subTitle="Welcome to your Dashboard" />
                <Box>
                    <Button
                        sx={ {
                            backgroundColor: colors.blueAccent[ 800 ],
                            color: colors.gray[ 100 ],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        } }
                    >
                        <DownloadOutlinedIcon sx={ { mr: "10px" } } />
                        Download Reports
                    </Button>
                </Box>
            </Box>

            {/* Grid charts boxes */ }
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/* Row Chart 1 */ }
                <Box
                    gridColumn="span 3"
                    backgroundColor={ colors.primary[ 700 ] }
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StateBox
                        title="72,364"
                        subTitle="Email Sent"
                        progress="0.36"
                        increase="+14%"
                        icon={
                            <EmailIcon
                                sx={ { color: colors.greenAccent[ 500 ], fontSize: "26px" } }
                            />
                        }
                    />
                </Box>

                <Box
                    gridColumn="span 3"
                    backgroundColor={ colors.primary[ 700 ] }
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StateBox
                        title="52,474"
                        subTitle="Sailes Obtained"
                        progress="0.51"
                        increase="+31%"
                        icon={
                            <PointOfSaleIcon
                                sx={ { color: colors.greenAccent[ 500 ], fontSize: "26px" } }
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={ colors.primary[ 700 ] }
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StateBox
                        title="152,924"
                        subTitle="New Clients"
                        progress="0.70"
                        increase="+60%"
                        icon={
                            <PersonAddIcon
                                sx={ { color: colors.greenAccent[ 500 ], fontSize: "26px" } }
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={ colors.primary[ 700 ] }
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StateBox
                        title="2,485,151"
                        subTitle="Traffic Inbound"
                        progress="0.90"
                        increase="+75%"
                        icon={
                            <TrafficIcon
                                sx={ { color: colors.greenAccent[ 500 ], fontSize: "26px" } }
                            />
                        }
                    />
                </Box>
                {/* Row Chart 2 */ }
                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    backgroundColor={ colors.primary[ 700 ] }
                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                variant="h4"
                                fontWeight="700"
                                color={ colors.gray[ 100 ] }
                            >
                                Revenue Generated
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="600"
                                color={ colors.greenAccent[ 500 ] }
                            >
                                $120,356,895
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={ { fontSize: "26px", color: colors.greenAccent[ 500 ] } }
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" mt="-20px">
                        <LineChart isDashboard={ true } />
                    </Box>
                </Box>

                {/* Transaction Box */ }
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={ colors.primary[ 700 ] }
                    overflow="auto"
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={ `4px solid ${colors.primary[ 600 ]}` }
                        color={ colors.gray[ 300 ] }
                    >
                        <Typography
                            color={ colors.gray[ 300 ] }
                            variant="h4"
                            fontWeight="700"
                            p="15px"
                        >
                            Recent Transaction
                        </Typography>
                    </Box>

                    { mockTransactions.map((transaction, idx) => (
                        <Box
                            key={ `${transaction.txId}-${idx}` }
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={ `4px solid ${colors.primary[ 600 ]}` }
                            p="15px"
                        >
                            <Box>
                                <Typography
                                    color={ colors.greenAccent[ 400 ] }
                                    variant="h4"
                                    fontWeight="700"
                                >
                                    { transaction.txId }
                                </Typography>

                                <Typography
                                    color={ colors.gray[ 100 ] }
                                    variant="h4"
                                    fontWeight="700"
                                >
                                    { transaction.user }
                                </Typography>
                            </Box>
                            <Box color={ colors.gray[ 100 ] }>{ transaction.date }</Box>
                            <Box
                                backgroundColor={ colors.greenAccent[ 600 ] }
                                p="5px 10px"
                                borderRadius="4px"
                            >
                                ${ transaction.cost }
                            </Box>
                        </Box>
                    )) }
                </Box>

                {/* Row Chart 3 */ }

                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={ colors.primary[ 700 ] }
                    p="30px"
                >
                    <Typography variant="h5" fontWeight="600">
                        Compaign
                    </Typography>

                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        mt="25px"
                    >
                        <ProgressCircle size="125" />

                        <Typography
                            variant="h5"
                            color={ colors.greenAccent[ 500 ] }
                            sx={ { mt: "15px" } }
                        >
                            $215,185 revenue generated
                        </Typography>
                        <Typography>Includes extra misc costs</Typography>
                    </Box>
                </Box>

                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={ colors.primary[ 700 ] }
                >
                    <Typography variant="h5" fontWeight="600" sx={ { p: '30px 30px 0 30px' } }>
                        Sales Quantity
                    </Typography>

                    <Box
                        height="250px"
                        mt="-20px"
                    >
                        <BarChart isDashboard={ true } />
                    </Box>
                </Box>

                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={ colors.primary[ 700 ] }
                    p="30px"
                >
                    <Typography variant="h5" fontWeight="600" sx={ { mb: '15px ' } }>
                        Geography Based Traffic
                    </Typography>

                    <Box
                        height="200px"
                    >
                        <GEoChart isDashboard={ true } />
                    </Box>
                </Box>
                {/* ******* */ }
            </Box>
        </Box>
    );
};

export default DashBoard;
