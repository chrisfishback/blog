import useSidePanelModel from '../SidePanel/Model/useSidePanelModel.ts';
import {Box, Typography} from '@mui/material';
import {BlogPost} from '../Helpers/BlogPostType.ts';
import {useEffect, useState} from "react";
import {getBlogPosts} from "../Client/BlogPost.ts";

function Content() {
    const {drawerWidth} = useSidePanelModel()
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

    // const blogPost: BlogPost = {
    //     title: 'Title for this Blog Post',
    //     content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    // }

    useEffect(() => {
        getBlogPosts().then((blogPosts) => setBlogPosts(blogPosts))
    }, []);

    return (
        <Box
            sx={{
                ml: {sm: `${drawerWidth}px`},
                p: 3,
                backgroundColor: '#d3d3d3',
                borderRadius: 3,
            }}
        >
            {blogPosts.map((blogPost, index) => (
                <Box key={index}>
                    <Typography variant={'h2'}>{blogPost.title}</Typography>
                    <Typography>{blogPost.content}</Typography>
                </Box>
            ))}
        </Box>
    )
}

export default Content