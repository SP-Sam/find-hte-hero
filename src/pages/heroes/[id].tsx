import { useRouter } from 'next/router';

const HeroDetails = () => {
  const router = useRouter();
  return <div>{router.query.id}</div>;
};

export default HeroDetails;
