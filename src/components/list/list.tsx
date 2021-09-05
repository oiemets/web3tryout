import styled from 'styled-components';

type ListProps = {
	data: string[];
};

const Ul = styled.ul`
	padding: 15px;
	list-style-type: '→ ';
	list-style-position: inside;
	font: 22px 'Helvetica';
`;

const Li = styled.li`
	color: #363636;
`;

export const List: React.FC<ListProps> = ({ data }) => {
	return (
		<Ul>
			{data.map((a, i) => (
				<Li key={i}>{a}</Li>
			))}
		</Ul>
	);
};
