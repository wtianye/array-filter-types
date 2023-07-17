interface User {
  name: string;
  age: number;
}

export function getAdults(users: (User | null)[]): User[] {
  const notNullPredicate = <T>(value: T | null): value is T => {
    return value !== null;
  };
  return users.filter(notNullPredicate).filter((user) => user.age >= 18);
}
