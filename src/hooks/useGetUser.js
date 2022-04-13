import users from '../db/users';

export default function useGetUser(userId) {
	return users.find(user => String(user.id) === userId);
}
