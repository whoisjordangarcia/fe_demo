interface Props {
  total: number;
  averagePrice: number;
}

export default function Footer(props: Props) {
  return (
    <div className="w-100 text-xs text-muted-foreground">
      <strong data-testid="total-value">{props.total}</strong> - Total amount of
      products
      <br />
      Average product price:{" "}
      <strong data-testid="average-price">
        ${props.averagePrice.toFixed(2)}
      </strong>
    </div>
  );
}
