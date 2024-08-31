import { useEffect, useRef, useState } from "react";
import styles from "./AutoResizingTextArea.module.css"

const AutoResizingTextArea: React.FC = () =>
    {
        const [message, setMessage] = useState("");
        const textAreaRef = useRef<HTMLTextAreaElement>(null);

        const handleInput = () =>
        {
            if (textAreaRef.current)
            {
                textAreaRef.current.style.height = "auto";

                textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
            }
        };

        useEffect(() =>
        {
            handleInput();
        }, [message]);

        return(
            <textarea className={styles.textArea}
                ref={textAreaRef}
                value={message}
                placeholder="Message..."
                onChange={(e) => setMessage(e.target.value)}
                onInput={handleInput}
                rows={2}
                />
        );
    };

    export default AutoResizingTextArea;