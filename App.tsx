import { Fragment } from 'react';
import { StatusBar } from 'react-native';
import { colors } from './colors';
import { Home } from './src/screens/Home';

export default function App() {
	return (
		<Fragment>
			<StatusBar 
				barStyle="light-content"
				backgroundColor={colors.gray700}
				translucent
			/>
			
			<Home />
		</Fragment>
	);
}
