import { Link } from 'react-router-dom';
import useAppContext from '../../context';
import './styles.css';

export default function Matches() {
	const { matches } = useAppContext();
	
	if (!matches || matches.length === 0) {
		return (
			<img
				className="no-matches"
				src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F002%2F297%2F355%2Fcb3"
				alt="no matches?"
			/>
		)
	}
	
	return (
		<div>
			{matches.map(match => {
				return (
					<Link key={match.id} to={`/profile/${match.id}`}>
						<h4>{match.name}</h4>
					</Link>
				)
			})}
		</div>
	)
}