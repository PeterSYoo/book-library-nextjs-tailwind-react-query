import { useQuery } from '@tanstack/react-query';
import { getAllBooks } from '../lib/booksHelper';

export default function Home() {
  const { data, error, isLoading, isError }: any = useQuery(
    ['books'],
    getAllBooks
  );

  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (isError) {
    return <div>Error {error.message}</div>;
  }

  return (
    <>
      <div className="">
        {data.map(({ author, title, id }: any) => (
          <div key={id}>
            {author} - {title}
          </div>
        ))}
      </div>
    </>
  );
}
