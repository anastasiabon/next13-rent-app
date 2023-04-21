'use client';

import { FC } from "react";
import Image from "next/image";

const Avatar: FC = () => {
    return (
        <div>
            <Image
                className="rounded-full"
                height="30"
                width="30"
                src="/images/placeholder.jpeg"
                alt="Avatar"
            />
        </div>
    );
};

export default Avatar;
