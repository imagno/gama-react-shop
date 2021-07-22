import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: auto;

  --color-base: #6EBF54;
  --second-color: #8C52E5;

  .nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    background: var(--second-color);

    .cart{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  section {
    height: 100vh;
    background: var(--color-base);
    display: flex;
    justify-content: space-around;
    padding: 5px;

    .product-content{
      display: grid;
      text-align: center;
      height: 400px;
      width: 200px;
      background: var(--second-color);
      padding: 12px;

    }
  }
`