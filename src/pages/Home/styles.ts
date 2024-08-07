import styled from 'styled-components'

export const HomeContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseCountdownButton = styled.button `
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  color: ${ props => props.theme['gray-100']};

  display: flex;
  align-items: center;
  justify-content: center;

  gap: .5rem;
  font-weight: bold;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
    background-color: ${ props => props.theme['green-500']};
    transition: background-color .2s;

    &:not(:disabled):hover {
    background-color: ${ props => props.theme['green-700']};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
    background-color: ${ props => props.theme['red-500']};
    transition: background-color .2s;

    &:focus {
      box-shadow: none;
    }

    &:not(:disabled):hover {
    background-color: ${ props => props.theme['red-700']};
  }
`