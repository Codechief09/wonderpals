import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// Computational Components
class AuthRedirect extends React.Component {
  render() {
    const { location, token } = this.props;
    const { pathname } = location;
    let destinationRoute = null;

    if (pathname === "/login" || pathname === "/signup" || pathname === "/" || pathname === "/dashboard") {
      if (token) {
        destinationRoute = "/dashboard";
      } else if (!token) {
        destinationRoute = "/";
      }
    }

    return (
      <div>
        {destinationRoute ? <Redirect to={destinationRoute}/> : undefined}
      </div>
    );
  }
}

// Vinicio - this component can either get the token as props OR
// connect to the store

const mapStateToProps = state => ({
  token: state.token
});

export default connect(mapStateToProps, null)(AuthRedirect);