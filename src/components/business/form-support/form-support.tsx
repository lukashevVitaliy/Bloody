import { React, useForm, toast, useEffect } from 'services/imports-npm';

interface IInputs {
  firstName: string;
  lastName: string;
  email: string;
  confirmEmail: string;
  phone: string;
  model: string;
  theme: string;
  comment: string;
}

export const FormSupport = () => {
  const {
    register,
    getValues,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm<IInputs>();

  const submitHandler = async ({
    firstName,
    lastName,
    email,
    confirmEmail,
    phone,
    model,
    theme,
    comment,
  }: IInputs) => {
    const newPersonalInfo = {
      firstName,
      lastName,
      email,
      confirmEmail,
      phone,
      model,
      theme,
      comment,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_STRAPI_URL}/api/support-requests`,
        {
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          body: JSON.stringify({ data: newPersonalInfo }),
        }
      );

      if (!response.ok) {
        throw new Response('', {
          status: response.status,
          statusText: 'The problem is related to routing !!!',
        });
      }
    } catch (error) {
      toast.warn('Данные не отправлены !!!');
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      toast.success('Данные успешно отправлены...');
      reset({
        firstName: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        phone: '',
        model: '',
        theme: '',
        comment: '',
      });
    }
  }, [formState.isSubmitSuccessful, reset]);

  return (
    <form
      className="mb-20 grid grid-cols-2 gap-5"
      onSubmit={handleSubmit(submitHandler)}
      aria-label="Заявка в техподдержку"
    >
      <div>
        <label htmlFor="firstName" className="hidden">
          firstName
        </label>
        <input
          type="text"
          placeholder={'ИМЯ *'}
          className="h-10 w-full border border-[var(--black-col-4)] bg-[var(--black-col-4)] px-4 text-sm 
			font-bold uppercase outline-none transition-all delay-75 placeholder:text-sm placeholder:font-normal
		placeholder:uppercase placeholder:text-[var(--gray-col-2)] hover:border hover:border-[var(--red-col-1)] focus:bg-transparent"
          autoComplete="off"
          aria-label="Имя"
          {...register('firstName', {
            required: 'Пожалуйста, введите Имя',
            minLength: { value: 2, message: 'Введите более 2 символов' },
            maxLength: { value: 20, message: 'Введите менее 20 символов' },
          })}
        />
        {errors.firstName && (
          <div className="mt-1 text-xs text-[var(--red-col-1)]">
            {errors.firstName.message}
          </div>
        )}
      </div>

      <div>
        <label htmlFor="lastName" className="hidden">
          lastName
        </label>
        <input
          type={'text'}
          placeholder={'ФАМИЛИЯ *'}
          className="h-10 w-full border border-[var(--black-col-4)] bg-[var(--black-col-4)] px-4 text-sm 
			font-bold uppercase outline-none transition-all delay-75 placeholder:text-sm placeholder:font-normal
		placeholder:uppercase placeholder:text-[var(--gray-col-2)] hover:border hover:border-[var(--red-col-1)] focus:bg-transparent"
          autoComplete="off"
          aria-label="Фамилия"
          {...register('lastName', {
            required: 'Пожалуйста, введите Фамилию',
            minLength: { value: 2, message: 'Введите более 2 символов' },
            maxLength: { value: 30, message: 'Введите менее 30 символов' },
          })}
        />
        {errors.lastName && (
          <div className="mt-1 text-xs text-[var(--red-col-1)]">
            {errors.lastName.message}
          </div>
        )}
      </div>

      <div>
        <label htmlFor="email" className="hidden">
          email
        </label>
        <input
          type={'email'}
          placeholder={'ЭЛЕКТРОННЫЙ АДРЕС *'}
          className="h-10 w-full border border-[var(--black-col-4)] bg-[var(--black-col-4)] px-4 text-sm 
			font-bold uppercase outline-none transition-all delay-75 placeholder:text-sm placeholder:font-normal
		placeholder:uppercase placeholder:text-[var(--gray-col-2)] hover:border hover:border-[var(--red-col-1)] focus:bg-transparent"
          autoComplete="off"
          aria-label="Почта"
          {...register('email', {
            required: 'Пожалуйста, введите адрес эл.почты',
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
              message: 'Пожалуйста, введите правильный адрес эл.почты',
            },
          })}
        />
        {errors.email && (
          <div className="mt-1 text-xs text-[var(--red-col-1)]">
            {errors.email.message}
          </div>
        )}
      </div>

      <div>
        <label htmlFor="confirmEmail" className="hidden">
          confirmEmail
        </label>
        <input
          type={'email'}
          placeholder={'ПОДТВЕРДИТЕ ЭЛЕКТРОННЫЙ АДРЕС *'}
          className="h-10 w-full border border-[var(--black-col-4)] bg-[var(--black-col-4)] px-4 text-sm 
			font-bold uppercase outline-none transition-all delay-75 placeholder:text-sm placeholder:font-normal
		placeholder:uppercase placeholder:text-[var(--gray-col-2)] hover:border hover:border-[var(--red-col-1)] focus:bg-transparent"
          autoComplete="off"
          aria-label="Подтверждение почты"
          {...register('confirmEmail', {
            required: 'Пожалуйста, введите адрес эл.почты',
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
              message: 'Пожалуйста, введите правильный адрес эл.почты',
            },
            validate: (value) => value === getValues('email'),
          })}
        />
        {errors.confirmEmail && (
          <div className="mt-1 text-xs text-red-700">
            {errors.confirmEmail.message}
          </div>
        )}
        {errors.confirmEmail && errors.confirmEmail.type === 'validate' && (
          <div className="mt-1 text-xs text-[var(--red-col-1)]">
            Повторно введите корректный адрес эл.почты
          </div>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="hidden">
          phone
        </label>
        <input
          type={'tel'}
          placeholder={'ТЕЛЕФОН *'}
          className="h-10 w-full border border-[var(--black-col-4)] bg-[var(--black-col-4)] px-4 text-sm 
			font-bold uppercase outline-none transition-all delay-75 placeholder:text-sm placeholder:font-normal
		placeholder:uppercase placeholder:text-[var(--gray-col-2)] hover:border hover:border-[var(--red-col-1)] focus:bg-transparent"
          autoComplete="off"
          aria-label="Телефон"
          {...register('phone', {
            required: 'Пожалуйста, введите номер телефона',
            pattern: {
              value:
                /^[+]?[0-9]{1,3}?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3}[-\s.]?[0-9]{2}[-\s.]?[0-9]{2}$/,
              message: 'Пожалуйста, введите правильный номер телефона',
            },
          })}
        />
        {errors.phone && (
          <div className="mt-1 text-xs text-[var(--red-col-1)]">
            {errors.phone.message}
          </div>
        )}
      </div>

      <div>
        <label htmlFor="model" className="hidden">
          model
        </label>
        <input
          type={'text'}
          placeholder={'МОДЕЛЬ ПРОДУКТА *'}
          className="h-10 w-full border border-[var(--black-col-4)] bg-[var(--black-col-4)] px-4 text-sm 
			font-bold uppercase outline-none transition-all delay-75 placeholder:text-sm placeholder:font-normal
		placeholder:uppercase placeholder:text-[var(--gray-col-2)] hover:border hover:border-[var(--red-col-1)] focus:bg-transparent"
          autoComplete="off"
          aria-label="Модель"
          {...register('model', {
            required: 'Пожалуйста, введите модель',
            minLength: { value: 2, message: 'Введите более 2 символов' },
            maxLength: { value: 30, message: 'Введите менее 30 символов' },
          })}
        />
        {errors.model && (
          <div className="mt-1 text-xs text-[var(--red-col-1)]">
            {errors.model.message}
          </div>
        )}
      </div>

      <div className="col-span-2">
        <label htmlFor="theme" className="hidden">
          theme
        </label>
        <input
          type={'text'}
          placeholder={'ТЕМА *'}
          className="h-10 w-full border border-[var(--black-col-4)] bg-[var(--black-col-4)] px-4 text-sm 
			font-bold uppercase outline-none transition-all delay-75 placeholder:text-sm placeholder:font-normal
		placeholder:uppercase placeholder:text-[var(--gray-col-2)] hover:border hover:border-[var(--red-col-1)] focus:bg-transparent"
          autoComplete="off"
          aria-label="Тема"
          {...register('theme', {
            required: 'Пожалуйста, укажите тему',
            minLength: { value: 2, message: 'Введите более 2 символов' },
            maxLength: { value: 50, message: 'Введите менее 50 символов' },
          })}
        />
        {errors.theme && (
          <div className="mt-1 text-xs text-[var(--red-col-1)]">
            {errors.theme.message}
          </div>
        )}
      </div>

      <div className="col-span-2">
        <label htmlFor="comment" className="hidden">
          comment
        </label>
        <textarea
          placeholder="КОММЕНТАРИИ: (ПОЖАЛУЙСТА, ПОСТАРАЙТЕСЬ ОБЪЯСНИТЬ ЭТО КАК МОЖНО БОЛЕЕ ПОДРОБНО) *"
          className="h-[10rem] w-full resize-none border border-[var(--black-col-4)] bg-[var(--black-col-4)] p-4
			text-sm font-bold uppercase outline-none transition-all delay-75 placeholder:text-sm
			placeholder:font-normal placeholder:uppercase placeholder:text-[var(--gray-col-2)] hover:border hover:border-[var(--red-col-1)]
			focus:bg-transparent"
          aria-label="Комментарий"
          {...register('comment', {
            required: 'Пожалуйста, оставьте комментарий',
            minLength: { value: 10, message: 'Введите более 10 символов' },
            maxLength: { value: 1000, message: 'Введите менее 1000 символов' },
          })}
        />
        {errors.comment && (
          <div className="mt-1 text-xs text-[var(--red-col-1)]">
            {errors.comment.message}
          </div>
        )}
      </div>
      <button
        className="col-span-2 ml-auto mr-0 bg-[var(--black-col-4)] py-2 px-4 tracking-wider 
			transition-all duration-150 hover:bg-[var(--red-col-1)] hover:text-[var(--white-col)] active:scale-95 active:bg-[var(--red-col-2)]"
        type="submit"
      >
        Отправить
      </button>
    </form>
  );
};
