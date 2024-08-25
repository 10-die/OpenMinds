"use client"
import styles from "./academics.module.css"
import { useRouter } from "next/navigation";

const Academics = () =>
{
    const router = useRouter();

    const handleClick = () =>
    {
        //
        router.push("/page");
    };

    return(
        <div className={styles.mainContainer}>
            <h1>Academics</h1>
        </div>
    )
};


export default Academics;
