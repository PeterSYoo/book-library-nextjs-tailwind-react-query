import {
  dehydrate,
  QueryClient,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { BookForm } from '../../components/book-form.components';
import { getBook, updateBook } from '../../lib/booksHelper';

const UpdateBook = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading, isError } = useQuery(
    ['book', { id }],
    getBook
  );

  const { mutateAsync, isLoading: isMutating } = useMutation(updateBook);

  const onFormSubmit = async (data: any) => {
    await mutateAsync({ ...data, id });
    router.push('/');
  };

  if (isLoading) return <div>Loading..</div>;

  if (isError) {
    // @ts-ignore
    return <div>Error {error.message}</div>;
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1>Update Book</h1>
        <BookForm
          defaultValues={data}
          onFormSubmit={onFormSubmit}
          isLoading={isMutating}
        />
      </div>
    </>
  );
};

export default UpdateBook;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['book'], getBook);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
