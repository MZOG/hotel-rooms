"use client";
import { RoomProps } from "@/types/types";
import Pagination from "./Pagination";
import RoomItem from "./RoomItem";
import { useState } from "react";
import { Button } from "./ui/button";

type RoomsProps = {
  rooms: RoomProps[];
};

const Rooms = ({ rooms }: RoomsProps) => {
  const page = 1;
  const perPage = 4;
  const [activePage, setActivePage] = useState(page);
  const totalPages = Math.ceil(rooms?.length / perPage);
  const offset = perPage * (activePage - 1); // 0
  const nextPage = () => setActivePage((p) => (p < totalPages ? p + 1 : p));
  const previousPage = () => setActivePage((p) => (p > 1 ? p - 1 : p));
  const [sortedRooms, setSortedRooms] = useState(rooms);
  const [sortBy, setSortBy] = useState("");

  const sortByName = () => {
    setSortBy("name");
    setSortedRooms((temp) => [
      ...temp.sort((r1, r2) => r1.name.localeCompare(r2.name)),
    ]);
  };

  const sortByPrice = () => {
    setSortBy("price");
    setSortedRooms((temp) => [
      ...temp.sort((r1, r2) => r1.price.value - r2.price.value),
    ]);
  };

  return (
    <>
      <div className="self-start mb-10">
        <p className="text-sm mb-1 font-medium">Sort by</p>
        <div className="flex gap-2">
          <Button
            variant={sortBy === "name" ? "default" : "outline"}
            onClick={() => sortByName()}
          >
            Name
          </Button>
          <Button
            variant={sortBy === "price" ? "default" : "outline"}
            onClick={() => sortByPrice()}
          >
            Price
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {sortedRooms
          .map((room: RoomProps) => {
            return <RoomItem key={room.id} room={room} />;
          })
          .slice(offset, perPage * activePage)}
      </div>
      <Pagination
        activePage={activePage}
        totalPages={totalPages}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </>
  );
};

export default Rooms;
