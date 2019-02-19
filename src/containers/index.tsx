import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decrementAmount, incrementAmount } from '../modules/module';
import Counter from '../components/Counter';
import Button from '../components/Button';

const mapStateToProps = ({ reducer }: any) => ({
  ...reducer
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ incrementAmount, decrementAmount }, dispatch);

const Container = ({ num, incrementAmount, decrementAmount }: any) => (
  <>
    <div>Counter</div>
    <Counter num={num} />
    <Button onClick={() => incrementAmount(1)}>+</Button>
    <Button onClick={() => decrementAmount(1)}>-</Button>
  </>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
