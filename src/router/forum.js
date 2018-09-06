import Forum from '@/page/Forum';
import PostDetail from '@/page/PostDetail';
import PostPublish from '@/page/PostPublish';

export default [
  {
    path: '/forum/:forumId',
    components: {
      Content: Forum
    }
  },
  {
    path: '/forum/:forumId/post/:postId',
    components: {
      Content: PostDetail
    }
  },
  {
    path: '/forum/:forumId/post',
    components: {
      Content: PostPublish
    }
  }
];
