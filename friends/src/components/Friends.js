import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';

class Friends extends React.Component {
  componentDidMount() {
 
  }

  render() {
    return (
      <div className="friends">
       Testing Friends
      </div>
    );
  }
}

const mapStateToProps = ({ friends, fetchingData }) => ({
  friends,
  fetchingData
});

export default 
  connect(
    mapStateToProps,
    { getData }
  )(Friends);
