import {AppBar, Button, Drawer, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import useSidePanelModel from "../Model/useSidePanelModel.ts";

function SidePanel() {
    const {
        mobileOpen,
        drawerWidth,
        handleDrawerClose,
        handleDrawerTransitionEnd,
        handleDrawerToggle
    } = useSidePanelModel();

    const drawerContent = (
        <>
            <Typography variant={'h4'} sx={{paddingY: 4}}>C Fish</Typography>
            <Button sx={{paddingX: 1, color: 'black'}}>
                <Typography variant={'h6'}>Title for this Blog Post</Typography>
            </Button>
        </>
    )

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    width: '100%',
                    display: {xs: 'block', sm: 'none'},
                    backgroundColor: '#1E1656'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="log list side panel button"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        C FISH
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true
                }}
                sx={{
                    display: {xs: 'block', sm: 'none'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                }}
            >
                {drawerContent}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: {xs: 'none', sm: 'block'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                }}
                open
            >
                {drawerContent}
            </Drawer>
        </>
    )
}

export default SidePanel