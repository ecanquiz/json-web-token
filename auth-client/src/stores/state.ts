import type { AuthStore } from '@/types/Store/AuthStore'

export default (): AuthStore => ({
  user: {},
  pending: false,
  error: '',
  //accessToken: ''
});
