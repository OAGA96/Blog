import React from 'react';

const BlogContext = React.createContext();

const BlogProvider = () => {
    return (
        <BlogContext>
            {children}
        </BlogContext>
    )
}