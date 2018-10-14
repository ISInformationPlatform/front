var postTitle = window.localStorage.post_title || '';
var postContent = window.localStorage.post_content || '';

var localStorage = {
  get post_title () {
    return postTitle;
  },
  set post_title (data) {
    window.localStorage.post_title = data;
  },
  get post_content () {
    return postContent;
  },
  set post_content (data) {
    window.localStorage.post_content = data;
  }
};

export default localStorage;
