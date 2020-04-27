import { connect } from 'react-redux';
import actions from 'store/story/actions';
import App from './App';

const mapStateToProps = (state) => ({
  stories: state.stories,
  page: state.page,
  storyIds: state.storyIds,
  isFetching: state.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStoriesFirstPage: () => dispatch(actions.fetchStoryIDs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
