import Register from "./components/Register";




export default function LoginPage() {


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700 py-16">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up in to your account
        </h1>
      <Register></Register>
      </div>

    </div>
  );
}
