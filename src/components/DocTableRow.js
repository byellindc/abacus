import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  updatingLine,
  addLine
} from '../redux/actions';

class DocTableRow extends Component {
  // docId = () => {
  //   console.log(this.props);
  //   return this.props.match.params.docId;
  // }

  handleChange = (e) => {
    if (e.target.value !== this.props.line.input) {
      this.props.line.input = e.target.value;
      this.lineChanged();
    }
  }

  handleKeydown = (e) => {
    if (e.which === 13) {
      // detect 'enter' keypress
      addLine();
    } else if (e.which === 27) {
      // detect 'esc' keypress
      // trigger blur
    }
  }

  lineChanged() {
    this.props.updateLine(this.props.line); 
  }

  render() {
    const {line} = this.props;
    return (
      <tr className="doc-table-row">
        <td className="row-input">
          <input type="text" 
            defaultValue={line.input} 
            onBlur={this.handleChange} 
            onKeyDown={this.handleKeydown} />
        </td>
        <td className="row-result">{line.result}</td>
      </tr>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateLine: (line) => {
      dispatch(updatingLine(line))
    },
    addLine: () => {
      dispatch(addLine())
    }
  }
}

export default connect(null, mapDispatchToProps)(DocTableRow);