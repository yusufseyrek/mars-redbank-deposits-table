import Image from "next/image";
import IRedbankDeposit from "@/app/interfaces/IRedbankDeposit";
import styles from "./DepositsTable.module.css";
import abbreviateAmount from "@/utils/abbreviateAmount";

interface IProps {
  data: IRedbankDeposit[];
}

export default function DepositsTable({ data }: IProps) {
  if (!data.length) return <div>No data</div>;

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th></th>
          <th>Asset</th>
          <th>Deposit Cap</th>
          <th>Borrow Rate</th>
          <th>Liquidity</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry) => (
          <tr key={entry.denom}>
            <td>
              <Image
                src={entry.logo}
                width={24}
                height={24}
                alt={`logo-${entry.name}`}
              />
            </td>
            <td>{entry.name}</td>
            <td>{abbreviateAmount(entry.deposit_cap)}</td>
            <td>{parseFloat(entry.borrow_rate).toFixed(3)}</td>
            <td>{abbreviateAmount(entry.underlying_liquidity_amount)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
