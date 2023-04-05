import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signIn } from "next-auth/react";
import Router from "next/router";
import { getServerSideSession } from "./api/auth/[...nextauth]";
import { toast } from "react-toastify";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="mx-auto w-full max-w-md">
        <div className="text-center">
          <Link href="/" className="text-3xl font-bold text-gray-900 underline">
            Product Name
          </Link>
          <p className="mt-2 text-sm text-gray-600">
            Welcome! Here you can create your account.
          </p>
        </div>
        <div className="mt-8 overflow-hidden  bg-white shadow-md">
          <div className="px-10 py-8">
            <Formik
              initialValues={{ username: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.username) {
                  errors.username = "Required";
                }
                if (!values.password) {
                  errors.password = "Required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                toast.dismiss();
                signIn("credentials", {
                  redirect: false,
                  method: "signup",
                  username: values.username,
                  password: values.password,
                  redirect: false,
                })
                  .then((data) => {
                    if (data.ok) {
                      Router.push("/dashboard");
                    } else {
                      toast.error("Invalid Username/Password", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                      });
                    }
                  })
                  .catch(() => {
                    toast.error("Server Error", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: false,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                    });
                  })
                  .finally(() => {
                    setSubmitting(false);
                  });
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div>
                    <label
                      htmlFor="username"
                      className="mb-2 block font-bold text-gray-700"
                    >
                      Username
                    </label>
                    <Field
                      className="w-full  border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      type="text"
                      name="username"
                    />
                    <ErrorMessage
                      name="username"
                      className="mt-2 text-sm text-rose-600"
                      component="div"
                    />
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="password"
                      className="mb-2 block font-bold text-gray-700"
                    >
                      Password
                    </label>
                    <Field
                      className="w-full  border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      type="password"
                      name="password"
                    />
                    <ErrorMessage
                      className="mt-2 text-sm text-rose-600"
                      name="password"
                      component="div"
                    />
                  </div>
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 px-4 py-2  text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                      disabled={isSubmitting}
                    >
                      Sign Up
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="bg-gray-50 px-4 py-3">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Login here.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSideSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
