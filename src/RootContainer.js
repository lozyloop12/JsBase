import React, { PureComponent } from 'react';
import { View } from 'react-native';
import Main from './navigators';
import { connect } from 'react-redux'
import { i18n } from './config'
import { I18nextProvider } from 'react-i18next'
// import { Loading } from './components/elements'

class RootContainer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <View style={{ flex: 1 }}>
          <I18nextProvider i18n={i18n}>
            <Main />
            {/* {this.props.fetching && <Loading />} */}
          </I18nextProvider>
        </View>
      </>
    );
  }
}

// const mapStateToProps = state => ({
//   fetching: state.loading.fetching
// })
// export default connect(mapStateToProps, null)(RootContainer)

export default RootContainer;