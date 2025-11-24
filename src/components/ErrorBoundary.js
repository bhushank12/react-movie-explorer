import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error occured.......");
    console.error("Error Boundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <p className="error-boundary">Something went wrong. Please try again later.</p>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
