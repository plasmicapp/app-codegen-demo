import * as React from 'react';
import {PlasmicCanvasHost, registerComponent, registerGlobalContext} from '@plasmicapp/react-web/lib/host';
import {AppContextProvider} from "@/src/AppContextProvider";
import {Calendar} from "@/src/Calendar";

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// registerComponent(...)

registerGlobalContext(AppContextProvider, {
  name: "AppContextProvider",
  props: {
    directusUrl: "string",
    initialCurrentUser: "object",
  },
  providesData: true,
  globalActions: {
    login: { parameters: [{ name: "credential", type: "string" }] },
    logout: { parameters: [] },
    updateUser: { parameters: [{ name: "id", type: "string" }, { name: "data", type: "object" }]},
  },
  importPath: "./src/AppContextProvider",
});

registerComponent(Calendar,{
  name: "Calendar",
  props: {
    value: {
      type: "dateString",
      defaultValue: "2024-01-01",
    },
    onChange: {
      type: "eventHandler",
      argTypes: [
        {
          name: "event",
          type: "object",
        },
      ],
    },
  },
  states: {
    value: {
      type: "writable",
      variableType: "dateString",
      onChangeProp: "onChange",
      valueProp: "value",
    },
  },
  importPath: "./src/Calendar",
});
