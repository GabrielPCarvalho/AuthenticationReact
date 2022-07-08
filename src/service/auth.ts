interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 's1das2d1as24',
        user: {
          name: 'John',
          email: 'John@example.com',
        },
      });
    }, 2000);
  });
}
