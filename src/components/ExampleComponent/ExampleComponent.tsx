import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ExampleForm } from './ExamleComponent.styles';

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

type Inputs = {
  name: string;
  email: string;
};

export const ExampleComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: '',
      email: '',
    },
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  return (
    <>
      <ExampleForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" {...register('name')} placeholder="Name" />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <input type="email" {...register('email')} placeholder="Email" />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <button type="submit"></button>
      </ExampleForm>
    </>
  );
};
