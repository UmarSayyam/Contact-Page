import { MdMessage } from "react-icons/md";
import Button  from "../Button/Button.jsx";
import styles from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
const ContactForm = () => {
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
          <Button text="VIA CHAT SUPPORT" icon={<MdMessage fontSize="24px" />}/>
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />}/>
          </div>
          <Button text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />}
          
          isOutline={true}
          
          />
        </div>
        <div className={styles.contact_Image}></div>
    </section>
  );
};

export default ContactForm