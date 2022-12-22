import { createContext, ReactNode, useContext, useState } from "react";

type BackingContextProps = {
  totalBacked: number;
  totalBackers: number;
  backingProgress?: number;
  addBacking?: (amount: number) => void;
  thanksModal?: {
    isOpen: boolean;
    close: () => void;
  };
};

const backingContextDefault: BackingContextProps = {
  totalBacked: 89914,
  totalBackers: 5007,
  backingProgress: (89914 / 100000) * 100,
  thanksModal: {
    isOpen: false,
    close: () => {},
  },
};

const BackingContext = createContext<BackingContextProps>(
  backingContextDefault
);

export const BackingContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [backing, setBacking] = useState(backingContextDefault);
  const [thanksModalIsOpen, setThanksModalIsOpen] = useState(false);
  const addBacking = (amount: number) => {
    setBacking((old) => ({
      totalBacked: old.totalBacked + amount,
      totalBackers: old.totalBackers + 1,
    }));
    setThanksModalIsOpen(true);
  };
  const closeThanksModal = () => {
    setThanksModalIsOpen(false);
  };
  const backingProgress = (backing.totalBacked / 100000) * 100;

  return (
    <BackingContext.Provider
      value={{
        ...backing,
        backingProgress,
        addBacking,
        thanksModal: { isOpen: thanksModalIsOpen, close: closeThanksModal },
      }}
    >
      {children}
    </BackingContext.Provider>
  );
};

export const useBackingContext = () => {
  return useContext(BackingContext);
};
