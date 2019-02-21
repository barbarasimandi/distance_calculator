import React from 'react';

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        showRefresh: false
    };

    static getDerivedStateFromError() {
        return {
            hasError: true,
            showRefresh: true
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.hasError && prevState.hasError) {
            this.setState({
                hasError: false,
                showRefresh: false
            })
        }
    }

    componentDidCatch(error) {
        console.log(error);
    }

    render() {
        if (this.state.hasError) {
            return(
                <div>
                    <h2 className={"text-danger"}>Please provide a different location</h2>
                </div>
            );
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;