import ExchangeItem from "@/components/exchange-item";
import { pendingExchanges } from "@/constants/products";

export default function Proposals() {
  return (
    <div className="mt-5">
      {pendingExchanges.map((exchange) => (
        <ExchangeItem key={exchange.id} exchange={exchange} />
      ))}
    </div>
  );
}
