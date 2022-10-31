import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { BookItem } from '../components/book-item.components';
import { getAllBooks } from '../lib/booksHelper';

export default function Home() {
  const { data, error, isLoading, isError }: any = useQuery(
    ['books'],
    getAllBooks
  );

  if (isLoading) return <div>Loading..</div>;

  if (isError) {
    return <div>Error {error.message}</div>;
  }

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between pr-28 pb-2 border-b border-gray-300">
          <span className="text-bold">Title</span>
          <span className="text-bold">Author</span>
        </div>
        {data?.map(({ author, title, id }: any) => (
          <BookItem author={author} title={title} key={id} id={id} />
        ))}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['books'], getAllBooks);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
