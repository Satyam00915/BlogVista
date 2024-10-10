import { Input } from "@/components/ui/input"

const page = () => {
  return (
    <div className="flex justify-around items-center bg-gray-900">
      <form className="bg-gray-800 shadow-md rounded px-12 py-8 mt-6 mb-4 w-full max-w-lg text-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Sign Up</h2>
        <div className="mb-6">
          <label className="block text-gray-300 font-bold mb-3" htmlFor="username">
            Username
          </label>
          <Input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 font-bold mb-3" htmlFor="email">
            Email
          </label>
          <Input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-8">
          <label className="block text-gray-300 font-bold mb-3" htmlFor="password">
            Password
          </label>
          <Input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline text-lg"
            type="button"
          >
            Sign Up
          </button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-400 text-lg">
            Already have an account? <a href="/signin" className="text-blue-400 hover:text-blue-300">Sign in</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default page