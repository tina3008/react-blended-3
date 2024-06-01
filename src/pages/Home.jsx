import { Container, CountryList,  Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

export const Home = () => {
  const [coutries, setCountries] = useState([]);
  useEffect(
    () => {
      async function fetchCountry() {
        const data = await getCountries();
      setCountries(data)
      
      }
      fetchCountry();
    }
  ,[])
  return (
    <Section>
      <Container>
        <CountryList list={coutries} />
       
      </Container>
    </Section>
  );
};
