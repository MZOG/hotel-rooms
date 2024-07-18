import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { PaginationProps } from "@/types/types";

const Pagination = ({
  previousPage,
  activePage,
  nextPage,
  totalPages,
}: PaginationProps) => {
  return (
    <div className="flex gap-5 items-center mt-10">
      <Button size="icon" onClick={previousPage} disabled={activePage <= 1}>
        <ChevronLeftIcon className="h-4 w-4" />
      </Button>
      <p className="text-sm">
        {activePage}/{totalPages}
      </p>
      <Button
        size="icon"
        onClick={nextPage}
        disabled={activePage >= totalPages}
      >
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Pagination;
