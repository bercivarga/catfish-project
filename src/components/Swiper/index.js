import {useState} from 'react';
import CurrentCandidate from './CurrentCandidate/';
import useAppContext from '../../context';
import users from '../../db/users';
import useLoggedIn from '../../hooks/useLoggedIn'
import './styles.css';

export default function Swiper() {
	useLoggedIn();
	
	const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);
	const [gotAMatch, setGotAMatch] = useState(false);
	
	const { matches, setMatches } = useAppContext();
	
	function handleSwipeClick(candidateId) {
		const matchedCandidate = users.find(user => user.id === candidateId);
		
		if (matchedCandidate.match) {
			setGotAMatch(true);
			setMatches([...matches, matchedCandidate]);
		} else {
			setGotAMatch(false);
		}
		console.log(currentCandidateIndex)

		setCurrentCandidateIndex(currentCandidateIndex + 1);
	}
	
	return (
		<div className="swiper-container">
			<marquee>There are {users.length - currentCandidateIndex} singles in your area!</marquee>
			{ gotAMatch && currentCandidateIndex < users.length && <h4>You got a match you handsome devil!</h4> }
			<CurrentCandidate
				candidate={users[currentCandidateIndex]}
				onSwipe={handleSwipeClick}
			/>
		</div>
	)
}
