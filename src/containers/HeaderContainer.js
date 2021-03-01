import { connect } from 'react-redux';
import Header from '../components/Header';
import { changeRoute } from '../actions/RouterAction';

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, { changeRoute })(Header);
