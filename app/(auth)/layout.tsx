"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const path = usePathname();

  return (
    <div className="bg-gradient-to-br from-gray-100 to-white text-gray-800 flex flex-col items-center justify-center min-h-screen w-screen p-4">
      <div className="flex border border-gray-300 rounded-lg shadow-lg w-full max-w-7xl h-[700px] bg-opacity-20 bg-white">
        {path === "/signup" && (
          <div className="w-1/2 relative flex justify-center items-center">
            <Image
              src="/secure.png"
              alt="Login illustration"
              width="800"
              height="700"
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="rounded-l-lg"
              priority
            />
          </div>
        )}
        <div className="w-1/2 p-8">{children}</div>
        {path === "/signin" && (
          <div className="w-1/2 relative flex justify-center items-center">
            <Image
              src="/login.png"
              alt="Login illustration"
              width="800"
              height="700"
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="rounded-l-lg"
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default layout;
