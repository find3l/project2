import bcrypt from "bcryptjs";

const users = [
  {
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    email: "lulu@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    email: "lin@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
