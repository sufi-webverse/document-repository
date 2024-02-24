import LoadingBar from "@/components/LoadingBar";
import { createContext, useContext, useState } from "react";

type ContextType = {
  loadingProgress: number;
  setLoadingPercentage: () => void;
};
const AsyncProgressContext = createContext<ContextType | null>(null);

export const useAsyncProgressContext = () => {
  return useContext(AsyncProgressContext);
};

const AsyncProgressProvider = ({ children }: any) => {
  const [loadingProgress, setLoadingPercentage] = useState<number>(0);

  return (
    <>
      <AsyncProgressContext.Provider
        value={{ loadingProgress, setLoadingPercentage } as ContextType}
      >
        <LoadingBar /> 
        {children}
      </AsyncProgressContext.Provider>
    </>
  );
};
export default AsyncProgressProvider;
