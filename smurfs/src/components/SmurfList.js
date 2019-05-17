import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";

class smurfList extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    return (
      <div>
        {this.props.smurfs.map(smurf => (
          <div key={smurf.id}>
            <h1>{smurf.name}</h1>
            <h2>{smurf.age}</h2>
            <h3>{smurf.height}</h3>
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs
    };
};

export default connect(mapStateToProps, { fetchSmurfs })(smurfList); 
