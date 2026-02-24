import { Flag } from "lucide-react";
import { Link, useRouteError } from "react-router-dom";

export function Error() {
  const error: any = useRouteError();

  let title = "Error 404";
  let message = "It looks like something went wrong.";

  if (error) {
    if (error.status === 404) {
      title = "Error 404";
      message = "The page you are looking for does not exist.";
    } else if (error.statusText || error.message) {
      title = "Oops!";
      message = error.statusText || error.message;
    }
  }

  return (
    <div className="h-screen mx-auto grid place-items-center text-center px-8">
      <div>
        <Flag className="w-20 h-20 mx-auto" />
        <h1 className="mt-10 !text-3xl !leading-snug md:!text-4xl">{title}</h1>
        <p className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
          {message}
        </p>
        <Link
          to="/"
          className="w-full px-4 md:w-[8rem] bg-primary hover:bg-primary/90 text-white rounded-md py-2"
        >
          back home
        </Link>
      </div>
    </div>
  );
}