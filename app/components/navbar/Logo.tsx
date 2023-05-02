"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import LogoImage from '../../../public/images/logo.png'

const Logo = () => {
    const router = useRouter();
    return(
        <Image
            onClick={() => router.push('/')}
            src={LogoImage}
            alt=""
            height="100"
            width="100"
            className="hidden md:block cursor-pointer"
        />
    )
}

export default Logo;