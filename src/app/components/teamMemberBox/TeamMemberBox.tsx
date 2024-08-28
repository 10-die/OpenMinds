import styles from "@/app/components/teamMemberBox/TeamMemberBox.module.css"
import Image from "next/image";

interface TeamMemberBoxConstructor
{
    src: string;
    alt: string;
    nameText: string;
    informationText: string;
}

const TeamMemberBox: React.FC<TeamMemberBoxConstructor> = ({ src, alt, nameText, informationText }) =>
{
    return(
        <div className={styles.boxContainer}>
            <div className={styles.nameAndTextContainer}>    
                <h1>{nameText}</h1>
                <p>{informationText}</p>
            </div>

            <div className={styles.imageContainer}>    
                <Image
                    alt={alt}
                    src={src}
                    width={50}
                    height={50}
                />    
            </div>
            
        </div>
    );
};

export default TeamMemberBox;