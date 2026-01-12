import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
        errorInfo: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error, errorInfo: null };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-red-50 p-6">
                    <div className="max-w-3xl w-full bg-white rounded-xl shadow-2xl overflow-hidden border border-red-100">
                        <div className="bg-red-500 px-6 py-4">
                            <h1 className="text-white font-bold text-xl">Something went wrong</h1>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-700 font-medium mb-4">
                                An error occurred while rendering the application.
                            </p>

                            {this.state.error && (
                                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
                                    <p className="text-red-400 font-mono text-sm font-bold mb-2">
                                        {this.state.error.toString()}
                                    </p>
                                    <pre className="text-gray-300 font-mono text-xs leading-relaxed">
                                        {this.state.error.stack}
                                    </pre>
                                </div>
                            )}

                            {this.state.errorInfo && (
                                <div className="bg-gray-100 rounded-lg p-4 overflow-x-auto">
                                    <p className="text-gray-500 font-mono text-xs whitespace-pre-wrap">
                                        {this.state.errorInfo.componentStack}
                                    </p>
                                </div>
                            )}

                            <button
                                onClick={() => window.location.reload()}
                                className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                            >
                                Reload Page
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
