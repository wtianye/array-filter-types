interface User {
  name: string;
  age: number;
}

export function getAdults(users: (User | null)[]): User[] {
  return users.filter(Boolean).filter((user) => user.age >= 18);
}
