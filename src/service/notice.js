import 'whatwg-fetch';

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
