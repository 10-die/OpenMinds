"use client"
import TopBanner from "../components/topBanner";
import styles from "./page.module.css"
import { useRouter } from "next/navigation";

export default function Academics()
{
    const router = useRouter();

    const handleClick = () =>
    {
        router.push("/page");
    };

    return(
        <main className={styles.mainContainer}>
            <div className={styles.topContainer}>
                <TopBanner />
             </div>

            <div className={styles.midContainerOne}>
                <div className={styles.textContainerOne}>
                    <h1>Academics</h1>
                    <p>Our school offers a robust academic program with a focus on developing critical thinking and problem-solving skills</p>
                </div>
            </div>
        </main>
    )
};