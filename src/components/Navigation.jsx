import { Link } from "react-router-dom"

import styles from "./styles/Navigation.module.css"

export function Navigation({ btmbooks, btmloans, btmaccount }) {
    return (
        <div className={styles.divnavigation}>

            <button className={btmbooks}>
                <Link to="/books">
                    <h2>
                        BOOKS
                    </h2>
                </Link>
            </button>
            <button className={btmloans}>
                <Link to="/loans">
                    <h2>
                        LOANS
                    </h2>
                </Link>
            </button>
            <button className={btmaccount}>
                <Link to="/account">
                    <h2>
                        ACCOUNT
                    </h2>
                </Link>
            </button>
        </div>
    )
}