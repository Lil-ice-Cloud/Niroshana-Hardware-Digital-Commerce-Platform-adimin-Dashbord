import Link from "next/link";
import Sidebar from "@/componants/ui/Sidebar/Sidebar";

export const navItem = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
    { name: 'Pricing', link: '/pricing' },
];

export default function Navbar () {
    return (
      <>
        <nav className="
        fixed
        top-0
        left-0
        right-0
        z-50
        bg-linear-to-r
        to-gray-400
        from-gray-900
        backdrop-blur-md
        border-b
        border-border
        transition-colors
        duration-300
        ">
            <div className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            ">
                <div className="
                flex
                justify-between
                items-center
                h-16
                ">
                    <div >
                        <h1 className="
                        text-2xl
                        text-white
                        font-black
                        font-heading
                        ">
                            Dashboard of Niroshana Hardware
                        </h1>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="
                    hidden
                    md:flex
                    ">
                        <div className="
                        flex
                        items-baseline
                        space-x-8
                        ">
                            {navItem.map((item) => (
                                <Link
                                    key={item.link}
                                    href={item.link}
                                    className="
                                    hover:bg-red-700
                                    p-1
                                    rounded-lg
                                    text-white
                                    font-medium
                                    ">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    {/* Admin Logging */}
                    <div className="
                        hidden
                        md:flex
                        items-baseline
                        space-x-2
                    ">
                        <button className="
                        bg-linear-to-r
                        from-red-500
                        to-red-900
                        hover:from-red-900
                        hover:to-red-500
                        text-white
                        transition-colors
                        font-medium
                        rounded-full
                        px-6
                        py-3
                        cursor-pointer
                        ">
                            Admin Logging
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="
                         fixed
                         top-0
                         left-0
                         right-0
                         border-b
                         border-border
                         transition-colors
                         duration-300
                            ">
                    <Sidebar/>
            </div>
        </nav>
     </>
    );
}
