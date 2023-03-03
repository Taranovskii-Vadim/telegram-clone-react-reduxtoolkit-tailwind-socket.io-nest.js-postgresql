import { formatDate } from 'src/utils';
import { Message } from 'src/store/chat/types';

import { CommonMessageDTO, Method, Route } from './types';

class GetMessages implements Route {
  method: Method = 'GET';

  getUrl(id?: string): string {
    return `/messages/${id}`;
  }

  getData(data: CommonMessageDTO[]): Message[] {
    return data.map(({ id, text, createdAt, chat, replied, sender }) => ({
      id,
      text,
      chatId: chat.id,
      createdAt: formatDate(createdAt),
      sender: { id: sender.id, fullname: `${sender.lastname} ${sender.name}` },
      replied: replied && {
        id: replied.id,
        text: replied.text,
        fullname: `${replied.sender.lastname} ${replied.sender.name}`,
      },
    }));
  }
}

export default new GetMessages();
