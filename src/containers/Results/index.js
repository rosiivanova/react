import React, {Component} from 'react';
import { connect } from 'react-redux';

class Search extends Component {
  render() {
    const body = this.props.data;
    return (
      <div className="results" dangerouslySetInnerHTML={{__html: body}} />
    )
  }
}

const mapStateToProps = state => ({
  data: state.SearchReducer.body
});

export default connect(mapStateToProps)(Search)