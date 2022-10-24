import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const Wallet = () => {
  const { user, verifyUser, loading } = useContext(AuthContext);
  const handleVerification = () => {
    verifyUser().then(() => {
      toast.success("Verification Email Sent To Your Email");
    });
  };

  return (
    <div>
      {user && user?.emailVerified ? (
        <section className="bg-white dark:bg-gray-900">
          <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
            <div className="flex justify-center xl:w-1/2">
              <img
                className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full"
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                alt=""
              />
            </div>

            <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                Crypto Wallet
              </h2>

              <p className="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
                recusandae tenetur iste quaerat voluptatibus quibusdam nam
                repudiandae{" "}
              </p>

              <div className="mt-6 sm:-mx-2">
                <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto"
                  >
                    <span className="mx-2">Deposite</span>
                  </a>
                </div>

                <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600"
                  >
                    <span className="mx-2">Transfer</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="text-4xl mt-10">
          <h1>To access this page you need to verify you email address</h1>

          <button
            onClick={handleVerification}
            className="mt-6 px-14 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            Send Verification Email
          </button>
        </div>
      )}
    </div>
  );
};

export default Wallet;
