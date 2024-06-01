import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

export const Home = () => {
  const [coutries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  useEffect(() => {
    async function fetchCountry() {
      setLoading(true)
      setError(false)
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
      setError(error.massage)
      }
      finally { 
        setLoading(false)
        
      }
    }
    fetchCountry();
  }, []);
  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {error && <Heading title={ error} top/>}
        <CountryList list={coutries} />
      </Container>
    </Section>
  );
};
