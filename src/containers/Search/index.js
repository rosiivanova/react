import React, {Component} from 'react';
import { connect } from 'react-redux';
import { searchValueChange } from './actions'

class Search extends Component {

  handleChange(e) {
    const { dispatch } = this.props
    dispatch(searchValueChange(e.target.value))
  }

  render() {
    const { search, nodeTitle } = this.props.data
    return (
      <div className="search">
        <input
          type="text"
          value={ search }
          onChange={e => this.handleChange(e)}
        />
        <div className="nodeTitle">{ nodeTitle }</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.SearchReducer
});

export default connect(mapStateToProps)(Search)