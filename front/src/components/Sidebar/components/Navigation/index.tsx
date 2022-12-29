import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Grid, Typography, Chip } from '@mui/material';

import ChatsStore from '../../../../store/chats';
import { palette } from '../../../../style/palette';

import Flexbox from '../../../Flexbox';

import { STYLES } from './constants';
import { stringAvatar } from './helpers';

interface Props {
  store: ChatsStore;
}

const Navigation = ({ store: { data } }: Props): JSX.Element => {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(0);

  useEffect(() => {
    const chatId = parseInt(location.pathname.split('/')[1], 10);

    if (chatId !== activeId) {
      setActiveId(chatId);
    }
  });

  return (
    <>
      {data.map(({ id, title, unReadCount }) => {
        const isEqual = activeId === id;

        return (
          <Grid
            container
            key={id}
            onClick={() => navigate(`/${id}`)}
            sx={{
              ...STYLES,
              backgroundColor: isEqual ? palette.primary.main : 'transparent',
            }}
          >
            <Grid item xs={3}>
              <Avatar {...stringAvatar(title)} />
            </Grid>
            <Grid item xs={9}>
              <Flexbox>
                <Typography variant="h6" sx={{ color: isEqual ? palette.common.white : 'inherit' }}>
                  {title}
                </Typography>
              </Flexbox>
              <Flexbox>
                <Typography>last message</Typography>
                {unReadCount ? <Chip color="primary" size="small" label={unReadCount} /> : null}
              </Flexbox>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};

export default Navigation;
