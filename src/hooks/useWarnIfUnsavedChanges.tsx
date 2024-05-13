import { useEffect } from "react";

const useWarnIfUnsavedChanges = (isDirty: boolean) => {
    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            if (isDirty) {
                event.preventDefault();
                (event as any).returnValue = "";
                return "You have unsaved changes! Are you sure you want to leave?";
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [isDirty]);
};

export default useWarnIfUnsavedChanges;
