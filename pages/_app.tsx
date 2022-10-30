import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from '../components/layout';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <div className="p-10 mx-auto max-w-6xl">
          <Component {...pageProps} />
        </div>
      </Layout>
    </QueryClientProvider>
  );
}
