import osmoLogo from "@/assets/osmo.svg";
import atomLogo from "@/assets/atom.svg";
import junoLogo from "@/assets/juno.svg";

const AVAILABLE_ASSETS = [
  { name: "OSMO", denom: "uosmo", logo: osmoLogo },
  {
    name: "ATOM",
    denom:
      "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
    logo: atomLogo,
  },
  {
    name: "JUNO",
    denom:
      "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
    logo: junoLogo,
  },
];

export default AVAILABLE_ASSETS;
