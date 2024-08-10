import {useState} from "react";

function useSidePanelModel() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const drawerWidth = 240;

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    return {
        mobileOpen,
        isClosing,
        drawerWidth,
        handleDrawerClose,
        handleDrawerTransitionEnd,
        handleDrawerToggle
    };
}

export default useSidePanelModel;