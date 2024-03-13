export const API_ROOT = import.meta.env.VITE_API_ROOT;

if (!API_ROOT) {
    console.warn("No API_ROOT environment variable set");
}

export const Routes = {
    // Account
    registerAccount() {
        return `${API_ROOT}/account/register/`;
    },
    loginAccount() {
        return `${API_ROOT}/account/login/`;
    },
    requestAccountVerification() {
        return `${API_ROOT}/account/requestverification/`;
    },
    resetAccountPassword() {
        return `${API_ROOT}/account/passwordreset/`;
    },
    editAccountAvatar() {
        return `${API_ROOT}/account/avatar/edit/`;
    },
    // Admin
    loginAdmin() {
        return `${API_ROOT}/admin/login/`;
    },
    // Posts
    getAllPosts(page) {
        return `${API_ROOT}/posts/all/${page ? `?page=${page}` : ""}`;
    },
    getPost(postId) {
        return `${API_ROOT}/posts/${postId}/`;
    },
    createPost() {
        return `${API_ROOT}/posts/create/`;
    },
    editPost(postId) {
        return `${API_ROOT}/posts/edit/${postId}/`;
    },
    deletePost(postId) {
        return `${API_ROOT}/posts/delete/${postId}/`;
    },
    likePost(postId) {
        return `${API_ROOT}/posts/${postId}/like/`;
    },
    unlikePost(postId) {
        return `${API_ROOT}/posts/${postId}/unlike/`;
    },
    // Comments
    getPostComments(postId) {
        return `${API_ROOT}/comments/${postId}/comments/`;
    },
    createPostComment(postId) {
        return `${API_ROOT}/comments/${postId}/create/`;
    },
    likeComment(commentId) {
        return `${API_ROOT}/comments/${commentId}/like/`;
    },
    unlikeComment(commentId) {
        return `${API_ROOT}/comments/${commentId}/unlike/`;
    }
};
