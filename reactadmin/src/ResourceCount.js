import { useGetList } from 'react-admin';

const ResourceCount = () => {
    const { total: booksCount = 0 } = useGetList('books', { pagination: { page: 1, perPage: 1 } });
    const { total: authorsCount = 0 } = useGetList('authors', { pagination: { page: 1, perPage: 1 } });
    const { total: genresCount = 0 } = useGetList('genres', { pagination: { page: 1, perPage: 1 } });
    const { total: membersCount = 0 } = useGetList('members', { pagination: { page: 1, perPage: 1 } });
    const { total: loansCount = 0 } = useGetList('loans', { pagination: { page: 1, perPage: 1 } });

    return { booksCount, authorsCount, genresCount, membersCount, loansCount };
};

export default ResourceCount;
