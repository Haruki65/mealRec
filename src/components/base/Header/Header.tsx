"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import GreenQuadButton from '@/components/ui/buttun/GreenQuadButtun';
import Link from 'next/link';
import { useAtom } from 'jotai';
import { userAtom } from '@/states/store/authAtom';

const pages = ['利用規約', 'ニュース', '私たちについて'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [user, setUser] = useAtom(userAtom);

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white' }} >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link href="/">
                        <Typography
                            variant="h4"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'serif',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'green',
                                textDecoration: 'none',
                            }}
                        >
                            CookMeet
                        </Typography>
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: 'black' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Link href="/">
                        <Typography
                            variant="h4"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'serif',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'green',
                                textDecoration: 'none',
                            }}
                        >
                            CookMeet
                        </Typography>
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, columnGap: { xs: null, md: 2 }, justifyContent: { xs: null, md: 'right' }, mr: { xs: null, md: 4 } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <div>
                        {user ? (<p></p>) : (
                            <Link href="/login">
                                <GreenQuadButton>ログイン</GreenQuadButton>
                            </ Link>
                        )}
                    </div>
                </Toolbar>
            </Container>
        </AppBar >
    );
}

export default ResponsiveAppBar;