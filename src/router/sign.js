import SignIn from '@/page/SignIn';
import SignUp from '@/page/SignUp';

export default [
  {
    path: '/sign/in',
    components: {
      Content: SignIn
    }
  },
  {
    path: '/sign/up',
    components: {
      Content: SignUp
    }
  }
];
