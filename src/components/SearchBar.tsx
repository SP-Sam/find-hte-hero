import { FC } from 'react';

// ** Next
import { useRouter } from 'next/router';

// ** Libs
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { ArrowLeft, Home, Search } from 'lucide-react';

const SearchBarWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 53.125rem;
  height: 4.6875rem;
  margin: 0 auto;
  gap: 0.2rem;
`;

const BackButton = styled.button`
  display: flex;
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

const Form = styled.form`
  display: flex;
  gap: 0.2rem;
  width: 100%;
  justify-content: flex-end;
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
  display: flex;
  color: #fff;
  border: 1px solid #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: transparent;
  transition: 150ms;

  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #7a3ddd;
  }
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
