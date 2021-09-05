import { useEffect } from 'react';
import { useState } from 'react';
import { Header, List } from './components';
import Web3 from 'web3';

export const App = () => {
	useEffect(() => {
		loadData();
	}, []);
	const [accounts, setAccounts] = useState<string[]>();
	const loadData = async () => {
		const web3 = new Web3('http://localhost:7545');
		// const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
		const accounts = await web3.eth.getAccounts();
		// const network = await web3.eth.net.getNetworkType();

		setAccounts(accounts);
	};

	return (
		<>
			<Header />
			<List data={accounts ?? []} />
		</>
	);
};
