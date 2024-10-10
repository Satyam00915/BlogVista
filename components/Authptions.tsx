import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useRouter } from "next/router";

const Authptions = () => {
  return (
    <div className="flex justify-around gap-5">
      <div className="text-lg">
        <Link
          href="/signin"
          className="bg-transparent text-white font-semibold text-xl"
        >
          LogIn
        </Link>
      </div>
      <div className="text-lg">
        <Link
          className="bg-transparemt text-white font-semibold text-xl"
          href="/signup"
        >
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Authptions;
