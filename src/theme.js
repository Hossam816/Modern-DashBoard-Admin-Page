import React from 'react';
import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

/* *** Colors *** */
export const tokens = (mode) => ({
    ...(mode === 'dark' ? {
        gray: {
            100: "#e7e8e8",
            200: "#cfd1d2",
            300: "#b6b9bb",
            400: "#9ea2a5",
            500: "#868b8e",
            600: "#6b6f72",
            700: "#505355",
            800: "#363839",
            900: "#1b1c1c"
        },
        primary: {
            100: "#d1ebf0",
            200: "#a3d7e1",
            300: "#74c2d2",
            400: "#46aec3",
            500: "#189ab4",
            600: "#137b90",
            700: "#0e5c6c",
            800: "#0a3e48",
            900: "#051f24"
        },
        greenAccent: {
            100: "#d1edde",
            200: "#a3dbbc",
            300: "#74c99b",
            400: "#46b779",
            500: "#18a558",
            600: "#138446",
            700: "#0e6335",
            800: "#0a4223",
            900: "#052112"
        },
        redAccent: {
            100: "#fdd1d2",
            200: "#fba2a6",
            300: "#f97479",
            400: "#f7454d",
            500: "#f51720",
            600: "#c4121a",
            700: "#930e13",
            800: "#62090d",
            900: "#310506"
        },
        blueAccent: {
            100: "#cddeeb",
            200: "#9bbed8",
            300: "#699dc4",
            400: "#377db1",
            500: "#055c9d",
            600: "#044a7e",
            700: "#03375e",
            800: "#02253f",
            900: "#01121f"
        },
    } : {
        gray: {
            100: "#1b1c1c",
            200: "#363839",
            300: "#505355",
            400: "#6b6f72",
            500: "#868b8e",
            600: "#9ea2a5",
            700: "#b6b9bb",
            800: "#cfd1d2",
            900: "#e7e8e8"
        },
        primary: {
            100: "#051f24",
            200: "#0a3e48",
            300: "#0e5c6c",
            400: "#f2f0f0",
            500: "#189ab4",
            600: "#46aec3",
            700: "#74c2d2",
            800: "#a3d7e1",
            900: "#d1ebf0",
        },
        greenAccent: {
            100: "#052112",
            200: "#0a4223",
            300: "#0e6335",
            400: "#138446",
            500: "#18a558",
            600: "#46b779",
            700: "#74c99b",
            800: "#a3dbbc",
            900: "#d1edde",
        },
        redAccent: {
            100: "#310506",
            200: "#62090d",
            300: "#930e13",
            400: "#c4121a",
            500: "#f51720",
            600: "#f7454d",
            700: "#f97479",
            800: "#fba2a6",
            900: "#fdd1d2",
        },
        blueAccent: {
            100: "#01121f",
            200: "#02253f",
            300: "#03375e",
            400: "#044a7e",
            500: "#055c9d",
            600: "#377db1",
            700: "#699dc4",
            800: "#9bbed8",
            900: "#cddeeb",
        }
    }

    )
});

/* *** MUI *** */
export const themsSetting = (mode) => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === 'dark' ? {
                //Dark Mode
                primary: {
                    main: colors.primary[ 500 ]
                },
                secondary: {
                    main: colors.greenAccent[ 500 ]
                },
                netural: {
                    dark: colors.gray[ 700 ],
                    main: colors.gray[ 500 ],
                    light: colors.gray[ 100 ]
                },
                background: {
                    default: colors.primary[ 900 ]
                },
            } : {
                //Light Mode
                primary: {
                    main: colors.primary[ 100 ]
                },
                secondary: {
                    main: colors.greenAccent[ 500 ]
                },
                netural: {
                    dark: colors.gray[ 700 ],
                    main: colors.gray[ 500 ],
                    light: colors.gray[ 100 ]
                },
                background: {
                    default: '#fcfcfc',
                }
            }
            )
        },
        typography: {
            fontFamily: [ "Source Sans Pro", "sans-serif" ].join(","),
            fontSize: 12,
            h1: {
                fontFamily: [ "Source Sans Pro", "sans-serif" ].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: [ "Source Sans Pro", "sans-serif" ].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: [ "Source Sans Pro", "sans-serif" ].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: [ "Source Sans Pro", "sans-serif" ].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: [ "Source Sans Pro", "sans-serif" ].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: [ "Source Sans Pro", "sans-serif" ].join(","),
                fontSize: 14,
            },

        }
    };
};

/* *** context for color ,ode *** */
export const ColorModeContext = createContext({
    toggleColorMode: () => { }
});

export const useMode = () => {
    const [ mode, setMode ] = useState('dark');
    const colorMode = useMemo(() => ({
        toggleColorMode: () => setMode((prev) => (prev === 'light' ? "dark" : "light")),
    }),
        []
    );

    const them = useMemo(() => createTheme(themsSetting(mode)), [ mode ]);
    return [ them, colorMode ];
};