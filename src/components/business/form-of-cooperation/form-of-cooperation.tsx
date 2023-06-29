import { React, useForm, toast, useEffect } from 'services/imports-npm';

interface IInputs {
  firstName: string;
  position: string;
  email: string;
  confirmEmail: string;
  phone: string;
  company: string;
  address: string;
  marketing: string;
  comment: string;
}

export const FormOfCooperation = () => {
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
    position,
    email,
    confirmEmail,
    phone,
    company,
    address,
    marketing,
    comment,
  }: IInputs) => {
    const newContactCompany = {
      firstName,
      position,
      email,
      confirmEmail,
      phone,
      company,
      address,
      marketing,
      comment,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_STRAPI_URL}/api/support-cooperations`,
        {
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          body: JSON.stringify({ data: newContactCompany }),
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
        position: '',
        email: '',
        confirmEmail: '',
        phone: '',
        company: '',
        address: '',
        marketing: '',
        comment: '',
      });
    }
  }, [formState.isSubmitSuccessful, reset]);

  return (
    <form
      className="mb-20 grid grid-cols-2 gap-5"
      onSubmit={handleSubmit(submitHandler)}
      aria-label="Заявка на сотрудничество"
    >
      <div>
        <label htmlFor="firstName" className="hidden">
          firstName
        </label>
        <input
          type={'text'}
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
        <label htmlFor="position" className="hidden">
          position
        </label>
        <input
          type={'text'}
          placeholder={'ДОЛЖНОСТЬ *'}
          className="h-10 w-full border border-[var(--black-col-4)] bg-[var(--black-col-4)] px-4 text-sm 
			font-bold uppercase outline-none transition-all delay-75 placeholder:text-sm placeholder:font-normal
		placeholder:uppercase placeholder:text-[var(--gray-col-2)] hover:border hover:border-[var(--red-col-1)] focus:bg-transparent"
          autoComplete="off"
          aria-label="Долдность"
          {...register('position', {
            required: 'Пожалуйста, укажите Должность',
            minLength: { value: 2, message: 'Введите более 2 символов' },
            maxLength: { value: 50, message: 'Введите менее 50 символов' },
          })}
        />
        {errors.position && (
          <div className="mt-1 text-xs text-[var(--red-col-1)]">
            {errors.position.message}
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
          placeholder={'ТЕЛЕФОН КОМПАНИИ *'}
          className="h-10 w-full border border-[var(--black-col-4)] bg-[var(--black-col-4)] px-4 text-sm 
			font-bold uppercase outline-none transition-all delay-75 placeholder:text-sm placeholder:font-normal
		placeholder:uppercase placeholder:text-[var(--gray-col-2)] hover:border hover:border-[var(--red-col-1)] focus:bg-transparent"
          autoComplete="off"
          aria-label="Телефон Компании"
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
        <label htmlFor="company" className="hidden">
          company
        </label>
        <input
          type={'text'}
          placeholder={'НАЗВАНИЕ КОМПАНИИ *'}
          className="h-10 w-full border border-[var(--black-col-4)] bg-[var(--black-col-4)] px-4 text-sm 
			font-bold uppercase outline-none transition-all delay-75 placeholder:text-sm placeholder:font-normal
		placeholder:uppercase placeholder:text-[var(--gray-col-2)] hover:border hover:border-[var(--red-col-1)] focus:bg-transparent"
          autoComplete="off"
          aria-label="Название Компании"
          {...register('company', {
            required: 'Пожалуйста, введите название компании',
            minLength: { value: 2, message: 'Введите более 2 символов' },
            maxLength: { value: 20, message: 'Введите менее 20 символов' },
          })}
        />
        {errors.company && (
          <div className="mt-1 text-xs text-[var(--red-col-1)]">
            {errors.company.message}
          </div>
        )}
      </div>

      <div>
        <label htmlFor="address" className="hidden">
          address
        </label>
        <input
          type={'text'}
          placeholder={'АДРЕС КОМПАНИИ И СТРАНА *'}
          className="h-10 w-full border border-[var(--black-col-4)] bg-[var(--black-col-4)] px-4 text-sm 
			font-bold uppercase outline-none transition-all delay-75 placeholder:text-sm placeholder:font-normal
		placeholder:uppercase placeholder:text-[var(--gray-col-2)] hover:border hover:border-[var(--red-col-1)] focus:bg-transparent"
          autoComplete="off"
          aria-label="Адрес компании"
          {...register('address', {
            required: 'Пожалуйста, введите данные',
            minLength: { value: 10, message: 'Введите более 10 символов' },
            maxLength: { value: 150, message: 'Введите менее 150 символов' },
          })}
        />
        {errors.address && (
          <div className="mt-1 text-xs text-[var(--red-col-1)]">
            {errors.address.message}
          </div>
        )}
      </div>

      <div>
        <label htmlFor="marketing" className="hidden">
          marketing
        </label>
        <input
          type={'text'}
          placeholder={'МАРКЕТИНГ / ПРОДАЖИ *'}
          className="h-10 w-full border border-[var(--black-col-4)] bg-[var(--black-col-4)] px-4 text-sm 
			font-bold uppercase outline-none transition-all delay-75 placeholder:text-sm placeholder:font-normal
		placeholder:uppercase placeholder:text-[var(--gray-col-2)] hover:border hover:border-[var(--red-col-1)] focus:bg-transparent"
          autoComplete="off"
          aria-label="Маркетинг/продажи"
          {...register('marketing', {
            required: 'Пожалуйста, введите данные',
            minLength: { value: 2, message: 'Введите более 2 символов' },
            maxLength: { value: 150, message: 'Введите менее 150 символов' },
          })}
        />
        {errors.marketing && (
          <div className="mt-1 text-xs text-[var(--red-col-1)]">
            {errors.marketing.message}
          </div>
        )}
      </div>

      <div className="col-span-2">
        <label htmlFor="comment" className="hidden">
          comment
        </label>
        <textarea
          placeholder="КОММЕНТАРИИ: *"
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
