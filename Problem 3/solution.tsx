// 1. 'FormattedWalletBalance' can inherit 'WalletBalance' as they share same properties
// 2. 'Datasource' should fetch proces from the url + error handling
// 3. getPriority function can be declared outside since it does not use any states
// 4. unused variable 'lhsPriority' is not defined, simplified logic for 'sortedBalances'
// 5. remove 'prices' dependancy as 'prices' are not directly used for sorting. (to avoid unnecessary recomputation)
// 6. use 'formattedBalances' to generate the <WalletRow>
// 7. (line 70) "console.err" is a typo. It should be "console.error"
// 8. using 'index' as the key in <WalletRow> may cause bugs where react may incorrectly render the elements

interface WalletBalance {
  currency: string;
  amount: number;
}
interface FormattedWalletBalance extends WalletBalance {
  formatted: string;
}

class Datasource {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  async getPrices(): Promise<Record<string, number>> {
    try {
      const response = await fetch(this.url);
      if (!response.ok) throw new Error("Failed to fetch prices");
      return await response.json();
    } catch (error) {
      console.error("Error fetching prices:", error);
      return {}; // Fallback to an empty object
    }
  }
}

interface Props extends BoxProps {}

const getPriority = (blockchain: any): number => {
  switch (blockchain) {
    case "Osmosis":
      return 100;
    case "Ethereum":
      return 50;
    case "Arbitrum":
      return 30;
    case "Zilliqa":
      return 20;
    case "Neo":
      return 20;
    default:
      return -99;
  }
};

const WalletPage: React.FC<Props> = (props: Props) => {
  const { children, ...rest } = props;
  const balances = useWalletBalances();
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const datasource = new Datasource(
      "https://interview.switcheo.com/prices.json"
    );
    datasource
      .getPrices()
      .then((prices) => {
        setPrices(prices);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const sortedBalances = useMemo(() => {
    return balances
      .filter((balance: WalletBalance) => {
        // keep balance with priority > -99 and amount <= 0
        const balancePriority = getPriority(balance.blockchain);
        return balancePriority > -99 && balance.amount <= 0;
      })
      .sort((lhs: WalletBalance, rhs: WalletBalance) => {
        // sort balances by their priority, descending order
        getPriority(rhs.blockchain) - getPriority(lhs.blockchain);
      });
  }, [balances]);

  const formattedBalances = sortedBalances.map((balance: WalletBalance) => {
    return {
      ...balance,
      formatted: balance.amount.toFixed(),
    };
  });

  const rows = formattedBalances.map(
    (balance: FormattedWalletBalance, index: number) => {
      const usdValue = prices[formattedBalances.currency] * balance.amount;
      return (
        <WalletRow
          className={classes.row}
          key={balance.currency} // using currency as identifier instead of index
          amount={balance.amount}
          usdValue={usdValue}
          formattedAmount={balance.formatted}
        />
      );
    }
  );

  return <div {...rest}>{rows}</div>;
};
