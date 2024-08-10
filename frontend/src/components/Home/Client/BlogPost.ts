import axios from "axios";
import {BlogPost} from "../Helpers/BlogPostType.ts";

export async function getBlogPosts(): Promise<BlogPost[]> {
    try {
        const response = await axios.get<BlogPost[]>('/api/v1/blog-post');
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
    }
}