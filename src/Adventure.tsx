import * as React from 'react';
import AdventureContext from './AdventureContext';
import InitialState from './GameStateViews/StateIndex';


export interface IAdventureState {
	adventureState: JSX.Element;
}


export default class Adventure extends React.PureComponent<{}, IAdventureState> {
	state = {
		adventureState: InitialState
	};

	nextAdventureState = (nextElement: JSX.Element) => {
		this.setState({
			adventureState: nextElement
		});
	}

	render() {
		const { adventureState } = this.state;

		const providerContextValue = { 
			next: this.nextAdventureState
		};

		return (
			<AdventureContext.Provider value={providerContextValue}>
				{adventureState}
			</AdventureContext.Provider>
		);
	}
}