import { Grid, GridItem } from 'components';
import { Link, useLocation } from 'react-router-dom';

export const CountryList = ({ list }) => {
  const location = useLocation();
  return (
    <Grid>
      {list.map(({ id, counrty, flag }) => (
        <GridItem key={id}>
          <Link to={`/country/${id}`} state={location}>
            <img src={flag} alt={counrty} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
