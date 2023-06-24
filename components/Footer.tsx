import React from "react"
import Image from "next/image";
const Footer = () => {
    return (
        <footer className="flex-start footer">
            <div className="flex flex-col gap-5 w-full">
                <div className="flex items-start flex-col">
                    <Image src="/logo-purple.svg"
                        width={115}
                        height={38}
                        alt="Flexibble"/>
                        <p className="text text-sm font-normal mt-5 max-w-xs">
                            Flexibble is the community for Students to share their notes
                        </p>
                </div>
                <div className="flex w-fit h-fit text-xs">
                    Made by Youssef Karim
                </div>
                <div className="flexBetween footer_copyright">
                    <p>
                    @ 2023 Flexibble. All rights reserved
                    </p>
                    <p className="text-gray">
                        <span className="text-black font-semibold">
                        10,214
                        </span> Notes shared
                    </p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;