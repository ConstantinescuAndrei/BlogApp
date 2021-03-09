export const signIn = (user) => {
    return {
        type: 'SIGN_IN',
        payload: user
    }
}

export const logout = () => {
    return {
        type: "LOGOUT"
    }
}

export const saveBlogs = (blogs) => {
    return {
        type: "GET_BLOGS",
        payload: blogs
    }
}

export const getBlog = (id) => {
    return {
        type: "GET_BLOG",
        payload: id
    }
}

export const deleteBlogById = (id) => {
    return {
        type: "DELETE_BLOG_BY_ID",
        payload: id
    }
}