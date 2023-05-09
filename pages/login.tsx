import { FC } from "react";
import { GetServerSideProps } from "next";
import { getSession, signIn } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (session) {
    return { redirect: { destination: "/" }, props: {} };
  }
  return {
    props: {},
  };
};

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  return (
    <div className="mx-auto pt-[100px] max-w-[400px] text-center min-h-screen">
      <button
        onClick={() => signIn()}
        className="p-4 border border-black text-black"
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
