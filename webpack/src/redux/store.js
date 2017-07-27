import configureStore from './configureStore';

const store = configureStore();
const unsubList = [];

const Connect = function (props) {
	let stateOld = store.getState();
	let getVal = function (total, currentValue) {
		return total[currentValue] !== undefined ? total[currentValue] : total.get(currentValue);
	}

	return function (callback) {
		let oldValue = props.split('.').reduce(getVal, stateOld);

		let unsubscribe = store.subscribe(function () {
			oldValue = props.split('.').reduce(getVal, stateOld);
			let state = store.getState();
			let value = props.split('.').reduce(getVal, state);
			let _stateOld = stateOld;
			stateOld = state;
			if (value !== oldValue) {
				callback(value, oldValue, state, _stateOld);
			}
		});
		unsubList.push(unsubscribe);

		callback(oldValue, oldValue, stateOld, stateOld);
		return unsubscribe;
	}
}

Connect.unsubscribe = function () {
	unsubList.forEach(item => item());
}

const getState = store.getState;

export {
	store,
	Connect,
	getState,
	store as Store,
	getState as GetState
};

window.store = store;