"use client";

import { useState, useEffect } from "react";
import { useSession, signIn, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SignInForm = () => {
  const [providers, setProviders] = useState(null);
  const router = useRouter();
  const { data: session, status } = useSession(); // Get session status

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prevSignInData) => ({
      ...prevSignInData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signInResult = await signIn("credentials", {
      email: signInData.email,
      password: signInData.password,
      callbackUrl: "http://localhost:3000/",
    });
    if (signInResult?.error) {
      console.log("Sign-in error:", signInResult.error);
    }
  };

  // Prevent the sign-in form from rendering until the session status is resolved
  if (status === "loading") {
    return <></>;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900">
      {!session && (
        <>
          <h1 className="font-inter text-3xl font-bold text-gray-300">
            Please Sign In To Register For Events
          </h1>
          <form
            onSubmit={handleSubmit}
            className="mx-10 mt-10 flex w-full max-w-xl flex-col gap-7 rounded-lg bg-gray-800 p-6 shadow-lg"
          >
            <label className="flex flex-col">
              <span className="text-base font-semibold text-gray-300">
                Email
              </span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="mt-2 w-full rounded-md border border-gray-600 bg-gray-700 p-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={handleChange}
              />
            </label>

            <label className="flex flex-col">
              <span className="text-base font-semibold text-gray-300">
                Password
              </span>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="mt-2 w-full rounded-md border border-gray-600 bg-gray-700 p-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={handleChange}
              />
            </label>

            <button
              type="submit"
              className="rounded-full bg-indigo-500 px-5 py-2 text-sm text-white transition-colors duration-300 hover:bg-indigo-600"
            >
              Sign in
            </button>
            {providers &&
              Object.values(providers)
                .filter((provider) => provider.name !== "Credentials")
                .map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="custom-signin-btn"
                  >
                    <Image
                      src="/images/google-logo.svg"
                      alt={`${provider.name} logo`}
                      width={20}
                      height={20}
                    />
                    <div>Sign in with {provider.name}</div>
                  </button>
                ))}
          </form>
        </>
      )}
    </div>
  );
};

export default SignInForm;
