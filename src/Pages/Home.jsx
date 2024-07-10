import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Password Manager application</h1>
        <p className="text-gray-700 mb-6">This application allows you to securely manage your passwords.</p>
        <Link to="/Login" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md text-center">
          ACCEPT
        </Link>
      </div>
    </div>
    </>
  )
}

export default Home
