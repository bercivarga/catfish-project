import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function useLoggedIn() {
	const navigate = useNavigate();
	
	useEffect(() => {
		if (!localStorage.getItem('catuserdata')) {
			console.log('shit')
			navigate('/signup')
		}
	}, [navigate])
}