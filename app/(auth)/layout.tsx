"use client";

import { usePathname } from "next/navigation";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const path = usePathname();

  return (
    <div className="bg-black text-gray-800 flex flex-col items-center justify-center min-h-screen w-screen p-4">
      <div className="flex border border-gray-300 rounded-lg shadow-lg w-full max-w-7xl h-[700px] bg-opacity-20 bg-white">
        {(path === "/signup" || path === "/signin") && (
          <div className="w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col justify-center items-center p-8 rounded-l-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-20 bg-white animate-pulse"></div>
            <h1 className="text-5xl font-extrabold text-white mb-6 relative z-10 tracking-wide">Embark on Your Journey</h1>
            <p className="text-2xl text-white text-center relative z-10 leading-relaxed max-w-md">
              {path === "/signup"
                ? "Unlock a world of possibilities! Join our vibrant community and start crafting your unique story today."
                : "Welcome back, adventurer! Your next chapter awaits. Let's continue where you left off."}
            </p>
            <div className="mt-8 relative z-10">
              <span className="text-yellow-300 text-lg font-semibold animate-bounce inline-block">
                {path === "/signup" ? "→ Create Your Legacy" : "→ Resume Your Quest"}
              </span>
            </div>
          </div>
        )}
        <div className="w-1/2 p-8">{children}</div>
      </div>
    </div>
  );
};

export default layout;
