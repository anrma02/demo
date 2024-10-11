import { ClerkProvider } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react";
import Header from "./_components/Header";

export function Provider({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <NextUIProvider>
                <Header />
                {children}
            </NextUIProvider>
        </ClerkProvider>
    );
}
