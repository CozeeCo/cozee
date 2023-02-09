import type { Liff } from "@line/liff";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const useInitLiff = () => {
    const [liffObject, setLiffObject] = useState<Liff | null>(null);
    const [liffError, setLiffError] = useState<string | null>(null);

    // Execute liff.init() when the app is initialized
    useEffect(() => {
        // to avoid `window is not defined` error
        import("@line/liff")
            .then((liff) => liff.default)
            .then((liff) => {
                console.log("LIFF init...");
                liff
                    .init({
                        liffId: process.env.NEXT_PUBLIC_LIFF_ID!,
                    })
                    .then(() => {
                        console.log("LIFF init succeeded.");
                        setLiffObject(liff);
                    })
                    .catch((error: Error) => {
                        console.log("LIFF init failed.");
                        setLiffError(error.toString());
                    });
            });
    }, []);

    return { liffObject, liffError };
}

type LiffContextType = {
    liff: Liff | null;
    liffError: string | null;
}

const liffContext = createContext<LiffContextType | undefined>(undefined);

interface ILiffProviderProps {
    children: ReactNode
}

export const LiffProvider = ({ children }: ILiffProviderProps): JSX.Element => {
    const { liffObject, liffError } = useInitLiff();
    const value = {
        liff: liffObject,
        liffError
    }
    return (
        <liffContext.Provider value={value}>
            {children}
        </liffContext.Provider>
    )
}

export const useLiff = () => {
    const context = useContext(liffContext);
    if (context === undefined) {
        throw new Error('useLiff must be used within a LiffProvider');
    }
    return context;
}
