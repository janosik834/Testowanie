import * as React from 'react';
import { connect } from "react-redux";
import { searchFiles } from './actions';

class FilesFilterr extends React.Component {
  render() {
    return (
      <div className="ui icon fluid input">
        <input
        type="text"
        placeholder="Search..."
        value={this.props.filesSearch}
        onChange={this.handleSearchChange}
        />
        <i className="search icon" />
      </div>
    );
  }

  handleSearchChange = e => {
    this.props.searchFiles(e.currentTarget.value);
    };

}


const mapStateToProps = state => {
  return {
    filesSearch: state.filesSearch
  };
};

const mapDispatchToProps = { searchFiles };

const FilesFilterrContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilesFilterr);
export default FilesFilterrContainer;
