import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import InfoIcon from '@mui/icons-material/Info';
import HandymanIcon from '@mui/icons-material/Handyman';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import { Link, useLocation } from 'react-router-dom';
import { Link as LinkSmooth } from "react-scroll";
import Logo from '../../../assets/logo-escuro.webp';

type Anchor = 'right';

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({ right: false });

    const location = useLocation();
    let isInitialPage = location.pathname === "/" || false;

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const linkItens = isInitialPage
        ? [
            { title: 'Sobre', path: 'sobre', icon: <InfoIcon /> },
            { title: 'Serviços', path: 'servicos', icon: <HandymanIcon /> },
            { title: 'Tecnologias', path: 'tecnologias', icon: <ImportantDevicesIcon /> },
        ]
        : [
            { title: 'Home', path: '/home', icon: <HomeIcon /> },
            { title: 'Talentos', path: '/talentos', icon: <PersonSearchIcon /> },
            { title: 'Adicionar Talento', path: '/adicionar', icon: <PersonAddIcon /> },
        ];

    const linkServices = [
        { title: "Sair", path: '/', icon: <LogoutIcon /> }
    ]

    const list = (anchor: Anchor) => (
        <Box
            sx={{
                width: 250,
                background: "var(--azul-claro)",
                height: "100%",
                color: 'var(--font-color-primary)'
            }}
            role="presentation"
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingBlock: 2,
                    userSelect: 'none'
                }}
            >
                <Box
                    sx={{
                        width: "100px",
                        height: "25px",
                        "& :first-child": {
                            width: "100px",
                            height: "25px",
                        }
                    }}
                >
                    <img src={Logo} alt="logo" />
                </Box>
            </Box>
            <Divider />
            <List>
                {linkItens.map((i, index) => (
                    isInitialPage ?
                        <LinkSmooth
                            key={`${i.title}-${index}`}
                            to={i.path}
                            spy={true}
                            smooth={true}
                            duration={800}
                        >
                            <ListItem
                                disablePadding
                                onClick={toggleDrawer(anchor, false)}
                                onKeyDown={toggleDrawer(anchor, false)}
                            >
                                <ListItemButton
                                    sx={{
                                        "&:hover": {
                                            background: 'var(--shadow-hover)'
                                        }
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: "40px",
                                            color: "var(--font-color-primary)"
                                        }}
                                    >
                                        {i.icon || 'icon'}
                                    </ListItemIcon>
                                    <ListItemText primary={i.title} />
                                </ListItemButton>
                            </ListItem>
                        </LinkSmooth>
                        :
                        <Link
                            key={`${i.title}-${index}`}
                            to={i.path}
                        >
                            <ListItem
                                disablePadding
                                onClick={toggleDrawer(anchor, false)}
                                onKeyDown={toggleDrawer(anchor, false)}
                            >
                                <ListItemButton
                                    sx={{
                                        "&:hover": {
                                            background: 'var(--shadow-hover)'
                                        }
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: "40px",
                                            color: "var(--font-color-primary)"
                                        }}
                                    >
                                        {i.icon || 'icon'}
                                    </ListItemIcon>
                                    <ListItemText primary={i.title} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                ))}
            </List>
            <Divider />
            <List
                sx={{
                    display: isInitialPage ? "block" : "none",
                }}
            >
                {['Encontre um Talento'].map((text, index) => (
                    <Link to={"/home"} key={`${text}-${index}`}>
                        <ListItem
                            disablePadding
                            onClick={toggleDrawer(anchor, false)}
                            onKeyDown={toggleDrawer(anchor, false)}
                        >
                            <ListItemButton
                                sx={{
                                    "&:hover": {
                                        background: 'var(--shadow-hover)'
                                    }
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: "40px",
                                        color: "var(--font-color-primary)"
                                    }}
                                >
                                    <PersonSearchIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <List
                sx={{
                    display: isInitialPage ? "none" : "block"
                }}
            >
                {linkServices.map((i, index) => (
                    <Link
                        key={`${i.title}-${index}`}
                        to={i.path}
                    >
                        <ListItem
                            disablePadding
                            onClick={toggleDrawer(anchor, false)}
                            onKeyDown={toggleDrawer(anchor, false)}
                        >
                            <ListItemButton
                                sx={{
                                    "&:hover": {
                                        background: 'var(--shadow-hover)'
                                    }
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: "40px",
                                        color: "var(--font-color-primary)"
                                    }}
                                >
                                    {i.icon || 'icon'}
                                </ListItemIcon>
                                <ListItemText primary={i.title} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment >
                <Button onClick={toggleDrawer('right', true)}
                    sx={{
                        color: "var(--font-color-primary)",
                        textTransform: 'inherit',
                        p: 0
                    }}
                >
                    <MenuIcon />
                </Button>
                <Drawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                >
                    {list('right')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}