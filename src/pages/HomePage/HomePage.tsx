import { ExampleComponent } from 'src/components/ExampleComponent/ExampleComponent';
import InputField from 'src/components/InputField/InputField';

const HomePage = () => {
  return (
    <>
      <div>
        HomePage
        <ExampleComponent />
      </div>
      <div>
        <InputField
          label={'test label'}
          placeholder={'test placefolder'}
          validate={(value: string) => value}
        />
      </div>
    </>
  );
};

export default HomePage;
