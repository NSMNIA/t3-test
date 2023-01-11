import { getSession, useSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next/types";
import { api } from "../utils/api";

type Props = {}

const Protected = (props: Props) => {
    const { data: sessionData } = useSession();
    const { data: secretMessage } = api.example.test2.useQuery(
        undefined,
        {
            enabled: sessionData?.user !== undefined
        },
    );
    console.log(secretMessage)

    return (
        <div>
            <h1>
                Protected
            </h1>

        </div>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { req, res } = context;
    const session = await getSession({ req });
    console.log(session);
    return {
        props: {}
    }
}

export default Protected
