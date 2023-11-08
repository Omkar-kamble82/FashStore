import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { useState } from "react";
import { useClerk } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from './Loading';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Sidebar() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

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

        const [loading, setLoading] = useState(false);

        const { signOut } = useClerk();
        const navigate = useNavigate()
    
        const Logout = async () => {
            setLoading(true);
            try {
                await signOut();
                setLoading(false);
                navigate("/") 
                toast.success("Successfully logged out")
            } catch(e) {
                toast.error("Something went wrong")
                setLoading(false);
            }
        }

    const list = (anchor: Anchor) => (
        <Box className="flex h-[100vh] justify-between flex-col" sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
            <List> 
                <a href="/home"><ListItem>
                    <div className='flex items-center cursor-pointer justify-center gap-3'>
                        <img width={35} height={35} src="/sidebar/home.svg" alt="home_icon" />
                        <h1 className='font-semibold text-[20px] mt-1 text-[#e7ab3c]'>Home</h1>
                    </div>
                </ListItem></a>
                <Divider className="bg-[#e7ab3c]" />
                <a href="/shop"><ListItem>
                    <div className='flex items-center cursor-pointer justify-center gap-3'>
                        <img width={35} height={35} src="/sidebar/store.svg" alt="store_icon" />
                        <h1 className='font-semibold text-[20px] mt-1 text-[#e7ab3c]'>Shop</h1>
                    </div>
                </ListItem></a>
                <Divider className="bg-[#e7ab3c]" />
                <a href="/cart"><ListItem>
                    <div className='flex items-center cursor-pointer justify-center gap-3'>
                        <img width={35} height={35} src="/Navbar/cart.svg" alt="contact_icon" />
                        <h1 className='font-semibold text-[20px] mt-1 text-[#e7ab3c]'>Cart</h1>
                    </div>
                </ListItem></a>
                <Divider className="bg-[#e7ab3c]" />
                <a href="/about"><ListItem>
                    <div className='flex items-center cursor-pointer justify-center gap-3'>
                        <img width={35} height={35} src="/sidebar/about.svg" alt="About_icon" />
                        <h1 className='font-semibold text-[20px] mt-1 text-[#e7ab3c]'>About Us</h1>
                    </div>
                </ListItem></a>
                <Divider className="bg-[#e7ab3c]" />
                <a href="/contact"><ListItem>
                    <div className='flex items-center cursor-pointer justify-center gap-3'>
                        <img width={35} height={35} src="/sidebar/contact.svg" alt="contact_icon" />
                        <h1 className='font-semibold text-[20px] mt-1 text-[#e7ab3c]'>Contact Us</h1>
                    </div>
                </ListItem></a>
                <Divider className="bg-[#e7ab3c]" />
            </List>
            <List> 
                <Divider className="bg-[#ff4a4a]" />
                <ListItem onClick={() => Logout()}>
                    <div className='flex items-center cursor-pointer justify-center gap-3'>
                        <img width={35} height={35} src="/sidebar/Logout.svg" alt="logout_icon" />
                        <h1 className='font-semibold text-[20px] mt-1 text-[#ff4a4a]'>Logout</h1>
                    </div>
                </ListItem>
            </List>
        </Box>
    );

    return (
    <div className='!p-0'>
        {loading && <Loading params="Logging Out" />}
        {(['right'] as const).map((anchor) => (
            <React.Fragment key={anchor}>
            <Button className='!p-0 !m-0' onClick={toggleDrawer(anchor, true)}><img src="/Navbar/menu.svg" className="cursor-pointer" alt="left_arrow"/></Button>
            <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
            >
                {list(anchor)}
            </Drawer>
            </React.Fragment>
        ))}
        </div>
    );
}