import {
  Container,
  CountryInfo,
  GoBackBtn,
  Heading,
  Loader,
  Section,
} from 'components';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/countryApi';

export const Country = () => {
  const location = useLocation();

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { countryId } = useParams();
  useEffect(() => {
    if (!countryId) return;

    async function fetchData() {
      setLoading(true);
      setError(false);
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [countryId]);

  const goBack = useRef(location.state || '/');

  return (
    <Section>
      <Container>
        <GoBackBtn path={goBack.current}>Go back</GoBackBtn>
        {loading && <Loader />}
        {error && <Heading title={error} top />}
        {country && <CountryInfo {...country} />}
      </Container>
    </Section>
  );
};
