## Bug Description

### Expected Behavior
Headers set in the middleware should be available when the page is loaded. This functionality works correctly when running Next.js locally using `pnpm run start`.
E.g. when visting `/test` the page should show `middleware header: test, from params: test2`

### Current Behavior
Headers set in the middleware are not available when the page is loaded on Vercel. This issue did not occur previously on Vercel but has recently surfaced.

When visiting `https://missing-headers-reproduction.vercel.app/test2` the page shows `middleware header: null, from params: test`

Please note that this only occurs when patching the headers function in [`patches/next_consider_headers_static.patch`](patches/next_consider_headers_static.patch)