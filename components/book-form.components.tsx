import { useForm } from 'react-hook-form';

export const BookForm = ({ defaultValues, onFormSubmit, isLoading }: any) => {
  const { register, handleSubmit } = useForm({ defaultValues });
  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data);
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <label htmlFor="title">Title:</label>
            <input
              {...register('title')}
              id="title"
              name="title"
              type="text"
              className="border-b border-gray-500 rounded-sm pl-1 focus:outline-none w-full"
            />
          </div>
          <div className="flex gap-3">
            <label htmlFor="title">Author:</label>
            <input
              {...register('author')}
              id="author"
              name="author"
              type="text"
              className="border-b border-gray-500 rounded-sm pl-1 focus:outline-none w-full"
            />
          </div>
          <div className="flex justify-end">
            <button className="bg-green-600 px-4 py-2 rounded-md text-white shadow shadow-gray-600">
              {isLoading ? <div>Loading...</div> : 'Submit'}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
