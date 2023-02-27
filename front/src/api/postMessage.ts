import { PostRequestResult } from 'src/store/chat/types';

import { formatDate } from 'src/utils';
import { Method, Route } from './types';

interface ResponseDTO {
  id: number;
  createdAt: string;
}

class PostMessage implements Route {
  method: Method = 'POST';

  getUrl(): string {
    return '/messages';
  }

  getData({ id, createdAt }: ResponseDTO): PostRequestResult {
    return { id, createdAt: formatDate(createdAt) };
  }
}

export default new PostMessage();
