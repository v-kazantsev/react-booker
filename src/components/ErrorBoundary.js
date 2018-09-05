import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  }

  componentDidCatch() {
    // Display fallback UI
    this.setState({ hasError: true });    
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>
    }
    return this.props.children
  }
};

export default ErrorBoundary