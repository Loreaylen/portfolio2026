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
    className=''
    >
      <ul className='flex flex-row gap-2 p-2 border-amber-300 border-2'>
        {links.map(({ key, href }) => (
          <li key={key}
          className='p-3'
          >
            <a href={href}>
              {t(`nav.${key}`, { ns: 'translation' })}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;