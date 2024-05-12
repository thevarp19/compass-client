import clsx from "clsx";
import { FC, PropsWithChildren, useEffect } from "react";

export interface DrawerProps extends PropsWithChildren {
    closeDrawer: () => void;
    isVisible?: boolean;
}

export const Drawer: FC<DrawerProps> = ({
    closeDrawer,
    isVisible,
    children,
}) => {
    return (
        isVisible && <DrawerUI closeDrawer={closeDrawer} children={children} />
    );
};

const DrawerUI: FC<DrawerProps> = ({ closeDrawer, children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    return (
        <div
            className={clsx(
                "fixed top-0 left-0 flex w-screen h-screen z-[60] justify-center items-center",
                "max-sm:flex-col max-sm:bottom-[50px] max-sm:top-auto"
            )}
        >
            <div
                className={clsx(
                    "flex w-full h-full backdrop-filter backdrop-blur-sm"
                    // "max-sm:bg-opacity-0"
                )}
                onClick={closeDrawer}
            />
            <div
                className={clsx(
                    "bg-white absolute w-[290px] h-[200px] sm:w-[486px] sm:h-[296px] shadow-lg rounded-[9px]"
                    // "max-sm:min-h-[50px]"
                )}
            >
                {children}
            </div>
        </div>
    );
};
