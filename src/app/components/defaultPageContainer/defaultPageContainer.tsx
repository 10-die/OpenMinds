import styles from "@/app/components/defaultPageContainer/defaultPageContainer.module.css";
import { PAGE_COLOR } from "@/customiseComponents/customisePage";

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