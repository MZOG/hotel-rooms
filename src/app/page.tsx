import Rooms from "@/components/Rooms";
import { getRooms } from "@/lib/utils";

export default async function Home() {
  const rooms = await getRooms();

  return (
    <div className="container mx-auto px-5 flex flex-col h-screen justify-center">
      <Rooms rooms={rooms} />
    </div>
  );
}
