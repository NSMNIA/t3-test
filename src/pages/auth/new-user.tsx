import { type GetServerSidePropsContext } from "next";
import Link from "next/link";
import { requireAuth } from "../../utils/requireAuth";
import style from "./auth.module.scss";

const NewUser = () => {
    return (
        <div className={style["auth"]}>
            <h1>Welcome new user</h1>
            <Link href="/">Go home</Link>
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

export default NewUser;
