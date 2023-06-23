import Link from "next/link"
import styles from "@/styles/signup/succes.module.css"

export default function Sucess() {
  return (
    <div className={styles.container}>
      <div className={styles.success}>
        <p>
          Success Message. Thak you fo signing up. we will be in touch soon{" "}
          <Link href="/">Go to home</Link>
        </p>
      </div>
    </div>
  );
}
