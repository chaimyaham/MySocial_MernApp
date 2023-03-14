export const colorTokens={
    pink:{
        // 0:"#f8eff1",
        0:"#f9f7f7",
        10:"#E1EFF7",
        50: "#cdb4db",
        100: "#887e99",
        200: "#d5b4db",
        300: "#7983bc",
        400: "#808399",
        500: "#ae87c5",
        600: "#8890c3",
        700: "#635a72",
        800: "#a864b4",
        900: "#1a1d33",
        1000: "#17171c",
    },


    primary :{
        50:" rgb(245 250 253)",
        100: "rgb(222 239 249)",
        200: "rgb(196 227 244)",
        300: "rgb(167 213 239)",
        400: "rgb(128 194 232)",
        500: "rgb(79 169 220)",
        600:" rgb(65 139 181)",
        700: "rgb(53 114 149)",
        800: "rgb(44 94 123)",
        900: "rgb(31 67 87)",
        1000: "rgb(19 41 54)",

        }
}
// mui theme settings   
export const themeSettings= (mode)=>{
    return{
        palette:{
            mode :mode,
            ...(mode==="dark"?{
                //pallette values for dark mode
                primary :{
                    dark : colorTokens.primary[200],
                    main:colorTokens.primary[500],
                    light:colorTokens.primary[800],
                },
                neutral:{
                    dark:colorTokens.pink[100],
                    main:colorTokens.pink[200],
                    mediumMain:colorTokens.pink[10],
                    medium:colorTokens.pink[200],
                    light:colorTokens.pink[800],
                },
                background:{
                    default:colorTokens.pink[1000],
                    alt:colorTokens.pink[900]
                }
            }:{
                //pallette values for light mode
                primary :{
                    dark : colorTokens.primary[700],
                    main:colorTokens.primary[500],
                    light:colorTokens.primary[50],
                },
                neutral:{
                    dark:colorTokens.pink[700],
                    main:colorTokens.pink[500],
                    mediumMain:colorTokens.pink[400],
                    medium:colorTokens.pink[300],
                    light:colorTokens.pink[50],
                },
                background:{
                    default:colorTokens.pink[10],
                    alt:colorTokens.pink[0]
                },
            }),
            
        },
        typography:{
            fontFamily :["Rubik","sans-serif"].join(","),
            fontSize :12,
            h1:{
                fontFamily :["Rubik","sans-serif"].join(","),
                fontSize :40,
            },
            h2:{
                fontFamily :["Rubik","sans-serif"].join(","),
                fontSize :32,
            },
            h3:{
                fontFamily :["Rubik","sans-serif"].join(","),
                fontSize :24,
            },
            h4:{
                fontFamily :["Rubik","sans-serif"].join(","),
                fontSize :20,
            },
            h5:{
                fontFamily :["Rubik","sans-serif"].join(","),
                fontSize :16,
            },
            h6:{
                fontFamily :["Rubik","sans-serif"].join(","),
                fontSize :14,
            },
        }
    }
}