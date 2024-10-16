import Image from 'next/image'
import Link from 'next/link'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { Button } from '../ui/button'
import { useAuth } from '@clerk/nextjs'

function Navbar() {
    const { isSignedIn } = useAuth;
    return (
        <div className='py-4 px-8 flex justify-between items-center h-16'>
            <Link href="/" className='flex gap-3 items-center'>
                <Image src={"/hegergna-logo.png"} alt='logo' width={30} height={30} />
                <p className='text-lg font-bold italic'>HegergnaShop</p>
            </Link>
            <nav className='hidden md:flex gap-8 items-center'>
                <Link href="learn-more" className='text-gray-300 hover:text-gray-100 text-lg font-semibold'>Learn more</Link>
                <Link href="pricing" className='text-gray-300 hover:text-gray-100 text-lg font-semibold'>Pricing</Link>
                <Link href="blog" className='text-gray-300 hover:text-gray-100 text-lg font-semibold'>Blog</Link>
                <Link href="about-us" className='text-gray-300 hover:text-gray-100 text-lg font-semibold'>About us</Link>
            </nav>
            <div className='flex items-center gap-3'>
                {isSignedIn ? (
                    <>
                        <Button asChild>
                            <Link href={"/dashboard"}>Dashboard</Link>
                        </Button>
                    </>
                ) : (
                    <>
                        <Button asChild variant="secondary" >
                            <Link href={"/login"}>Login</Link>
                        </Button>
                        <Button asChild className="sm:block hidden">
                            <Link href={"/sign-up"}>Get Started</Link>
                        </Button>
                    </>
                )}

                <div className='sm:hidden flex items-center'>
                    <Sheet >
                        <SheetTrigger>
                            <Menu className="text-white" />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>
                            <div className='flex flex-col gap-8 items-center pt-5'>
                                <Link href="learn-more" className='text-gray-300 hover:text-gray-100 text-lg font-semibold'>Learn more</Link>
                                <Link href="pricing" className='text-gray-300 hover:text-gray-100 text-lg font-semibold'>Pricing</Link>
                                <Link href="blog" className='text-gray-300 hover:text-gray-100 text-lg font-semibold'>Blog</Link>
                                <Link href="about-us" className='text-gray-300 hover:text-gray-100 text-lg font-semibold'>About us</Link>
                                <div className='w-full flex justify-center gap-3'>
                                    {isSignedIn ? (
                                        <>
                                            <Button asChild>
                                                <Link href={"/dashboard"}>Dashboard</Link>
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button asChild variant="secondary" >
                                                <Link href={"/login"}>Login</Link>
                                            </Button>
                                            <Button asChild className="sm:block hidden">
                                                <Link href={"/sign-up"}>Get Started</Link>
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    )
}

export default Navbar