import * as React from 'react';
import GenericViewState from '../GenericViewState';
import * as bike from '../images/bike.png';

/* tslint:disable:jsx-no-lambda */

const end = <GenericViewState render={
	({next }) => 
		<div>
			you've reached the end of the game.&nbsp;
			<a href="javascript:location.reload()">start over?</a>
		</div>
} />;

const Slug = <GenericViewState render={
	({ next }) =>
		<div>
			a travellor on a motorcycle pulls up. he offers you a ride. do you take it?
			<button onClick={() => next(end)}>heck yeah</button>
			<button onClick={() => next(end)}>nah man, I don't accept rides from strangers.</button>
		</div>
} />;

const NoWheel = <GenericViewState render={
	({ next }) =>
		<div>
			you have Tim the Toolman Taylor's garage worth of tools, but you definitely don't have a spare bike wheel.
			<button onClick={() => next(Slug)}>accept nihilism</button>
		</div>
} />;

const BikeFix = <GenericViewState render={
	({ next }) =>
		<div>
			you got this. you can totally fix it.
			<button onClick={() => next(NoWheel)}>get tools from the garage</button>
			<button onClick={() => next(Slug)}>life is meaningless.</button>
		</div>
} />;

const Bike = <GenericViewState render={
	({ next }) =>
		<div>
			<img src={bike} className="" alt="bike" />
			you walk outside to find your bike has been tampered with. you can't ride it.
			<button onClick={() => next(BikeFix)}>attempt to fix?</button>
			<button onClick={() => next(Slug)}>mope in silence</button>
		</div>
} />;

const EatPBJ = <GenericViewState render={
	({ next }) => 
		<div>
			<pre>
				it's delicious.




				your friend patty mayonaise texts you - "Meet me at The Diner in 20 minutes."
			</pre>
			<button onClick={() => next(end)}>cool man.</button>
		</div>
}/>;

const MakePBJ = <GenericViewState render={
	({ next }) => 
		<div>
			<button onClick={() => next(EatPBJ)}>eat</button>
		</div>
}/>;

const MakeFood = <GenericViewState render={
	({ next }) => 
		<div>
			you only have ingredients for pb&amp;j. sucks man.
			<button onClick={() => next(MakePBJ)}>make pb&amp;j</button>
			<button onClick={() => next(end)}>go to diner</button>
		</div>
}/>;

const HungryOptions = <GenericViewState render={
	({ next }) => 
		<div>
			<button onClick={() => next(MakeFood)}>make food</button>
			<button onClick={() => next(Bike)}>meet friend at diner</button>
		</div>
}/>;

const WatchTV = <GenericViewState render={
	({ next }) => 
		<div onClick={() => next(end)}>
			are you sure?
		</div>
}/>;

export const Hungry = <GenericViewState render={
	({ next }) =>
		<>
			<p>are you hungry?</p>
			<button onClick={() => next(HungryOptions)}>yes</button>
			<button onClick={() => next(WatchTV)}>no</button>
		</>
} />;

export default Hungry;
