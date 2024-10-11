import { ClerkProvider } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react";

export function Provider({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <NextUIProvider>{children}</NextUIProvider>
        </ClerkProvider>
    );
}
