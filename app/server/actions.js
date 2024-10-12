"use server";
import { z } from "zod";
import { signIn, signOut } from "../auth";
import { db } from "./firebase";
import md5 from "md5";
import { createTracker, deleteOneTracker, getOneTracker, updateTracker } from "./trackers";
import { revalidatePath } from "next/cache";

const admin = z.object({
  email: z.string().email({
    message: "Invalid Email address",
  }),
  password: z.string({ message: "Invalid Password" }),
});
const failedLoginResponse = { success: false, message: "Invalid username or password" };

export const getUserCredentialsLogin = async function (formData) {
  try {
    const test = admin.safeParse(formData);
    if (!test.success) return failedLoginResponse;
    const { email, password } = test.data;
    const user = await db.collection("users").doc(email).get();
    if (!user.exists) return failedLoginResponse;
    if (user.data().password !== md5(password)) return failedLoginResponse;
    await signIn("credentials", { email, password, redirect: false });
    return { success: true };
  } catch (err) {
    return { success: false, message: "An error occured " + err.message };
  }
};

export const deleteTrackerAction = async function (id) {
  const res = await deleteOneTracker(id);
  if (res.success) revalidatePath("/", "layout");
  return res;
};

export const getOneTrackerAction = async function (id) {
  const tracker = await getOneTracker(id);
  return tracker;
};

export const updateTrackerAction = async function (id, data) {
  const res = await updateTracker(id, data);
  if (res.success) revalidatePath("/track/" + id, "page");
  return res;
};

export const createTrackerAction = async function (data) {
  const res = await createTracker(data);
  return res;
};

export const logOut = async function () {
  await signOut();
  return { success: true };
};
