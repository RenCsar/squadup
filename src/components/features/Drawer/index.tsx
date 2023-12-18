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
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import InfoIcon from '@mui/icons-material/Info';
import HandymanIcon from '@mui/icons-material/Handyman';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo-escuro.webp';

type Anchor = 'right';

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({ right: false });

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

    const icons = [
        <InfoIcon />,
        <HandymanIcon />,
        <ImportantDevicesIcon />,
        <MailIcon />
    ];

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
                {/* Se não estiver logado aparece o logo, se estiver vai aparecer a imagem do usuário */}
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
                {['Sobre', 'Serviços', 'Tecnologias', 'Contato'].map((text, index) => (
                    <a href={`#${text}`}>
                        <ListItem
                            key={text}
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
                                    {icons[index] || 'icon'}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    </a>
                ))}
            </List>
            <Divider />
            <List>
                {['Encontre um Talento'].map((text, index) => (
                    <Link to={"/home"}>
                        <ListItem
                            key={text}
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
        </Box>
    );

    return (
        <div>
            <React.Fragment >
                <Button onClick={toggleDrawer('right', true)}
                    sx={{
                        color: "var(--font-color-primary)"
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