import { HashRouter } from 'react-router-dom';
import HeaderContainer from './containers/HeaderContainer';
import { INDEX_PATH } from './constants/urlApi';
import { connect } from 'react-redux';
import { initRouter } from './actions/RouterAction';
import { useEffect } from 'react';
const paths = [INDEX_PATH];
function App({ initRouter }) {
  useEffect(() => {
    initRouter(paths);
  }, [initRouter]);
  return (
    <HashRouter basename="/">
      <div className="App">
        <HeaderContainer />
      </div>
    </HashRouter>
  );
}

const mapStateToProps = state => {
  return {
    ...state.app
  };
};

export default connect(mapStateToProps, { initRouter })(App);
