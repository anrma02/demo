"use client";
import {
    Button,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import logo from "../../public/logo.svg";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

const MenuList = [
    { name: "Home", path: "/" },
    { name: "Create Story", path: "/create_story" },
    { name: "Explore", path: "/explore" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
];

function Header() {
    const { user, isSignedIn } = useUser();

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar maxWidth="full">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Image src={logo} alt="logo" width={40} height={40} />
                    <h2 className="font-bold text-2xl text-primary ml-3">
                        NhíEX23 Story
                    </h2>
                </NavbarBrand>
                <NavbarContent justify="center" className="hidden sm:flex">
                    {MenuList.map((item, index) => (
                        <NavbarItem className="text-xl text-primary font-medium hover:underline ">
                            <Link href={item.path}>{item.name}</Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>

                <NavbarContent justify="end">
                    <Button color="primary">
                        {isSignedIn ? "Dashboard" : "Get Started"}
                    </Button>
                    <UserButton />
                </NavbarContent>
            </NavbarContent>

            {isMenuOpen && (
                <NavbarMenu>
                    {MenuList.map((item, index) => (
                        <NavbarItem className="text-xl text-primary font-medium hover:underline ">
                            <Link href={item.path}>{item.name}</Link>
                        </NavbarItem>
                    ))}
                </NavbarMenu>
            )}
        </Navbar>
    );
}

export default Header;
