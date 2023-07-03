## Array.filter 类型体操
请在不修改 getAdults 函数和 User 类型的情况下，合理定义类型，使得下面的代码通过类型检查

```
interface User {
  name: string;
  age: number;
}

export function getAdults(users: (User | null)[]): User[] {
  return users.filter(Boolean).filter((user) => user.age >= 18);
}
```
