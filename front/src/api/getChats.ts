import { Chat } from '../store/types';

import { CommonChatDTO, Method, Route } from './types';

class GetChats implements Route {
  method: Method = 'GET';

  getUrl(id?: number): string {
    return `/chats/user/${id}`;
  }

  getData(data: CommonChatDTO[]): Chat[] {
    return data;
  }
}

export default new GetChats();
