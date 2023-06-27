import { ArrowLeft, Home, Search } from 'lucide-react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components';

const SearchBarWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 53rem;
  height: 4.5rem;
  margin: 0 auto;
  gap: 0.5rem;
`;

const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  padding: 0.5rem;
  border-radius: 50%;
  color: #ffffff;
  transition: 150ms;

  &:hover {
    cursor: pointer;
    background-color: #ffffff34;
  }
`;

const Input = styled.input`
  width: 100%;
  max-width: 18.75rem;
  border: none;
  outline: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

const Button = styled.button`
  color: #fff;
  border: 1px solid #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: transparent;
  transition: 150ms;
  width: 3rem;
  display: flex;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #7a3ddd;
  }
`;

const Form = styled.form`
  display: flex;
  gap: 0.2rem;
  width: 100%;
  justify-content: flex-end;
`;

type FormData = {
  searchTerm: string;
};

const SearchBar: FC = () => {
  const router = useRouter();

  const { control, register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      searchTerm: '',
    },
  });

  const onSearch = ({ searchTerm }: FormData) => {
    router.push(`/heroes/search?q=${searchTerm}`);
  };

  return (
    <SearchBarWrapper>
      {router.pathname !== '/heroes' && (
        <>
          <BackButton onClick={() => router.back()}>
            <ArrowLeft />
          </BackButton>

          <BackButton onClick={() => router.replace('/heroes')}>
            <Home />
          </BackButton>
        </>
      )}

      <Form onSubmit={handleSubmit(onSearch)}>
        <Controller
          name="searchTerm"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              type="text"
              placeholder="Wolveri..."
              autoComplete="off"
              value={value}
              {...register('searchTerm')}
              onChange={onChange}
            />
          )}
        />
        <Button type="submit">
          <Search width={15} height={15} />
        </Button>
      </Form>
    </SearchBarWrapper>
  );
};

export default SearchBar;
