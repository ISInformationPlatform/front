import NoticePublish from '@/page/NoticePublish';
import NoticeDetail from '@/page/NoticeDetail';

export default [
  {
    path: '/notification/post',
    components: {
      Content: NoticePublish
    }
  },
  {
    path: '/notification/:sectionId/notice/:noticeId',
    components: {
      Content: NoticeDetail
    }
  }
];
