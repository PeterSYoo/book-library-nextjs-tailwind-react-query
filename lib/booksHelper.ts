export const getAllBooks = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_API_SERVER}/books`
  );

  if (!response.ok) {
    throw new Error('Something went wrong');
  } else {
    return response.json();
  }
};

export const getBook = async ({ queryKey }: any) => {
  const [_key, { id }] = queryKey;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_API_SERVER}/books/${id}`
  );

  if (!response.ok) {
    // @ts-ignore
    throw new Error(response.json().message);
  } else {
    return response.json();
  }
};

export const updateBook = async ({ id, ...data }: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_API_SERVER}/books/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    // @ts-ignore
    throw new Error(response.json().message);
  } else {
    return true;
  }
};

export const removeBook = async (id: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_API_SERVER}/books/${id}`,
    {
      method: 'DELETE',
    }
  );

  if (!response.ok) {
    // @ts-ignore
    throw new Error(response.json().message);
  } else {
    return true;
  }
};

export const createBook = async (data: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_API_SERVER}/books`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    // @ts-ignore
    throw new Error(response.json().message);
  } else {
    return response.json();
  }
};
