import styled from 'styled-components';

const Container = styled.div`
	border: 1px solid #808080;
	background-color: #545454;
	border-radius: 16px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-around;
	align-items: center;
	margin: 0 auto;
	padding: 10px;
`;

const Button = styled.button`
	background-color: #44c767;
	border-radius: 20px;
	border: 1px solid #18ab29;
	display: inline-block;
	cursor: pointer;
	color: #ffffff;
	font-family: Arial;
	font-size: 17px;
	padding: 12px 31px;
	text-decoration: none;
	text-shadow: 0px 1px 0px #2f6627;

	&:hover {
		background-color: #5cbf2a;
	}

	&:active {
		position: relative;
		top: 1px;
	}
`;

const H1 = styled.h1`
	margin: 5px;
	padding: 0;
	color: white;
	font-family: 'Raleway', sans-serif;
	text-transform: uppercase;
`;

const Span = styled.span`
	color: #eb4034;
	font-size: 50px;
`;

export const Header: React.FC = () => {
	return (
		<Container>
			<H1>
				web<Span>3</Span>tryout
			</H1>
			<Button>get</Button>
		</Container>
	);
};
