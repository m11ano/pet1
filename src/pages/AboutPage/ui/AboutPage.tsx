import { useTranslation } from 'react-i18next';
// import { rtkApi } from 'shared/api/rtkApi';

// const recommensationsApi = rtkApi.injectEndpoints({
//     endpoints: (build) => ({
//         getArticleRecommendationsList: build.query<any[], number>({
//             query: (limit) => ({
//                 url: '/articles',
//                 params: {
//                     _limit: limit,
//                 },
//             }),
//         }),
//     }),
// });

// const useArticleRecommendationsList = recommensationsApi.useGetArticleRecommendationsListQuery;

const AboutPage = () => {
    const { t } = useTranslation('aboutPage');

    // const { data, isLoading } = useArticleRecommendationsList(3);

    // console.log(isLoading, data);

    return (
        <div>
            {t('О сайте')}
        </div>
    );
};

export default AboutPage;
