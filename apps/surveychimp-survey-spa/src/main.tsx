import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

import App from './app/app';

Sentry.init({
  dsn: "https://df28e03207cb49f2ac5a98ab3f067dec@o4504157583572992.ingest.sentry.io/4504158571593728",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
<StrictMode><BrowserRouter><App /></BrowserRouter></StrictMode>
);
