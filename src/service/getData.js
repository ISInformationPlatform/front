import 'whatwg-fetch';

export const signIn = async (username, password) => {
  let response = await fetch(`/sign/in`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  });

  let json = await response.json();

  return json.data;
};

export const signUp = async (username, password) => {
  await fetch(`/sign/up`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  });

  return true;
};

export const getPostList = async (sectionId, opt = {}) => {
  let pageNum = opt.page_num || 1;
  let tagFilter = opt.tag_filter || 0;

  let res = await fetch(`/forum/${sectionId}/post?page_num=${pageNum}&tag_filter=${tagFilter}`);
  let json = await res.json();

  return json.data;
};

export const getPost = async (sectionId, postId) => {
  let res = await fetch(`/forum/${sectionId}/post/${postId}`);
  let json = await res.json();

  return {
    post_title: json.data.post_title,
    post_content: json.data.post_content
  };
};

export const submitPost = async (sectionId, title, author, content, tag) => {
  await fetch(`/forum/${sectionId}/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      post_title: title,
      post_author: author,
      post_tag: tag,
      post_content: content
    })
  });

  return true;
};

export const getComment = async (sectionId, postId) => {
  let res = await fetch(`/forum/${sectionId}/post/${postId}/comment`);
  let json = await res.json();

  return json.data;
};

export const submitComment = async (sectionId, postId, author, content) => {
  await fetch(`/forum/${sectionId}/post/${postId}/comment`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      comment_author: author,
      comment_content: content
    })
  });

  return true;
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

export const getNoticeList = async (sectionId, pageNum = 1) => {
  let res = await fetch(`/notification/${sectionId}/notice?page_num=${pageNum}`);
  let json = await res.json();

  return {
    notice_list: json.data.notice_list,
    total_page_num: json.data.total_page_num
  };
};

export const getNotice = async (sectionId, noticeId) => {
  let res = await fetch(`/notification/${sectionId}/notice/${noticeId}`);
  let json = await res.json();

  return json.data;
};
export const submitNotice = async (sectionId, title, author, content) => {
  await fetch(`/notification/${sectionId}/notice`, {
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

  return true;
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
