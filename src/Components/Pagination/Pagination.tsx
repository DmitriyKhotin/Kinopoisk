import types from "@openmoviedb/kinopoiskdev_client"
import {FunctionComponent} from "preact";
import {useMemo} from "preact/compat";

const activeElementStyles ="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
const elementStyles = "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
const Pagination: FunctionComponent<types.MovieDocsResponseDtoV13> = ({ page, pages }) => {
    const pagesToRender = useMemo(() => [...Array(pages).keys()].slice(0, 3), [pages])
    return (
        <nav class="flex justify-center">
            <ul class="inline-flex -space-x-px text-sm">
                <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                </li>
                {pagesToRender.map(currentPage =>
                    <li>
                        <button class={currentPage === page ? activeElementStyles : elementStyles}>{currentPage}</button>
                    </li>
                )}
                <li>
                    <button class={elementStyles}>{pages}</button>
                </li>
                <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
