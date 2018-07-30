import 'whatwg-fetch';

export const getPostList = async (forumId) => {
  let res = await fetch(`/forum/${forumId}/post`);
  let json = await res.json();

  return json.data;
};

export const getPost = async (forumId, postId) => {
  let res = await fetch(`/forum/${forumId}/post/${postId}`);
  let json = await res.json();

  return json.data;
};

export const uploadPost = async (title, author, content) => {
  fetch('/forum/1/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      post_title: title,
      post_author: author,
      post_content: content
    })
  });
};

export const getComment = async (forumId, postId) => {
  let res = await fetch(`/forum/${forumId}/post/${postId}/comment`);
  let json = await res.json();

  return json.data;
};

export const submitComment = async (author, content, postId) => {
  fetch(`/forum/1/post/${postId}/comment`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      comment_author: author,
      comment_content: content
    })
  });
};
