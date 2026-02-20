// authentication.service.ts

export const loginRequest = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@test.com" && password === "123456") {
        resolve({
          uid: "123",
          email,
        });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1500);
  });
};