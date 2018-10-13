import * as React from 'react';

export interface IDebugViewProps {
	initiallyOpen?: boolean;
}

export interface IDebugViewState {
	open: boolean;
}

export default class DebugView extends React.PureComponent<IDebugViewProps, IDebugViewState> {
	constructor(props: IDebugViewProps) {
		super(props);

		this.state = {
			open: !!props.initiallyOpen
		};
	}

	render() {
		return (
			<div className="collapsible-panel">
				<dl>
					<dt>NODE_ENV</dt>
					<dd>{process.env.NODE_ENV}</dd>
				</dl>
			</div>
		);
	}
}
