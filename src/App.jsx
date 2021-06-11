import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import Root from './RootContainer';
import { store } from './store';
import { RootSiblingParent } from 'react-native-root-siblings'

class App extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                {/* <Provider store={store}> */}
                {/* <RootSiblingParent> */}
                <Root />
                {/* </RootSiblingParent> */}
                {/* </Provider> */}
            </>
        );
    }
}

export default App;