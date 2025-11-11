import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GetUserHashedPassword(
  username: string,
): Promise<string | null> {
  const user = await prisma.user.findUnique({
    where: { name: username },
    select: { password: true },
  });

  return user?.password ?? null;
}

interface Userdata {
  success: boolean;
  message: string;
  user?: {
    Id: number;
    Username: string;
    Email: string;
    AvatarUrl?: string;
  };
}

export async function GetUserFromUsername(username: string): Promise<Userdata> {
  const user = await prisma.user.findUnique({
    where: { name: username },
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true,
    },
  });

  if (!user) {
    console.log("User with username: ", username, " was not found!");
    return {
      success: false,
      message: "userdata not found in the database",
    };
  }

  return {
    success: true,
    message: "userdata was found in the database",
    user,
  };
}

export async function GetUserFromEmail(email: string): Promise<Userdata> {
  const user = await prisma.user.findUnique({
    where: { email: email },
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true,
    },
  });

  if (!user) {
    console.log("User with email: ", email, " was not found in the database!");
    return {
      success: false,
      message: "userdata was not found in the database",
    };
  }

  return {
    success: true,
    message: "userdata was found in the database",
    user,
  };
}

export async function GetUserFromId(id: number): Promise<Userdata> {
  const user = await prisma.user.findUnique({
    where: { id: id },
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true,
    },
  });
  if (!user) {
    console.log("User with id: ", id, " was not found in the database!");
    return {
      success: false,
      message: "userdata was not found in the database",
    };
  }

  return {
    success: true,
    message: "userdata was found in the database",
    user,
  };
}

export type NewUser = {
  Username: string;
  Email: string;
  Password: string;
  Avatar?: string;
};

export type AddNewUserResult = {
  success: boolean;
  message: string;
  user?: {
    id: number;
    name: string;
    email: string;
    avatar?: string;
  };
};

export async function AddNewUser(payload: NewUser): Promise<AddNewUserResult> {
  try {
    const user = await prisma.user.create({
      data: {
        name: payload.Username,
        email: payload.Email,
        password: payload.Password,
        avatar: payload.Avatar,
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
      },
    });

    console.log("User has been sucessfully added!");

    return {
      success: true,
      message: "User added successfully!",
      user,
    };
  } catch (error) {
    console.log("An error occured while adding new user: ", error);
    return {
      success: false,
      message: "something went wrong!",
    };
  }
}

export async function DeleteUserFromId(id: number): Promise<boolean> {
  const deleteUser = await prisma.user.delete({
    where: { id: id },
  });

  if (!deleteUser) {
    return false;
  }
  return true;
}

export async function DeleteUserFromUsername(
  username: string,
): Promise<boolean> {
  const deleteUser = await prisma.user.delete({
    where: { name: username },
  });

  if (!deleteUser) {
    return false;
  }

  return true;
}

export async function DeleteUserFromEmail(email: string): Promise<boolean> {
  const deleteUser = await prisma.user.delete({
    where: { email: email },
  });

  if (!deleteUser) {
    return false;
  }

  return true;
}

export async function UpdateUsernameById(
  id: number,
  username: string,
): Promise<boolean> {
  const updatedUser = await prisma.user.update({
    where: { id: id },
    data: {
      name: username,
    },
  });

  if (!updatedUser) {
    return false;
  }
  return true;
}

export async function UpdateUsernameByEmail(
  email: string,
  username: string,
): Promise<boolean> {
  const updatedUser = await prisma.user.update({
    where: { email: email },
    data: {
      name: username,
    },
  });

  if (!updatedUser) {
    return false;
  }
  return true;
}

export async function UpdateUserPasswordByEmail(
  email: string,
  password: string,
): Promise<boolean> {
  const updatedUser = await prisma.user.update({
    where: { email: email },
    data: {
      password: password,
    },
  });

  if (!updatedUser) {
    return false;
  }
  return true;
}
