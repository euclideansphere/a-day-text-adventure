import * as React from 'react';
import AdventureContext from '../AdventureContext';
import CharacterSelector from './CharacterSelector';

/* tslint:disable:jsx-no-lambda */

export const FinalState = (
	<div>GAME OVER.</div>
);


export const InitialState = (
	<AdventureContext.Consumer>
		{context =>
			<>
				<p>
					you awake to the sun shining through the window. you get out of bed and look in the mirror.
				</p>
				<p>
					<a href="#" onClick={(event: React.FormEvent<HTMLAnchorElement>) => {
							event.preventDefault();
							context.next(<CharacterSelector />);
						}}>
						who are you?
					</a>
				</p>
			</>
		}
	</AdventureContext.Consumer>
);

export default InitialState;