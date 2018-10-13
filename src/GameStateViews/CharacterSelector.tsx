import * as React from 'react';
import AdventureContext, { IAdventureContext } from '../AdventureContext';
import './CharacterSelector.css'
import Hungry from './Hungry';


export const CharacterSelector: React.SFC = () => {
	const nextElement = Hungry;

	const render = (context: IAdventureContext) => {
		const onClick = (event: React.FormEvent<HTMLDivElement>) => {
			event.preventDefault();
			context.next(nextElement);
		};

		return (
			<div className="character-selector">
				<div className="character-selector-option" onClick={onClick}>
					<span className="character-selector-name">Matilda</span>
				</div>
				<div className="character-selector-option" onClick={onClick}>
					<span className="character-selector-name">
						the bartender<br/>
						<small>(it's your day off)</small>
					</span>
				</div>
				<div className="character-selector-option" onClick={onClick}>
					<span className="character-selector-name">a buff guy</span>
				</div>
			</div>
		);
	};

	return (
		<AdventureContext.Consumer>
			{context =>
				render(context)
			}
		</AdventureContext.Consumer>
	);
}

export default CharacterSelector;