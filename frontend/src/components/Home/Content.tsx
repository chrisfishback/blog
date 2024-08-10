import useSidePanelModel from "./SidePanel/Model/useSidePanelModel.ts";
import {Box, Typography} from "@mui/material";

function Content() {
    const { drawerWidth } = useSidePanelModel()
    const title = 'Title for this Blog Post'
    const content = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    return (
        <Box
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                p: 3,
                backgroundColor: '#d3d3d3',
                borderRadius: 3,
            }}
        >
            <Typography variant={'h2'}>{title}</Typography>
            <Typography>{content}</Typography>
        </Box>
    )
}

export default Content