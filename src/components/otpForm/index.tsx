import { useTranslation } from 'react-i18next';
import {
  InputContainer,
  OtpFrom,
  ResendButton,
  VerifyBtn,
  VerifyInfoContainer,
} from 'components/otpForm/styles.ts';
import { useVerifyOtpMutation } from 'src/redux/authApiSlice.ts';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from 'components/signUpForm/types.tsx';
import { useEffect, useState } from 'react';

export const OtpForm = () => {
  const { t } = useTranslation();
  const [verifyOtp] = useVerifyOtpMutation();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      otpInput0: '',
    },
  });

  const [timer, setTimer] = useState<number>(55);

  const checkOtp: SubmitHandler<Inputs> = async data => {
    try {
      let otpCode = '';
      for (const datum in data) {
        otpCode += data[datum];
      }
      const response = await verifyOtp({
        otp_code: otpCode,
        id: 'dadfdc5d-8b83-42ad-bbb0-5b5f5cd9593e',
      });
      console.log(response);
      navigate('');
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]);
  return (
    <OtpFrom onSubmit={handleSubmit(checkOtp)}>
      <InputContainer>
        {new Array(6).fill(null).map((_, index) => {
          return (
            <input
              key={index}
              type={'text'}
              placeholder={'1'}
              {...register(`otpInput${index}`)}
            />
          );
        })}
      </InputContainer>
      <VerifyInfoContainer>
        <div>
          {t('verificationEmail.expired')} {timer}
        </div>
        <ResendButton>{t('verificationEmail.resend')}</ResendButton>
      </VerifyInfoContainer>
      <VerifyBtn type={'submit'} variant="black">
        {t('verificationEmail.submitBtn')}
      </VerifyBtn>
    </OtpFrom>
  );
};
