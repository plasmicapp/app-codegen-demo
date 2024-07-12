import {DataProvider, GlobalActionDict, GlobalActionsProvider} from "@plasmicapp/react-web/lib/host";
import React, {useContext, useMemo, useState} from "react";
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

interface AppContextData {
  currentUser?: User;
  users?: User[];
}

interface AppContextActions extends GlobalActionDict {
  login: (credential: string) => void;
  logout: () => void;
  updateUserNotes: (arg: { id: string, notes?: string }) => void;
}

const AppContext = React.createContext<{
  data: AppContextData,
  actions: AppContextActions,
} | undefined>(undefined);

export function useAppContext() {
  return useContext(AppContext)!
}

// Users will be able to set these props in Studio.
interface AppContextProps {
  // You might use this to override the auth URL to a test or local URL.
  directusUrl?: string;

  // Use this to preview the current user.
  initialCurrentUser?: User;
}

export function AppContextProvider({ children, directusUrl = "https://plasmic-test.directus.app", initialCurrentUser }: React.PropsWithChildren<AppContextProps>) {
  const [currentUser, setCurrentUser] = useState<User | undefined>(initialCurrentUser);

  const users = useSWR<{ data: User[] }>(`${directusUrl}/items/User`);
  const updateUserNotes = useSWRMutation(`${directusUrl}/items/User`,
    (url, { arg }: { arg: { id: string, notes?: string } }) =>
      fetch(`${url}/${arg.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          notes: arg.notes,
        })
      })
        .then(resp => resp.json())
        .catch(console.error)
  );

  const data: AppContextData = {
    currentUser,
    users: users.data?.data ?? undefined,
  }

  const actions: AppContextActions = useMemo(() => ({
    login: (credential: string) => {
      const user = users.data?.data[0];
      console.log("login",  user);
      setCurrentUser(user);
    },
    logout: () => {
      console.log("logout");
      setCurrentUser(undefined);
    },
    updateUserNotes: updateUserNotes.trigger,
  }), [users.data, updateUserNotes.trigger]);

  return (
    <AppContext.Provider value={{ data, actions }}>
      <GlobalActionsProvider contextName="AppContext" actions={actions}>
        <DataProvider name="app" data={data}>
          {children}
        </DataProvider>
      </GlobalActionsProvider>
    </AppContext.Provider>
  )
}

interface User {
  id: string
  name: string
  photo_url?: string
  notes?: string
}
