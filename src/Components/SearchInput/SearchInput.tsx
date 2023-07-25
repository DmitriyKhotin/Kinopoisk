import styles from './styles.module.css'

const SearchInput = () => {
    return (
        <input class={styles.searchInput} type="text" placeholder="Фильмы и сериалы" autocomplete="off" autofocus={false} tabIndex={0}/>
    )
}

export default SearchInput
