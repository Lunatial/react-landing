import {FormattedMessage} from "react-intl"

import styles from './AppLoader.module.css'

const AppLoaderComp = () => {
    return (
        <div className={styles.spinner}>
            <FormattedMessage id="general.loading"/>
        </div>
    )
}

export default AppLoaderComp
