"use client"
import styles from "./academics.module.css"
import { useRouter } from "next/navigation";

export default function Academics()
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
            <button onClick={handleClick}>

            </button>
        </div>
    )
};