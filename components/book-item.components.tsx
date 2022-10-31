import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { removeBook } from '../lib/booksHelper';

export const BookItem = ({ author, title, id }: any) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(removeBook);
  const remove = async () => {
    await mutateAsync(id);
    queryClient.invalidateQueries(['books']);
  };

  return (
    <>
      <div className="flex gap-1 justify-between">
        <div>
          <Link href={`/update-book/${id}`}>
            <span className="underline text-blue-600 hover:no-underline hover:text-black">
              {title}
            </span>
          </Link>
        </div>
        <div className="flex gap-5">
          {author}
          <button
            onClick={remove}
            className="bg-red-600 px-4 rounded-md text-white shadow shadow-gray-600"
          >
            {isLoading ? <div>Loading..</div> : 'Remove'}
          </button>
        </div>
      </div>
    </>
  );
};
