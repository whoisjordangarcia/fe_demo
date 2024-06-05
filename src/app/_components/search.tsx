import { useState } from "react";
import { Input } from "~/components/ui/input";

interface Props {
  onChange: (query: string) => void;
}

export const Search = (props: Props) => {
  const [query, setQuery] = useState<string>();

  return (
    <Input
      data-testid="search-input"
      type="search"
      placeholder="Search..."
      value={query}
      onChange={(event) => {
        const query = event.target.value;
        setQuery(query);
        props.onChange(query);
      }}
    />
  );
};
