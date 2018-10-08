import 'whatwg-fetch';

import { signIn, signUp, isLogIn, logOut } from '@/service/sign';
import { getPostList, getPost, submitPost, getComment, submitComment, updateComment } from '@/service/forum';
import { getNoticeList, getNotice, submitNotice, updateNotice } from '@/service/notice';
import { getPersonDetail, updatePersonDetail } from '@/service/person';

export {
  signIn,
  signUp,
  isLogIn,
  logOut,

  getPostList,
  getPost,
  submitPost,
  getComment,
  submitComment,
  updateComment,

  getNoticeList,
  getNotice,
  submitNotice,
  updateNotice,

  getPersonDetail,
  updatePersonDetail
};
