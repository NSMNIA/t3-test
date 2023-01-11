import { GetServerSidePropsContext } from "next";
import { getProviders, getSession, signIn } from "next-auth/react";

type ProviderProps = {
    readonly id: string;
    readonly name: string;
    readonly type: string;
    readonly signinUrl: string;
    readonly callbackUrl: string;
}

type SignInProps = {
    providers: {
        [key: string]: ProviderProps;
    }
}

export default function SignIn({ providers }: SignInProps) {
    return (
        <>
            <h1>Sign in</h1>
            {providers && Object.values(providers)?.map((provider) => {
                console.log(provider);
                return (
                    <div key={provider.name}>
                        <button onClick={() => signIn(provider.id)}>
                            Sign in with {provider.name}
                        </button>
                    </div>
                )
            })}
        </>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { req, res } = context;
    const session = await getSession({ req });
    if (req && session) {
        res.writeHead(302, { Location: "/" });
        res.end();
        return { props: {} };
    }
    return {
        props: {
            session: null,
            providers: await getProviders(),
        },
    }
}