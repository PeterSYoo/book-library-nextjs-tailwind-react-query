export const getAllBooks = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_API_SERVER}/books`
  );

  if (!response.ok) {
    throw new Error('Something went wrong');
  } else {
    return response.json();
  }
};
