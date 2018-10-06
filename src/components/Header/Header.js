import React from 'react';
import Octicon, { MarkGithub } from '@githubprimer/octicons-react';
import { SITE_HEADLINE, GITHUB_URL } from '../../siteMeta';
import './Header.css';

const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header-Title">{SITE_HEADLINE}</h1>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="Header-Link"
        href={GITHUB_URL}>
        <Octicon size="medium" icon={MarkGithub} ariaLabel="Github Icon" />
      </a>
      <div className="Pixabay">
        <a
          href="https://pixabay.com/"
          target="_blank"
          rel="noopener noreferrer">
          <img
            src="https://pixabay.com/static/img/logo_square.svg"
            alt="Pixabay"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
