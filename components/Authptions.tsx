import { Button } from "@nextui-org/button"

const Authptions = () => {
  return (
    <div className="flex justify-around gap-5">
        <div className="text-lg">
          <Button
            className="bg-transparent text-white font-semibold text-xl"
            href="/signin"
          >
            LogIn
          </Button>
        </div>
        <div className="text-lg">
          <Button
            className="bg-transparemt text-white font-semibold text-xl"
            href="/signup"
          >
            SignUp
          </Button>
        </div>
      </div>
  )
}

export default Authptions
