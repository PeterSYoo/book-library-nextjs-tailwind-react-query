import { QueryClient, useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { BookForm } from '../../components/book-form.components';
import { createBook } from '../../lib/booksHelper';

const CreateBook = () => {
  const router = useRouter();
  const { mutateAsync, isLoading } = useMutation(createBook);

  const onFormSubmit = async (data: any) => {
    await mutateAsync(data);
    router.push('/');
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="border-b border-gray-300 pb-2">
          <h1>Create New Book</h1>
        </div>
        <BookForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
      </div>
    </>
  );
};

export default CreateBook;
