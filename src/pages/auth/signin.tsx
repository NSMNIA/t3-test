import type { GetServerSidePropsContext } from "next";
import { getProviders, getSession, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import MetaTags from "../../components/MetaTags";
import style from "./auth.module.scss";

type ProviderProps = {
    readonly id: string;
    readonly name: string;
    readonly type: string;
    readonly signinUrl: string;
    readonly callbackUrl: string;
};

type SignInProps = {
    providers: {
        [key: string]: ProviderProps;
    };
    session: null | {
        readonly expires: string;
        readonly user: {
            readonly name: string;
            readonly email: string;
        };
    };
};

export default function SignIn({ providers }: SignInProps) {
    return (
        <>
            <MetaTags title="Sign in" description="Sign in to your account" />
            <div className={style["auth"]}>
                <div className={style["auth--grid"]}>
                    <div className={style["auth--grid-form"]}>
                        <Link href="/" className={style["auth--logo"]}>
                            <svg width="48" height="48" version="1.1" viewBox="0 0 115.09 105.83" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                                <g transform="translate(-50.697 -113.11)" fill="currentColor" strokeWidth="1.5988">
                                    <path d="m100.18 194.13c0 13.44-10.895 24.336-24.336 24.336s-24.336-10.896-24.336-24.336c3e-6 -13.44 10.895-24.336 24.336-24.336s24.336 10.895 24.336 24.336z" />
                                    <path d="m129.26 125.76c-6.7292-11.634-21.604-15.628-33.244-8.9076-11.639 6.7201-15.627 21.603-8.9074 33.243l2.54e-4 4.4e-4 32.45 56.102c6.7292 11.634 21.604 15.628 33.243 8.9078 11.639-6.72 15.628-21.604 8.9076-33.244z" />
                                </g>
                            </svg>
                        </Link>
                        <h1>Welcome back</h1>
                        <p>Sign in to your account.</p>
                        <div className={style["auth--buttons"]}>
                            {providers &&
                                Object.values(providers)?.map(provider => {
                                    return (
                                        <button key={provider.name} className={style["auth--button"]} onClick={() => void signIn(provider.id)}>
                                            {provider.id === "google" && (
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48" fill="currentColor">
                                                    <g>
                                                        <path d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                                        <path d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                                        <path d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                                        <path d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                                        <path fill="none" d="M0 0h48v48H0z"></path>
                                                    </g>
                                                </svg>
                                            )}
                                            {provider.id === "github" && (
                                                <svg width="18" height="18" viewBox="0 0 256 249" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                                                    <g fill="currentColor">
                                                        <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />
                                                        <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />
                                                    </g>
                                                </svg>
                                            )}
                                            <span>Sign in with {provider.name}</span>
                                        </button>
                                    );
                                })}
                        </div>
                    </div>
                    <div className={style["auth--grid-image"]}>
                        <Image src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" alt="Login" fill />
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { req, res } = context;
    const session = await getSession({ req });
    if (req && session && session.expires) {
        res.writeHead(302, { Location: "/" });
        res.end();
        return { props: {} };
    }
    return {
        props: {
            providers: await getProviders(),
        },
    };
}
