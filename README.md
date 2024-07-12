# app-codegen-demo

This is a demo app using Plasmic's codegen capabilities.
This demo app is ideal for complex apps that want a clear separation between presentation and business logic.
The presentation is all handled in Plasmic Studio, while business logic is handled in code (here).

## Development

First, run the development server:

```bash
npm install
npm run dev
```

View the app at http://localhost:3000

To update the Plasmic generated code in [components](./components) and [pages](./pages):

```bash
npm run plasmic:sync # one-time sync
npm run plasmic:watch # continuous sync
```

## Plasmic project

View the Plasmic project at https://studio.plasmic.app/projects/buzXQZLRHRnzx37qjmm2UD

Note the Plasmic project can can only be viewed when the server is running at http://localhost:3000.
This is because the server includes the Plasmic app host page: http://localhost:3000/plasmic-host
The app host is required to open the project in Plasmic Studio:

App hosting is required to connect the business logic code to Plasmic Studio.
Learn more about app hosting here: https://docs.plasmic.app/learn/app-hosting/

## Code Overview

### Business logic

The business logic code is primarily in [AppContextProvider](./src/AppContextProvider.tsx).
It is a React context whose data is also registered to Plasmic, allowing Plasmic Studio users to use the data and actions.

## Learn More

With Plasmic, you can enable non-developers on your team to publish pages and content into your website or app.

To learn more about Plasmic, take a look at the following resources:

- [Plasmic Website](https://www.plasmic.app/)
- [Plasmic Documentation](https://docs.plasmic.app/learn/)
- [Plasmic Community Forum](https://forum.plasmic.app/)
