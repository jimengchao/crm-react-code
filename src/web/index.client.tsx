import * as React from 'react'
import * as ReactDom from 'react-dom'
import App from '@pages/App';

ReactDom.hydrate(<App />, document.getElementById('app'))

if (( module as any ).hot) {
    ( module as any ).hot.accept();
}