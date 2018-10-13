import * as React from 'react';
import AdventureContext from '../AdventureContext';

export interface ITextualStateProps {
	children?: React.ReactNode | React.ReactNodeArray,
	nextElement: JSX.Element
}

export const TextualState: React.SFC<ITextualStateProps> =
	({ nextElement, children }: ITextualStateProps) => {
		/* tslint:disable:jsx-no-lambda */
		return (
			<AdventureContext.Consumer>
				{context =>
					<a href="#" onClick={(event: React.FormEvent<HTMLAnchorElement>) => {
							event.preventDefault();
							context.next(nextElement);
						}}>
						{children}
					</a>
				}
			</AdventureContext.Consumer>
		);
		/* tslint:enable:jsx-no-lambda */
	};

export default TextualState;
