import { useSession } from 'next-auth/react';

const Protected = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session || !session.user) {
    return <div>Access Denied</div>;
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome {session.user.name}</p>
    </div>
  );
};

export default Protected;
