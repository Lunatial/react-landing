import {ImgComparisonSlider} from '@img-comparison-slider/react'

import {motion} from "framer-motion"

// @ts-ignore
import pic1 from '../../public/4220509.jpg?webp'
// @ts-ignore
import pic2 from '../../public/6367995.jpg?webp'

import styles from './ImageCompareComp.module.css'

const ImageCompareComp = () => {
    return (
        <motion.div
            className="mx-auto container my-10"
            whileHover={{
                scale: 0.95,
                transition: {duration: 1},
            }}
            // whileTap={{scale: 1}}
        >
            <ImgComparisonSlider className={styles.sliderExampleFocus}>
                <img slot="first" src={pic1} alt="pic1"/>
                <img slot="second" src={pic2} alt="wor"/>
            </ImgComparisonSlider>
        </motion.div>
    )
}

export default ImageCompareComp
