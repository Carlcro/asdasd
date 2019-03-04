/* eslint-disable no-underscore-dangle */
/**
 *
 * Profile
 *
 */

import React, { useEffect, useState } from 'react';
import { getUser } from '../../services/userService';
// import { FormattedMessage } from 'react-intl';
import ProfileHeader from './ProfileHeader';
/* eslint-disable react/prefer-stateless-function */
const Profile = props => {
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    // eslint-disable-next-line react/prop-types
    const userId = props.match.params.id;
    const { data } = await getUser(userId);
    setUser(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <ProfileHeader name={user.name} id={user._id} />
    </div>
  );
};
export default Profile;
