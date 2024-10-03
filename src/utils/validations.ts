import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Имя обязательно'),
  nickName: Yup.string().required('Никнейм обязательно'),
  email: Yup.string().email('Неправильный адрес почты').required('Почта обязательно'),
  city: Yup.string().required('Грод обязательно'),
  phoneNumber: Yup.string().required('Телефон обязательно'),
  companyName: Yup.string().required('Компания обязательно'),
});
export default validationSchema;
