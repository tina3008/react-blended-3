import { Grid, GridItem } from "components";
import { Link } from "react-router-dom";

export const CountryList = ({ list }) => {
  return (
    <Grid>
      {list.map(({ id, counrty, flag }) => (
        <GridItem key={id}>
          <Link>
            <img src={flag} alt={counrty} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
