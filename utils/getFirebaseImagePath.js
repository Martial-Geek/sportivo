import { ref, listAll, getDownloadURL } from "firebase/storage";
import storage from "@/firebaseConfig";

export const fetchImages = async (folderPath) => {
  try {
    const storageRef = ref(storage, folderPath);
    const res = await listAll(storageRef);
    const urls = await Promise.all(
      res.items.map((itemRef) => getDownloadURL(itemRef))
    );
    return urls;
  } catch (error) {
    console.error("Error fetching images from Firebase:", error);
  }
};

export const fetchImage = async (folderPath) => {
  try {
    const storageRef = ref(storage, folderPath);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error("Error fetching image from Firebase:", error);
  }
};
