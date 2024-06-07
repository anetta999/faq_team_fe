import { useTranslation } from 'react-i18next';
import {
  InputContainer,
  OtpFrom,
  ResendButton,
  VerifyBtn,
  VerifyInfoContainer,
} from 'components/otpForm/styles.ts';
import {
  useRestorePassMutation,
  useVerifyOtpMutation,
} from 'src/redux/authApiSlice.ts';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from 'components/signUpForm/types.tsx';
import { useEffect, useState } from 'react';

export const OtpForm = ({ email, action }) => {
  const { t } = useTranslation();
  const [verifyOtp] = useVerifyOtpMutation();
  const [sendOtp] = useRestorePassMutation();
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
      console.log(data);
      for (const datum in data) {
        otpCode += data[datum];
      }
      console.log(otpCode);
      const response = await verifyOtp({
        otp_code: otpCode,
        email,
      });
      console.log(response);
      if (response.error) {
        throw new Error();
      }
      if (action === 'registr') {
        navigate('/');
      } else {
        navigate('/new-password');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const resetTimer = () => {
    setTimer(55);
  };

  const resend = async () => {
    await sendOtp(email);
    resetTimer();
  };

  useEffect(() => {
    if (timer > 0) {
      const timeoutId = setTimeout(() => setTimer(timer - 1), 1000);
      // Cleanup function to clear the timeout when the component unmounts
      return () => clearTimeout(timeoutId);
    }
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
              maxLength={1}
            />
          );
        })}
      </InputContainer>
      <VerifyInfoContainer>
        <div>
          {t('verificationEmail.expired')} {timer}
        </div>
        <ResendButton onClick={resend}>
          {t('verificationEmail.resend')}
        </ResendButton>
      </VerifyInfoContainer>
      <VerifyBtn type={'submit'} variant="black">
        {t('verificationEmail.submitBtn')}
      </VerifyBtn>
    </OtpFrom>
  );
};
