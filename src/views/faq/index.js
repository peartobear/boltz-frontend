import { connect } from 'react-redux';
import Faq from './faq';
import { nav } from '../../action';

const mapDispatchToProps = dispatch => ({
  goHome: () => dispatch(nav.goHome()),
  goRefund: () => dispatch(nav.goRefund()),
  goFaq: () => dispatch(nav.goFaq()),
});

export default connect(
  () => {},
  mapDispatchToProps
)(Faq);
