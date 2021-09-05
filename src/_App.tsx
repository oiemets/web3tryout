import { Header } from './components';

declare global {
	interface Window {
		ethereum: any;
	}
}

export const App = () => {
	const getAccount = async () => {
		const accounts = await window.ethereum.request({
			method: 'eth_requestAccounts',
		});
		console.log(accounts[0]);
	};

	const onClick = () => getAccount();
	return (
		<div>
			<button onClick={onClick}>GET ACCOUNT</button>
			<Header />
		</div>
	);
};
