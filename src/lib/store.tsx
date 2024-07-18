import { RoomProps } from "@/types/types";
import { create } from "zustand";

type State = {
  rooms: RoomProps[];
};

type Action = {
  updateRooms: (rooms: State["rooms"]) => void;
};

const useRoomStore = create<State & Action>((set) => ({
  rooms: [],
  updateRooms: (rooms) => set(() => ({ rooms: rooms })),
}));

export default useRoomStore;
