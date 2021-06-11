import React, { PureComponent } from 'react';
import { View } from 'react-native';
import Main from './navigators';
import { connect } from 'react-redux'
// import { Loading } from './components/elements'

class RootContainer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <View style={{ flex: 1 }}>
          <Main />
          {/* {this.props.fetching && <Loading />} */}
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