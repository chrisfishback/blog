CREATE TABLE blog_post (
    id SERIAL PRIMARY KEY NOT NULL,
    title TEXT,
    content TEXT,
    date_created TIMESTAMP NOT NULL
);