import { useParams } from 'react-router-dom';
import useGetUser from '../../../hooks/useGetUser';

export default function MatchProfile() {
	const { matchId } = useParams();

	const match = useGetUser(matchId); 
	
	if (!match) {
		return <h3>This user doesn't exist, try again with a different user.</h3>
	}
	
	return <h2>{ match.name }</h2>;
}