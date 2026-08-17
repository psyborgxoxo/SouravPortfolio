import React, { ErrorInfo, ReactNode } from 'react';

const serializeError = (error: unknown): string => {
  if (error instanceof Error) {
    return `${error.message}\n${error.stack || ''}`;
  }
  return JSON.stringify(error, null, 2);
};

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log the error to an error reporting service here
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 border border-red-500 rounded">
          <h2 className="text-red-500 font-bold">Something went wrong.</h2>
          <pre className="mt-2 text-sm whitespace-pre-wrap break-words">
            {serializeError(this.state.error)}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}