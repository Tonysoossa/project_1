import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = {
    statusText: "gang",
    message: "gang message",
  };
  useRouteError();

  return (
    <div id="ErrorPage">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
