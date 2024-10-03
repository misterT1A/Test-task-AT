import { yupResolver } from '@hookform/resolvers/yup';
import { type ReactElement, useEffect } from 'react';
import { useForm, useFormState } from 'react-hook-form';

import sendEditUser from '../../../services/sendEditUser';
import type { IFormProps, IFormValues, IUser } from '../../../types/types';
import buttonStyles from '../../../ui/Button/button.module.scss';
import validationSchema from '../../../utils/validations';
import styles from './editFrom.module.scss';

const EditForm = ({ user, modalHandler }: IFormProps): ReactElement => {
  const { control, register, handleSubmit, reset } = useForm<IFormValues>({
    mode: 'all',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      nickName: '',
      email: '',
      city: '',
      phoneNumber: '',
      companyName: '',
    },
  });

  useEffect(() => {
    reset({
      name: user?.name,
      nickName: user?.username,
      email: user?.email,
      city: user?.address.city,
      phoneNumber: user?.phone,
      companyName: user?.company.name,
    });
  }, [user, reset]);

  const { errors, isValid } = useFormState({
    control,
  });

  const submitHandler = async (formData: IFormValues): Promise<void> => {
    const userData = {
      ...user,
      name: formData.name,
      username: formData.nickName,
      address: {
        city: formData.city,
      },
      phone: formData.phoneNumber,
      company: {
        name: formData.companyName,
      },
    };
    const response = await sendEditUser(userData as IUser);
    modalHandler(true);
    console.log(response);
  };

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Данные профиля</h1>
      <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
        <label className={styles.form_label} htmlFor="name">
          Имя
          <input className={styles.form_imput} {...register('name')} type="text" />
          {errors.name && <p className={styles.form_error}>{errors.name.message}</p>}
        </label>
        <label className={styles.form_label} htmlFor="nickName">
          Никнейм
          <input className={styles.form_imput} {...register('nickName')} type="text" />
          {errors.nickName && <p className={styles.form_error}>{errors.nickName.message}</p>}
        </label>
        <label className={styles.form_label} htmlFor="email">
          Почта
          <input className={styles.form_imput} {...register('email')} type="text" />
          {errors.email && <p className={styles.form_error}>{errors.email.message}</p>}
        </label>
        <label className={styles.form_label} htmlFor="city">
          Город
          <input className={styles.form_imput} {...register('city')} type="text" />
          {errors.city && <p className={styles.form_error}>{errors.city.message}</p>}
        </label>
        <label className={styles.form_label} htmlFor="phoneNumber">
          Телефон
          <input className={styles.form_imput} {...register('phoneNumber')} type="text" />
          {errors.phoneNumber && <p className={styles.form_error}>{errors.phoneNumber.message}</p>}
        </label>
        <label className={styles.form_label} htmlFor="companyName">
          Название компании
          <input className={styles.form_imput} {...register('companyName')} type="text" />
          {errors.companyName && <p className={styles.form_error}>{errors.companyName.message}</p>}
        </label>
        <button type="submit" disabled={!isValid} className={buttonStyles.button}>
          Сохранить
        </button>
      </form>
    </section>
  );
};

export default EditForm;
