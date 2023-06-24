import { GetServerSideProps, NextPage } from 'next';

const Root: NextPage = () => {
  return <></>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/heroes',
      permanent: true,
    },
  };
};

export default Root;
