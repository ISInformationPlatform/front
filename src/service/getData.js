import 'whatwg-fetch';

import { signIn, signUp } from '@/service/sign';
import { getPostList, getPost, submitPost, getComment, submitComment, updateComment } from '@/service/forum';
import { getNoticeList, getNotice, submitNotice, updateNotice } from '@/service/notice';

export {
  signIn,
  signUp,
  getPostList,
  getPost,
  submitPost,
  getComment,
  submitComment,
  updateComment,
  getNoticeList,
  getNotice,
  submitNotice,
  updateNotice
};
