import Image from "next/image";
import profile from "../../../../public/assets/profile.svg";
import russia from "../../../../public/assets/russia.svg";
import { NAVBAR } from "./string";
export default function Navbar() {
    return (
        <nav className="bg-primary flex justify-around h-24 items-center">
            <div>
                <span className="text-2xl font-montserrat font-semibold">
                    {NAVBAR.text}
                </span>
            </div>
            <div className="flex gap-10 font-montserrat text-lg">
                <span>{NAVBAR.about_us}</span>
                <span>{NAVBAR.actors}</span>
                <span>{NAVBAR.our_project}</span>
                <div>
                    <Image src={profile} width={30} height={40} alt="profile" />
                </div>
                <div className="border-2 rounded-sm">
                    <Image
                        src={russia}
                        width={32}
                        height={21.33}
                        alt="profile"
                        className="mt-1 p-1"
                    />
                </div>
            </div>
        </nav>
    );
}
