import {createTheme} from "@mui/material";

export const theme = (darkMode, isRtl) => createTheme({
    palette: {
        mode: darkMode,
        ...darkMode === 'dark' ? {
            primary: {
                main: '#708096',
                text: '#131313',
            },
            secondary: {
                main: '#E74C3C',
                text: '#fcfcfc'
            },
            warning: {
                main: '#9d9f4b',
                text: '#fcfcfc'
            },
            success: {
                text: '#fcfcfc',
                main: '#3e7e5b',
            },
            error: {
                main: '#d2615b',
                text: '#fcfcfc'
            },
            grey: {
                main: '#3b3f46',
                text: '#f5f5f5'
            },
            simple: {
                main: '#1f232a'
            },
            border: {
                main: '#8d8d8d',
                fifty: '#B3B3B38C',
                secondary: '#3a3a3a'
            },
            background: {
                default: '#2f3640',
                paper: '#353b48',
                solid: '#1f232a',
                active: '#1c2028',
                hover: '#252a33',
                contrast: '#3a414f',
                postsSearch: '#FFFFFF0A'
            },
            text: {
                primary: '#f1f1f1',
                secondary: '#B3B3B3',
                grey: '#f5f5f5',
                svg: '#c9c9c9',
                post: '#d3d3d3'
            },
            shadow: {
                postsHeader: '#FFFFFF1E'
            }
        } : {
            primary: {
                main: '#487eb0',
                text: '#f1f1f1',
            },
            secondary: {
                main: '#E74C3C',
                text: '#fcfcfc'
            },
            warning: {
                main: '#E4E756',
                text: '#323232'
            },
            success: {
                main: '#1BB55C',
                text: '#fcfcfc'
            },
            error: {
                main: '#E74C3C',
                text: '#fcfcfc'
            },
            grey: {
                main: '#EFF2F5',
                text: '#131313'
            },
            simple: {
                main: '#fbfcff'
            },
            border: {
                main: '#ebebeb',
                fifty: '#3131318C',
                secondary: '#adadad'
            },
            background: {
                default: '#ffffff',
                paper: '#EFF2F5',
                solid: '#fbfcff',
                active: '#e0e1e8',
                hover: '#d6d7dc',
                contrast: '#D9D9D9',
                postsSearch: '#0000000A'
            },
            text: {
                primary: '#131313',
                secondary: '#B3B3B3',
                grey: '#131313',
                svg: '#707070',
                post: '#424242'
            },
            shadow: {
                postsHeader: '#0000001f'
            }
        },
    },
    typography: {
        fontFamily: 'IRANSansX,Roboto',
    },
    shape: {
        borderRadius: 2.5,
        postsSearchBorderRadius: 2,
    },
    zIndex: {
        languageSelect: '9999',
        menu: '9998',
        mapButton: '1000',
        modalOne: '10000',
        header: '9998',
        modalTwo: '10001',
        modalThree: '10002',
        modalHeader: '9998',
        loading: '9999999',
        alert: '10000000',
        newPost: '9999899',
        chatInput: '10002',
        buttons: '1001',
        pwaMessage: '20000000',
        fullWidthImage:'19000000'
    },
    direction: isRtl ? 'rtl' : 'ltr',
    desktopWidth: '400px'
})
