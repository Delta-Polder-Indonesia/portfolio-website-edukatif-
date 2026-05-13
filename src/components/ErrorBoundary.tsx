/**
 * ============================================
 * 📁 src/components/ErrorBoundary.tsx
 * ============================================
 * 
 * ERROR BOUNDARY COMPONENT
 * 
 * Komponen untuk menangkap JavaScript errors di child
 * components dan menampilkan fallback UI yang user-friendly.
 * 
 * MENGAPA PERLU:
 * - Mencegah crash seluruh aplikasi
 * - Memberikan feedback yang baik ke user
 * - Logging error untuk debugging
 * 
 * CARA MENGGUNAKAN:
 * <ErrorBoundary>
 *   <App />
 * </ErrorBoundary>
 */

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state sehingga render berikutnya akan menampilkan fallback UI
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Bisa log error ke service seperti Sentry
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="min-h-screen bg-dark-950 flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-red-500/10 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-2">
              Oops! Terjadi Kesalahan
            </h1>
            
            <p className="text-dark-400 mb-6">
              Maaf, terjadi kesalahan yang tidak terduga. Silakan refresh halaman atau coba lagi nanti.
            </p>

            <div className="space-y-3">
              <button
                onClick={this.handleReload}
                className="w-full px-6 py-3 rounded-xl bg-primary-500 text-white font-semibold hover:bg-primary-400 transition-colors"
              >
                Refresh Halaman
              </button>
              
              <a
                href="/"
                className="block w-full px-6 py-3 rounded-xl border border-dark-700 text-dark-300 font-semibold hover:bg-dark-800 transition-colors"
              >
                Kembali ke Beranda
              </a>
            </div>

            {/* Error details untuk development */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left p-4 rounded-xl bg-dark-900 border border-dark-800">
                <summary className="text-dark-400 cursor-pointer text-sm">
                  Technical Details (Dev Only)
                </summary>
                <pre className="mt-2 text-xs text-red-400 overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
