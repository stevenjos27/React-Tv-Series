import React, { Component } from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component {
  render() {
    return (
      <div>
        <p>Single Series - the show id will be {this.props.match.match.params.id}</p>
      </div>
    )
  }
}

export default SingleSeries;
