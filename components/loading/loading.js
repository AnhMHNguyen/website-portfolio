import { LoadingWrapper, Container, Dot } from './loading.style'

const Loading = () => (
  <Container>
    <LoadingWrapper>
      <Dot />
      <Dot />
      <Dot />
      <Dot />
    </LoadingWrapper>
  </Container>
);

export default Loading;