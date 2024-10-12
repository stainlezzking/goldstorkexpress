import { db } from "./firebase";

const COLLECTION = {
  TRACKER: "tracker",
  USER: "users",
};

export const getOneTracker = async function (id) {
  try {
    const data = await db.collection(COLLECTION.TRACKER).doc(id).get();
    if (!data.exists) return { success: false, message: "Package does not exists" };
    return { success: true, data: data.data(), exists: true };
  } catch (e) {
    return { success: false, message: "An error occured " + e.message };
  }
};

export const getAllTracker = async function () {
  try {
    const arr = [];
    const snapshot = await db.collection(COLLECTION.TRACKER).get();
    snapshot.forEach((doc) => {
      arr.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: arr };
  } catch (e) {
    return { success: false, message: "An error occured " + e.message };
  }
};

export const deleteOneTracker = async function (id) {
  try {
    await db.collection(COLLECTION.TRACKER).doc(id).delete();
    return { success: true, message: "Tracker deleted successfully" };
  } catch (e) {
    return { success: false, message: "An error occured " + e.message };
  }
};
