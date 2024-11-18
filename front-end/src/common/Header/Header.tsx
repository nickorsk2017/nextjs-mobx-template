"use client"
import {observer} from "mobx-react";
import {useStore} from '@/utils';
import Link from "@/ui/Link/Link";
import {Logo} from "./_components";
import styles from "./Header.module.scss";

export type Props = {};

const Header: React.FC<Props> = () => {
    const {} = useStore();

    return <div className={styles.header}>
      <Link href="/" className={styles.header_left}>
        <Logo/>
      </Link>
    </div>;
};

export default observer(Header);
