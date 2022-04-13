import { Link } from 'react-router-dom';
import './styles.css';

export default function CurrentCandidate(props) {
	const {candidate, onSwipe} = props;

	
	if (!candidate) {
		return (
			<div className="out-of-options">
				<h2>Sorry, you're out of options 😔</h2>
				<Link to="/matches">To your matches</Link>
			</div>
		)
	}
	
	return (
		<div className="candidate-container">
			<button
				type="button"
				className="swipe-btn left-swipe" 
				onClick={() => onSwipe(candidate.id)}
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
				className="swipe-btn right-swipe"
				onClick={() => onSwipe(candidate.id)}
			 >😍</button>
		</div>
	)
}