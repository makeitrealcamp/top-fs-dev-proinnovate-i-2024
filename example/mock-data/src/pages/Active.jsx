import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { verifyAccount } from '../services/auth';

export const ActivePage = () => {
  const { token } = useParams();

  useEffect(() => {
    // Verify account
    verifyAccount(token)
      .then((data) => {
        const { token, profile } = data;
        console.log(data);
        // Redirect to home page
      })
      .catch((error) => console.error(error));
  }, [token]);

  return <div>loading...</div>;
};

export default ActivePage;
