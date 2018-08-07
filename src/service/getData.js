import 'whatwg-fetch';

export const getPostList = async (sectionId) => {
  let res = await fetch(`/forum/${sectionId}/post`);
  let json = await res.json();

  return json.data;
};

export const getPost = async (sectionId, postId) => {
  let res = await fetch(`/forum/${sectionId}/post/${postId}`);
  let json = await res.json();

  return json.data;
};

export const submitPost = async (sectionId, title, author, content) => {
  fetch(`/forum/${sectionId}/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      post_title: title,
      post_author: author,
      tag: null,
      post_content: content
    })
  });
};

export const getComment = async (sectionId, postId) => {
  let res = await fetch(`/forum/${sectionId}/post/${postId}/comment`);
  let json = await res.json();

  return json.data;
};

export const submitComment = async (sectionId, postId, author, content) => {
  fetch(`/forum/${sectionId}/post/${postId}/comment`, {
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

export const updateComment = async (sectionId, postId, commentId, author, content) => {
  fetch(`/forum/${sectionId}/post/${postId}/comment/${commentId}`, {
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

export const getNoticeList = async (sectionId) => {
  let res = await fetch(`/notification/${sectionId}/notice`);
  let json = await res.json();

  return json.data;
};

export const getNotice = async (sectionId, noticeId) => {
  let res = await fetch(`/notification/${sectionId}/notice/${noticeId}`);
  let json = await res.json();

  return json.data;
};
export const submitNotice = async (sectionId, title, author, content) => {
  fetch(`/notification/${sectionId}/notice`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      notice_title: title,
      notice_author: author,
      notice_content: content
    })
  });
};

export const updateNotice = async (sectionId, noticeId, title, content) => {
  fetch(`/notification/${sectionId}/notice/${noticeId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      notice_title: title,
      notice_content: content
    })
  });
};
