import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const { t } = useTranslation(['translation', 'common']);

  const links = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'experience', href: '#experience' },
    { key: 'projects', href: '#projects' },
    { key: 'education', href: '#education' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <nav 
    aria-label={t('navAriaLabel', { ns: 'common' })}
    className='max-lg:w-full max-lg:p-3'
    >
      <ul className='w-auto flex flex-row gap-3 p-2 max-lg:flex-col'>
        {links.map(({ key, href }) => (
          <li key={key}
          className='p-2 text-sm font-semibold bg-transparent rounded-lg cursor-pointer max-lg:w-full'
          >
            <a href={href} 
              className='text-text-primary font-dm-sans text-base'>
              {t(`nav.${key}`, { ns: 'translation' })}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;