import * as React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { useLocalStore, observer} from 'mobx-react-lite';
import router from '../routers/index'
import { MyContext } from '../store'
import './App.scss'

const { Suspense } = React
function App(props){

	const store = useLocalStore(() => ({
		token: localStorage.getItem('token') || '',
		userInfo: {},
		setToken(token = null) {
			store.token = token;
			window.localStorage.setItem('token', token)
		},
		setUserInfo(userInfo = {}){
			store.userInfo = userInfo;
		},
		loginOut(){
			store.token = '';
			window.localStorage.removeItem('token');
		}
	}));

	const lodaing = <div className="ui-loading ui-loading-primary full"><s className="ui-loading-icon"></s></div>
	return (
		<Suspense fallback={lodaing}>
		 	<MyContext.Provider value={store}>
			 	{store.token || 'wu'}
	    		<BrowserRouter basename="/">{router('token')}</BrowserRouter>
		 	</MyContext.Provider>
		</Suspense>
	);
}

export default App