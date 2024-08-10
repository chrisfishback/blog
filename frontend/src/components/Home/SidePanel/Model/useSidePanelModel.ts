import {useState} from "react";

export const drawerWidth = 240;

export function useSidePanelModel() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

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