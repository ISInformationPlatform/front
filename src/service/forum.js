import 'whatwg-fetch';

export const getPostList = async (sectionId, opt = {}) => {
  let pageNum = opt.page_num || 1;
  let tagFilter = opt.tag_filter || 0;
  let personPost = opt.person_post || null;
  let sticky = opt.sticky || false;

  var url = `/forum/${sectionId}/post?` +
    `page_num=${pageNum}&` +
    `tag_filter=${tagFilter}&` +
    `sticky=${sticky}`;

  if (personPost) {
    url += `&person_post=${personPost}`;
  }

  let res = await fetch(url);
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

export const submitPost = async (sectionId, title, author, content, tag, opt = {}) => {
  let sticky = opt.sticky || false;

  let res = await fetch(`/forum/${sectionId}/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      post_title: title,
      post_author: author,
      post_tag: tag,
      post_content: content,
      sticky: sticky
    })
  });

  let json = await res.json();

  if (res.status !== 200) {
    throw json;
  }

  return true;
};

export const getComment = async (sectionId, postId) => {
  let res = await fetch(`/forum/${sectionId}/post/${postId}/comment`);
  let json = await res.json();

  return json.data;
};

export const submitComment = async (sectionId, postId, author, content) => {
  let res = await fetch(`/forum/${sectionId}/post/${postId}/comment`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      comment_author: author,
      comment_content: content
    })
  });

  let json = await res.json();

  if (res.status !== 200) {
    throw json;
  }

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
