interface PriceProps {
  value: number;
  currencyCode: string;
}

export type RoomProps = {
  id: number;
  name: string;
  price: PriceProps;
};

export type RoomItemProps = {
  room: RoomProps;
};

export type AvailabilityStatusProps = {
  availabilityStatus:
    | "available"
    | "onRequest"
    | "soldOut"
    | "error"
    | null
    | undefined;
  price: {
    value: number;
    currencyCode: string;
  };
};

export type PaginationProps = {
  previousPage: () => void;
  nextPage: () => void;
  activePage: number;
  totalPages: number;
};
