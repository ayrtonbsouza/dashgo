import { UseDisclosureReturn, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { useContext, createContext, useEffect } from 'react';

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export const SidebarDrawerProvider: React.FC = ({ children }) => {
  const disclosure = useDisclosure();
  const router = useRouter();
  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);
  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
};

export const useSidebarDrawer = (): SidebarDrawerContextData =>
  useContext(SidebarDrawerContext);
