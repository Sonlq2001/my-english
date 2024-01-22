import { Component, ReactNode } from "react";

import { Container } from "./ErrorBoundary.styles";
import ImageError from "@app/assets/images/error.png";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Container>
          <h1>Sorry, something went wrong !</h1>
          <img src={ImageError} alt="image-error" />
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
