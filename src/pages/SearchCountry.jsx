import {
  Container,
  CountryList,
  Heading,
  Loader,
  SearchForm,
  Section,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [coutries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const region = searchParams.get('region');
    if (!region) return;

    async function fetchCountry() {
      setLoading(true);
      setError(false);
      try {
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    }

    fetchCountry();
  }, [searchParams]);

  const handleSubmit = region => {
    setSearchParams({ region });
  };
  return (
    <Section>
      <Container>
        <Heading title="SearchCountry" bottom />
        <SearchForm onSubmit={handleSubmit} />
        {loading && <Loader />}
        {error && <Heading title={error} top />}
        <CountryList list={coutries} />
      </Container>
    </Section>
  );
};
