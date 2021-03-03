const blogReducer = (state = {
    db: false,
    blogs: []
}, action) => {
    switch (action.type) {
        case "GET_BLOGS": {
            state.db = true;
            state.blogs = Object.assign([], action.payload);
            
            return state;
        }
        case "GET_BLOG": {
            if(!state.db) {
                return state;
            }
            else {
                return state.blogs.filter((blog) => {
                    if(blog._id == action.payload) {
                        return blog
                    }
                })
            }
        }
        default: {
            state.db = false;
            return state;
        }
    }
}

export default blogReducer