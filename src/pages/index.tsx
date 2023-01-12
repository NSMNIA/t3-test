import { type GetServerSidePropsContext, type NextPage } from "next";
import { signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";
import { requireAuth } from "../utils/requireAuth";

const Home: NextPage = () => {
    const { data: sessionData } = useSession();

    const { data: ProtectedData } = api.example.getSecretMessage.useQuery(undefined, {
        enabled: sessionData?.user !== undefined,
    });

    const handleSingOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        signOut();
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <p>
                Welcome, <strong>{sessionData?.user?.name}</strong>!
            </p>
            <p>{ProtectedData}</p>
            <a href="#signout" onClick={handleSingOut}>
                Sign Out
            </a>
        </div>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return requireAuth(context, ({ session }: any) => {
        return {
            props: { session },
        };
    });
}

export default Home;
