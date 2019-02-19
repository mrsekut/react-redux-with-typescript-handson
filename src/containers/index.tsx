import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { decrementAmount, incrementAmount } from '../modules/module';
import Counter from '../components/Counter';
import Button from '../components/Button';
import { ReduxState, ReduxAction } from '../store';

type ContaienrProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = ({ reducer }: ReduxState) => ({
  ...reducer
});

const mapDispatchToProps = (dispatch: Dispatch<ReduxAction>) =>
  bindActionCreators({ incrementAmount, decrementAmount }, dispatch);

const Container: React.FC<ContaienrProps> = ({
  num,
  incrementAmount,
  decrementAmount
}) => (
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
