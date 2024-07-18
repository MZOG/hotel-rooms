import { useState, useCallback } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RoomItemProps, AvailabilityStatusProps } from "@/types/types";

const RoomItem = ({ room }: RoomItemProps) => {
  const [availability, setAvailability] = useState<AvailabilityStatusProps>();

  const check = useCallback(() => {
    const fetchData = (id: number) =>
      fetch(`https://dcontent.inviacdn.net/shared/dev/test-api/room/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setAvailability(data);
        });
    fetchData(room.id);
  }, [room]);

  const showRoomInfo = () => {
    const roomInfo = [{ ...room, ...availability }][0];
    console.log("Room info:", roomInfo);
  };

  return (
    <div
      key={room.id}
      className="flex flex-col justify-between border p-3 rounded-xl space-y-2"
    >
      <Image
        src="https://picsum.photos/300/300?random"
        alt={room.name}
        width={300}
        height={300}
        className="rounded-xl"
      />
      <p className="font-medium line-clamp-1">{room.name}</p>
      <div className="flex justify-between place-items-center">
        <div>
          <p>
            {room?.price?.value} {room?.price.currencyCode}
          </p>
          {availability && (
            <p className="text-green-700">
              {availability?.price?.value} {availability?.price?.currencyCode}
            </p>
          )}
        </div>

        {!availability ? (
          <Badge onClick={check}>Check availability</Badge>
        ) : (
          <Badge className="capitalize font-normal">
            {availability.availabilityStatus}
          </Badge>
        )}
      </div>

      <Button
        onClick={showRoomInfo}
        disabled={
          availability?.availabilityStatus === "soldOut" ||
          availability?.availabilityStatus === "error"
        }
      >
        Book
      </Button>
    </div>
  );
};

export default RoomItem;
