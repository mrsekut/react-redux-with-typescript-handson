import * as React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ReduxState } from '../store';
import { decrementAmount, incrementAmount } from '../modules/module';
import Counter from '../components/Counter';

const mapStateToProps = (state: ReduxState) => ({
  num: state.reducer.num
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ decrementAmount, incrementAmount }, dispatch);

@(connect(
  mapStateToProps,
  mapDispatchToProps
) as any)
export default class Container extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <>
        <div>カウンター</div>
        <Counter num={this.props.num} />
        <button onClick={() => this.props.incrementAmount(1)}>+</button>
        <button onClick={() => this.props.decrementAmount(1)}>-</button>
      </>
    );
  }
}
