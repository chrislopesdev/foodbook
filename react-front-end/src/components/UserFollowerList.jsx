import { Box, Typography } from '@mui/material';
import UserFollowListItem from './UserFollowListItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

const UserFollowerList = (props) => {
  const { id, following } = props;
  const [results, setResults] = useState([]);

  // array of users that follow the logged in user
  let allFollowers =
    results.length > 0 &&
    results.map((follower) => {
      return <UserFollowListItem key={follower.id} {...follower} />;
    });

  // get the array of following user objects (incl. name, avatar)
  useEffect(() => {
    axios.get(`http://localhost:3001/api/users/${id}/followers`).then((res) => {
      setResults([...res.data]);
    });
  }, [id, following]);

  // display block for the user icons for all followers of the logged in user
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}>
      <Typography variant='h5' color='primary' gutterBottom>
        Followers ({results.length}):
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          columnGap: '1rem',
          textAlign: 'left',
        }}>
        {allFollowers}
      </Box>
    </Box>
  );
};

export default UserFollowerList;
