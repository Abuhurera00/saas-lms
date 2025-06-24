'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";
import { useState } from "react";

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'My Journey', href: '/my-journey' },
]

const NavItems = () => {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <nav className="max-md:hidden flex items-center gap-4">
                {navItems.map(({ label, href }) => (
                    <Link
                        href={href}
                        key={label}
                        className={cn(pathname === href && 'text-black font-semibold')}
                    >
                        {label}
                    </Link>
                ))}
            </nav>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger>
                    <MenuIcon className="max-md:block hidden cursor-pointer" />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>
                            <Image
                                src="/images/logo.svg"
                                alt="logo"
                                width={46}
                                height={44}
                            />
                        </SheetTitle>
                        <SheetDescription>
                            <li className="flex flex-col gap-4 mt-10">
                                {navItems.map(({ label, href }) => (
                                    <Link
                                        href={href}
                                        key={label}
                                        className={cn(pathname === href && 'text-black font-semibold')}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </li>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default NavItems