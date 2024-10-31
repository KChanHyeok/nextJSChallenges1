"use client";
import { useRouter } from "next/navigation";
import styles from "../styles/person.module.css";

interface personProps {
  id: string;
  name: string;
  square_image: string;
  net_worth: number;
  industries: string[];
}

export default function person({ id, name, square_image, net_worth, industries }: personProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/person/${id}`);
  };
  return (
    <div className={styles.person} onClick={handleClick}>
      <img src={square_image} />
      <div className={styles.memo}>
        <span className={styles.title}>{name}</span>
        <span>
          {Math.round(net_worth / 1000)} Billion / {industries}
        </span>
      </div>
    </div>
  );
}
