import styles from "./OurTeamBox.module.css"
import Image from "next/image";

interface OurTeamBoxConstructor
{
    src: string;
    alt: string;
    nameText: string;
    informationText: string;
}

const OurTeamBox: React.FC<OurTeamBoxConstructor> = ({ src, alt, nameText, informationText }) =>
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

export default OurTeamBox;