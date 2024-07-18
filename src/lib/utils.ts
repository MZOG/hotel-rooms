import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Get rooms
async function getRooms() {
  const res = await fetch(
    "https://dcontent.inviacdn.net/shared/dev/test-api/rooms"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export { getRooms };
