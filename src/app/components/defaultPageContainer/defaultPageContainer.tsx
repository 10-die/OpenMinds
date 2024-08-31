import styles from "./defaultPageContainer.module.css";
import { PAGE_COLOR } from "@/src/customiseComponents/customisePage";

interface PageContainerConstructor
{
    children: React.ReactNode; // accept any valid react child elements
}
const PageContainer: React.FC<PageContainerConstructor> = ({ children }) =>
{
    return(
        <main style={{ color: PAGE_COLOR }} className={styles.mainContainer}>

        </main>
    );
};

export default PageContainer;