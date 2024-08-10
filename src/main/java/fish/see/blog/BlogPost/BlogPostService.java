package fish.see.blog.BlogPost;

import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class BlogPostService {

    private final BlogPostRepository blogPostRepository;

    public BlogPostService(BlogPostRepository blogPostRepository) {
        this.blogPostRepository = blogPostRepository;
    }

    public BlogPost createBlogPost(BlogPost blogPost) {
        return blogPostRepository.save(blogPost);
    }

    public List<BlogPost> getAllBlogPosts() { return blogPostRepository.findAll(); }
}
