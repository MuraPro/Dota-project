import * as Sentry from '@sentry/react';

function init() {
    Sentry.init({
        dsn: 'https://c356590df35924c24cbc1945984233d6@o4506778815430656.ingest.sentry.io/4506811789672448',
        integrations: [
            Sentry.browserTracingIntegration(),
            Sentry.replayIntegration({
                maskAllText: false,
                blockAllMedia: false,
            }),
        ],
        // Performance Monitoring
        tracesSampleRate: 1.0, //  Capture 100% of the transactions
        // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
        tracePropagationTargets: [
            'localhost',
            /^https:\/\/yourserver\.io\/api/,
        ],
        // Session Replay
        replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
        replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    });
}

function log(error) {
    Sentry.captureException(error);
}

const logger = {
    init,
    log,
};

export default logger;
