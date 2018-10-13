import * as React from 'react';
import './App.css';

import Adventure from './Adventure';


export const App: React.SFC = () => {
	return (
		<>
			<div className="adventure-content-wrapper">
				<div className="adventure-content">
					<Adventure />
				</div>
			</div>
			<footer>
				All rights reserved. Illustrated by Savanna Brummel. Developed by Austin Hartline.<br/>
				{process.env.NODE_ENV !== 'production' &&
					<>NODE_ENV: {process.env.NODE_ENV}</>
				}
			</footer>
		</>
	);
}

export default App;
