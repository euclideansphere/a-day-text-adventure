import * as React from 'react';

export interface IAdventureContext { 
	next: (nextElement: JSX.Element) => void;
}

export const defaultContext = {
	next: () => (
		<div>
			GAME OVER.
			<pre>
				DEBUG: There is no parent provider and this is the default context.
			</pre>
		</div>
	)
};

const AdventureContext = React.createContext<IAdventureContext>(defaultContext);

export default AdventureContext;
