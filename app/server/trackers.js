import { db } from "./firebase";
import COLLECTION from "./variables";

export const getOneTracker = async function (id) {
  try {
    const data = await db.collection(COLLECTION.TRACKER).doc(id).get();
    if (!data.exists) return { success: false, message: "Package does not exists", exists: false };
    return { success: true, data: data.data() };
  } catch (e) {
    return { success: false, message: "An error occured " + e.message, exists: true };
  }
};
