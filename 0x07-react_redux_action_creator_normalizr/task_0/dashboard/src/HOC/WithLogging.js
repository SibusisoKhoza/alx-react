import React from 'react';

const WithLogging = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Component ${this.getDisplayName()} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${this.getDisplayName()} is going to unmount`);
    }

    getDisplayName() {
      return WrappedComponent.displayName || WrappedComponent.name || 'Component';
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
}

export default WithLogging;
