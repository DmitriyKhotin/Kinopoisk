import {
    Filter, ImageDocsResponseDto, ImageFields,
    KinopoiskDev,
    MovieDocsResponseDtoV13,
    MovieDtoV13,
    MovieFields,
    SeasonDocsResponseDto, SeasonFields
} from '@openmoviedb/kinopoiskdev_client'

const KP_TOKEN = 'MNVGRF6-KPY4RZM-QGJXYVZ-6ESSB8B'
// const REST_URL = 'https://api.kinopoisk.dev/v1'

/**
* Общий класс сингнлтон для взаимодействия с API
*/
class KPApiClientClass {
    private kp: KinopoiskDev
    constructor() {
        this.kp = new KinopoiskDev(KP_TOKEN);
    }

    /**
    * Получить список фильмов, сериалов и т.д.
    */
    async getFilmsList(): Promise<MovieDocsResponseDtoV13> {
        const query: Filter<MovieFields> = {
            selectFields: ['id', 'name', 'rating', 'poster', 'year', 'description', 'movieLength'],
            // year: '2020-2023',
            // 'rating.kp': '7.5-10',
            // 'poster.url': '!null',
            // sortField: 'rating.kp',
            // sortType: '-1',
            page: 1,
            limit: 10,
        };

        const { data, error, message } = await this.kp.movie.getByFilters(query);

        console.log(data, error, message);
        return data;
    };

    /**
    * Получить фильм/сериал/и т.д. по id
    * @param {number} id - id фильма/сериала/и т.д
    */
    async getFilmById(id: number): Promise<MovieDtoV13> {
        const { data, error, message } = await this.kp.movie.getById(id);

        console.log(data, error, message);
        return data;
    };

    /**
     * Получить список сезонов и эпизодов
     */
    async getSeasons(): Promise<SeasonDocsResponseDto> {
        const query: Filter<SeasonFields> = {
            selectFields: ['id', 'name', 'rating', 'poster', 'year', 'description', 'movieLength'],
            // year: '2020-2023',
            // 'rating.kp': '7.5-10',
            // 'poster.url': '!null',
            // sortField: 'rating.kp',
            // sortType: '-1',
            page: 1,
            limit: 10,
        };
        const { data, error, message } = await this.kp.season.getByFilters(query)

        console.log(data, error, message);
        return data;
    };

    /**
     * Получить постеры, фоны, кадры, скриншоты и т.д.
     */
    async getImages(): Promise<ImageDocsResponseDto> {
        const query: Record<string, string> = {};
        const { data, error, message } = await this.kp.image.getByFilters(query);

        console.log(data, error, message);
        return data;
    };
}

export const KPApiClient = new KPApiClientClass()
