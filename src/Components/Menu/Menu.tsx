import burgerStyles from './burger.module.css'
import waterDrop from './waterDrop.module.css'
import styles from './styles.module.css'
import {useCallback, useState} from "preact/compat";
import {animate} from "../../utils/animate";
import {menuAnimationMathFunction} from "../../utils/menuAnimationMathFunction";

const getRotation = (progress: number): number => {
    if (progress <= 0.1) {
        return -450 * progress - 90
    }

    if (progress <= 0.3) {
        return 175 * progress - 152.5
    }

    if (progress <= 0.5) {
        return 50 * progress - 115
    }

    if (progress <= 0.8) {
        return 100 * progress - 140
    }

    return 75 * progress - 120
}

const getComputedStyles = (progress: number, result: number) => {
    return {
        transform: `translate(${progress * 100}px, ${-result*20}px) rotate(${getRotation(progress)}deg)`,
        opacity: progress < 0.85 ? progress : 0
    }
}

const Menu = () => {
    const [isOpen, setOpen] = useState<boolean>(false)
    /* Прогресс анимации: от 0 до 1, где 1 = 100% */
    const [progress, setProgress] = useState<number>(0)
    /* Значение математической функции menuAnimationMathFunction */
    const [result, setResult] = useState<number>(0)

    const handleOpenMenu = useCallback(() => {
        setOpen((prevState) => !prevState)
        if (!isOpen) {
            animate({timing: menuAnimationMathFunction, getX: setProgress, getY: setResult, duration: 1000})
        }
    }, [setOpen, isOpen, setProgress, setResult])

    return (
        <div class={styles.menu}>
            <button id={burgerStyles["burger"]} class={isOpen ? burgerStyles.open : ''} onClick={handleOpenMenu}>
                <span />
                <span />
                <span />
            </button>
            <div class={waterDrop.drop} style={getComputedStyles(progress, result)}/>
            <p class={`${styles.items} ${(progress > 0.85 && isOpen) ? styles.itemsOpened : ''}`}>
                <span class={styles.item}>Фильмы</span>
                <span class={styles.item}>Сериалы</span>
            </p>
        </div>
    )
}

export default Menu
