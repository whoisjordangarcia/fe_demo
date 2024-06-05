import { Button } from "~/components/ui/button";

interface Props {
  sortDirection?: string;
  onClick: () => void;
}

export const Sort = (props: Props) => {
  const sortValue = props.sortDirection === "asc" ? "Descending" : "Ascending";
  return (
    <div className="px-6">
      <Button data-testid="sort-button" onClick={props.onClick}>
        Price {sortValue}
      </Button>
    </div>
  );
};
