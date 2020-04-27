import { connect } from 'react-redux';
import actions from 'store/app/actions';
import Nav from './Nav';

const mapStateToProps = (state) => ({
  theme: state.app.theme,
});

const mapDispatchToProps = (dispatch) => ({
  setTheme: (theme) => dispatch(actions.setTheme({ theme })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
