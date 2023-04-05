import Header from "../components/header";
import { getServerSideSession } from "./api/auth/[...nextauth]";
import Footer from "../components/footer";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen min-w-full flex-col">
      <Header />
      <main className="flex-1"></main>
      <Footer />
    </div>
  );
}
export async function getServerSideProps(context) {
  const session = await getServerSideSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
