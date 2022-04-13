import {useState} from 'react';
import users from '../../db/users';
import './styles.css';

export default function Swiper() {
	const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);
	
	return (
		<div className="swiper-container">
			<p>There are {users.length} singles in your area!</p>
			<CurrentCandidate
				candidate={users[currentCandidateIndex]}
				onSwipe={() => setCurrentCandidateIndex(currentCandidateIndex + 1)}
			/>
		</div>
	)
}

function CurrentCandidate(props) {
	const {candidate, onSwipe} = props;
	
	if (!candidate) {
		return (
			<div className="out-of-options">
				<h2>Sorry, you're out of options 😔</h2>
			</div>
		)
	}
	
	return (
		<div className="candidate-container">
			<button
				type="button"
				className="left-swipe" 
				onClick={onSwipe}
			>🤮</button>
			<div className="candidate-info-container">
				<div className="swiper-image-wrapper">
					<img src={candidate.picture} alt={candidate.name} />
				</div>
				<h3>Hi! I'm {candidate.name}</h3>
				<p>About me: {candidate.description}</p>
				<p>My hobbies are: {candidate.hobbies}</p>
				<p>Age: {candidate.age}</p>
			</div>
			<button
				type="button"
				className="right-swipe"
				 onClick={onSwipe}
			 >😍</button>
		</div>
	)
}