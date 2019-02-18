import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decrementAmount, incrementAmount } from '../modules/module';
import Counter from '../components/Counter';

const mapStateToProps = (state: any) => ({
  num: state.reducer.num
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ decrementAmount, incrementAmount }, dispatch);

const Container = ({ num, incrementAmount, decrementAmount }: any) => (
  <>
    <div>Counter</div>
    <Counter num={num} />
    <button onClick={() => incrementAmount(1)}>+</button>
    <button onClick={() => decrementAmount(1)}>-</button>
  </>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
