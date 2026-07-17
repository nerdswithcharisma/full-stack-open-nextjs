import Link from 'next/link';
import { User } from '@/db/schema';
import { getUsers } from '../services/users';

const Users = async () => {
  const users = await getUsers();

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user: User) => (
          <li key={user.username}>
            <Link href={`/users/${encodeURIComponent(user.username)}`}>
              {user.username}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
