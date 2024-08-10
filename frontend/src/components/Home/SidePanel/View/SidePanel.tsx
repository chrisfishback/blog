import {AppBar, Drawer, IconButton, Toolbar, Typography} from "@mui/material";
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
        <h1>Drawer Content</h1>
    )

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    width: '100%',
                    display: { xs: 'block', sm: 'none' }
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="log list side panel button"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
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
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawerContent}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawerContent}
            </Drawer>
        </>
    )
}

export default SidePanel