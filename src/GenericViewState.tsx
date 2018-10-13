import * as React from 'react';
import AdventureContext, { IAdventureContext } from './AdventureContext';


export interface IGenericViewStateProps {
	render: (context: IAdventureContext) => JSX.Element;
}

export const GenericViewState: React.SFC<IGenericViewStateProps> =
	({ render }: IGenericViewStateProps) => {
		return (
			<AdventureContext.Consumer>
				{context => render(context)}
			</AdventureContext.Consumer>
		);
	};

export default GenericViewState;