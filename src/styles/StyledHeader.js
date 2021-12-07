import styled from 'styled-components/macro';

const StyledHeader = styled.header`
  display: flex;
  align-items: flex-end;
  position: relative;
  background-color: inherit;
  height: 60vh;
  max-height: 500px;
  min-height: 250px;

  @media (min-width: 768px) {
    min-height: 340px;
  }

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 20vh;
    position: absolute;
    top: 100%;
    z-index: -1;
  }

  .header__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;
    width: 100%;
    max-width: var(--site-max-width);
    margin: 0 auto;
    padding: var(--spacing-lg) var(--spacing-md);

    @media (min-width: 768px) {
      padding: var(--spacing-xl) var(--spacing-xxl);
    }
  }

  img.header__img {
    width: 20%;
    max-width: 150px;
    min-width: 150px;
    /* box-shadow: 0 4px 60px rgb(0 0 0 / 50%); */
    background-color: var(--dark-grey);
    border-radius: ${props => props.type === 'user' ? '50%' : '0'};
    margin: var(--spacing-sm);

    /* @media (min-width: 768px) {
      margin-right: var(--spacing-xl);
    } */
  }

  .header__overline {
    text-transform: uppercase;
    font-size: var(--fz-xxs);
    font-weight: 700;
    margin-bottom: var(--spacing-xs);
  }

  h1.header__name {
    color: var(--white);
    font-weight: 650;
    font-size: var(--fz-xxxl);
    line-height: 2.5;
    margin: 0 auto;
    text-align: center;

    /* @media (min-width: 768px) {
      margin: 0 auto;
    } */
  }

  .header__meta {
    display: flex;
    align-items: center;
    font-size: var(--fz-sm);
    color: var(--green);
    margin: 0;
    text-transform: uppercase;

    span {
      display: flex;
      align-items: center;

      &:not(:last-of-type)::after {
        content: '•';
        display: block;
        margin: 0 var(--spacing-xs);
        color: var(--light-grey);
        font-size: 8px;
      }
    }
  }
`;

export default StyledHeader;