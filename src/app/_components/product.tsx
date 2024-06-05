import { Button } from "~/components/ui/button";

interface Props {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
}

export function Product(props: Props) {
  return (
    <div
      key={props.id}
      className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-950"
    >
      <img
        src={props.thumbnail}
        alt={props.title}
        width={400}
        height={400}
        className="h-48 w-full object-contain"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold" data-testid="title">
          {props.title}
        </h3>
        <div className="mb-2 flex items-center gap-2">
          {props.description.length > 100
            ? props.description.substring(0, 100) + "..."
            : props.description}
        </div>
        <p data-testid="price" className="text-right text-xl font-semibold">
          ${props.price.toFixed(2)}
        </p>
        <Button className="mt-2 w-full font-bold">Add to cart</Button>
      </div>
    </div>
  );
}
